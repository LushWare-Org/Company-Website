// TipTap setup for the admin blog editor. Output HTML must stay within the
// server whitelist in server/utils/blogHtml.js.
import { Extension, Node, mergeAttributes, type Editor, type Extensions } from '@tiptap/core'
import { ReactNodeViewRenderer } from '@tiptap/react'
import { Plugin, PluginKey } from '@tiptap/pm/state'
import { Decoration, DecorationSet } from '@tiptap/pm/view'
import type { Node as PMNode } from '@tiptap/pm/model'
import StarterKit from '@tiptap/starter-kit'
import TextAlign from '@tiptap/extension-text-align'
import Highlight from '@tiptap/extension-highlight'
import { TextStyle, Color } from '@tiptap/extension-text-style'
import Subscript from '@tiptap/extension-subscript'
import Superscript from '@tiptap/extension-superscript'
import { TableKit } from '@tiptap/extension-table'
import Youtube from '@tiptap/extension-youtube'
import { TaskList, TaskItem } from '@tiptap/extension-list'
import Typography from '@tiptap/extension-typography'
import { CharacterCount, Placeholder } from '@tiptap/extensions'
import ImageNodeView from './ImageNodeView'

export type ImageAlign = 'left' | 'center' | 'right' | 'wide'
export type CalloutVariant = 'info' | 'warning' | 'success'

export interface FigureImageAttrs {
  src: string
  alt?: string
  title?: string | null
  caption?: string
  /** % of the article width. */
  width?: number
  align?: ImageAlign
}

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    figureImage: {
      setFigureImage: (attrs: FigureImageAttrs) => ReturnType
    }
    callout: {
      toggleCallout: (variant?: CalloutVariant) => ReturnType
    }
  }
}

/** Image with caption, width (%) and alignment, rendered as <figure class="blog-figure align-*">. */
export const FigureImage = Node.create({
  name: 'figureImage',
  group: 'block',
  atom: true,
  draggable: true,
  selectable: true,

  addAttributes() {
    return {
      src: { default: null },
      alt: { default: '' },
      title: { default: null },
      caption: { default: '' },
      width: { default: 100 },
      align: { default: 'center' },
    }
  },

  parseHTML() {
    return [
      {
        tag: 'figure.blog-figure',
        getAttrs: (el) => {
          const img = el.querySelector('img')
          if (!img) return false
          return {
            src: img.getAttribute('src'),
            alt: img.getAttribute('alt') ?? '',
            title: img.getAttribute('title'),
            caption: el.querySelector('figcaption')?.textContent ?? '',
            width: Number(el.getAttribute('data-width')) || 100,
            align: el.getAttribute('data-align') || 'center',
          }
        },
      },
      {
        tag: 'img[src]',
        getAttrs: (el) => ({ src: el.getAttribute('src'), alt: el.getAttribute('alt') ?? '', title: el.getAttribute('title') }),
      },
    ]
  },

  renderHTML({ node }) {
    const { src, alt, title, caption, width, align } = node.attrs
    const figure = { class: `blog-figure align-${align}`, style: `width:${width}%`, 'data-align': align, 'data-width': String(width) }
    const img = ['img', { src, alt, ...(title ? { title } : {}), loading: 'lazy' }] as const
    return caption ? ['figure', figure, img, ['figcaption', {}, caption]] : ['figure', figure, img]
  },

  addNodeView() {
    // The floating controls handle their own events (inputs, resize handles).
    return ReactNodeViewRenderer(ImageNodeView, {
      stopEvent: ({ event }) => Boolean((event.target as HTMLElement | null)?.closest?.('[data-image-controls]')),
    })
  },

  addCommands() {
    return {
      setFigureImage:
        (attrs) =>
        ({ commands }) =>
          commands.insertContent({ type: this.name, attrs }),
    }
  },
})

/** Coloured note box: <div class="callout callout-info|warning|success">. */
export const Callout = Node.create({
  name: 'callout',
  group: 'block',
  content: 'block+',
  defining: true,

  addAttributes() {
    return {
      variant: {
        default: 'info',
        parseHTML: (el) => (['warning', 'success'] as const).find((v) => el.classList.contains(`callout-${v}`)) ?? 'info',
        renderHTML: () => ({}),
      },
    }
  },

  parseHTML() {
    return [{ tag: 'div.callout' }]
  },

  renderHTML({ node, HTMLAttributes }) {
    return ['div', mergeAttributes(HTMLAttributes, { class: `callout callout-${node.attrs.variant}` }), 0]
  },

  addCommands() {
    return {
      toggleCallout:
        (variant = 'info') =>
        ({ editor, commands }) => {
          if (!editor.isActive(this.name)) return commands.wrapIn(this.name, { variant })
          if (editor.isActive(this.name, { variant })) return commands.lift(this.name)
          return commands.updateAttributes(this.name, { variant })
        },
    }
  },
})

/* ── Find & highlight ─────────────────────────────────────────────── */

export interface SearchState {
  term: string
  current: number
  caseSensitive: boolean
}

export const searchKey = new PluginKey<SearchState>('blogSearch')

/** Text matches per textblock, so a phrase split across bold/italic still matches. */
export function findMatches(doc: PMNode, term: string, caseSensitive = false): { from: number; to: number }[] {
  if (!term) return []
  const needle = caseSensitive ? term : term.toLowerCase()
  const results: { from: number; to: number }[] = []
  doc.descendants((node, pos) => {
    if (!node.isTextblock) return true
    let text = ''
    const map: number[] = []
    node.forEach((child, offset) => {
      const chunk = child.isText ? child.text! : '￼'
      for (let i = 0; i < chunk.length; i++) map.push(pos + 1 + offset + i)
      text += chunk
    })
    const haystack = caseSensitive ? text : text.toLowerCase()
    for (let i = haystack.indexOf(needle); i !== -1; i = haystack.indexOf(needle, i + needle.length)) {
      results.push({ from: map[i], to: map[i + needle.length - 1] + 1 })
    }
    return false
  })
  return results
}

export const SearchHighlight = Extension.create({
  name: 'searchHighlight',
  addProseMirrorPlugins() {
    return [
      new Plugin<SearchState>({
        key: searchKey,
        state: {
          init: () => ({ term: '', current: -1, caseSensitive: false }),
          apply: (tr, value) => tr.getMeta(searchKey) ?? value,
        },
        props: {
          decorations(state) {
            const search = searchKey.getState(state)
            if (!search?.term) return null
            const matches = findMatches(state.doc, search.term, search.caseSensitive)
            return DecorationSet.create(
              state.doc,
              matches.map((m, i) => Decoration.inline(m.from, m.to, { class: i === search.current ? 'search-match search-match-current' : 'search-match' })),
            )
          },
        },
      }),
    ]
  },
})

export const setSearch = (editor: Editor, value: SearchState) => {
  if (!editor.isDestroyed) editor.view.dispatch(editor.state.tr.setMeta(searchKey, value))
}

/* ── Editor ─────────────────────────────────────────────────────── */

export const buildExtensions = (): Extensions => [
  StarterKit.configure({
    heading: { levels: [2, 3, 4] },
    link: {
      openOnClick: false,
      autolink: true,
      defaultProtocol: 'https',
      // Set per link in the link dialog (new tab, nofollow).
      HTMLAttributes: { target: null, rel: null },
    },
  }),
  Placeholder.configure({
    placeholder: ({ node }) => (node.type.name === 'heading' ? `Heading ${node.attrs.level}` : 'Start writing your article… (type, paste, or drop images here)'),
  }),
  TextAlign.configure({ types: ['heading', 'paragraph'] }),
  TextStyle,
  Color,
  Highlight.configure({ multicolor: true }),
  Subscript,
  Superscript,
  TableKit.configure({ table: { resizable: true } }),
  Youtube.configure({ nocookie: true, width: 640, height: 360, controls: true }),
  TaskList,
  TaskItem.configure({ nested: true }),
  Typography,
  CharacterCount,
  FigureImage,
  Callout,
  SearchHighlight,
]
