const sanitizeHtml = require("sanitize-html");

// Whitelist matching what the admin editor (client/src/components/blog/editor)
// can produce. Everything else is stripped before a post is stored.
const SAFE_COLOR = [/^#[0-9a-f]{3,8}$/i, /^rgba?\(\s*[\d.\s,%]+\)$/i];
const SAFE_SIZE = [/^\d{1,4}(\.\d+)?(px|%)$/];

const SANITIZE_OPTIONS = {
  allowedTags: [
    "p", "br", "h2", "h3", "h4", "strong", "b", "em", "i", "u", "s", "sub", "sup",
    "code", "pre", "mark", "span", "a", "ul", "ol", "li", "blockquote", "hr",
    "figure", "figcaption", "img", "table", "colgroup", "col", "thead", "tbody",
    "tr", "th", "td", "div", "iframe", "label", "input",
  ],
  allowedAttributes: {
    a: ["href", "target", "rel", "title"],
    img: ["src", "alt", "title", "width", "height", "loading"],
    figure: ["class", "style", "data-align", "data-width"],
    p: ["style"], h2: ["style", "id"], h3: ["style", "id"], h4: ["style", "id"],
    span: ["style"], mark: ["style", "data-color"],
    td: ["colspan", "rowspan", "colwidth", "style"],
    th: ["colspan", "rowspan", "colwidth", "style"],
    col: ["style", "span"], table: ["style"],
    iframe: ["src", "width", "height", "allowfullscreen", "frameborder", "allow", "title"],
    div: ["data-youtube-video", "data-type", "class"],
    ul: ["data-type"], ol: ["start", "type"], li: ["data-type", "data-checked"],
    input: ["type", "checked", "disabled"],
    pre: ["class"], code: ["class"],
  },
  allowedClasses: {
    figure: ["blog-figure", "align-left", "align-center", "align-right", "align-wide"],
    div: ["tableWrapper", "callout", "callout-info", "callout-warning", "callout-success"],
    pre: [/^language-[\w-]+$/], code: [/^language-[\w-]+$/],
  },
  allowedStyles: {
    "*": {
      "text-align": [/^(left|right|center|justify)$/],
      color: SAFE_COLOR,
      "background-color": SAFE_COLOR,
      width: SAFE_SIZE,
      "min-width": SAFE_SIZE,
    },
  },
  allowedSchemes: ["http", "https", "mailto", "tel"],
  allowedSchemesByTag: { img: ["http", "https"] },
  allowProtocolRelative: false,
  allowedIframeHostnames: ["www.youtube.com", "www.youtube-nocookie.com"],
  // Iframes whose src was rejected above.
  exclusiveFilter: (frame) => frame.tag === "iframe" && !frame.attribs.src,
  transformTags: {
    a: (tagName, attribs) => {
      if (attribs.target === "_blank") {
        const rel = new Set((attribs.rel || "").split(/\s+/).filter(Boolean));
        rel.add("noopener");
        rel.add("noreferrer");
        attribs.rel = [...rel].join(" ");
      }
      return { tagName, attribs };
    },
    img: (tagName, attribs) => ({ tagName, attribs: { ...attribs, loading: "lazy" } }),
    input: (tagName, attribs) => ({ tagName, attribs: { ...attribs, type: "checkbox", disabled: "" } }),
  },
};

const sanitizeContent = (html) => sanitizeHtml(String(html || ""), SANITIZE_OPTIONS);

const ENTITIES = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#39;": "'", "&nbsp;": " " };

/** Tag-free text of the content, with block boundaries kept as spaces. */
const toPlainText = (html) =>
  sanitizeHtml(String(html || "").replace(/<\/(p|h\d|li|td|th|figcaption|blockquote|pre|div)>|<br\s*\/?>/gi, "$& "), {
    allowedTags: [],
    allowedAttributes: {},
  })
    .replace(/&(amp|lt|gt|quot|#39|nbsp);/g, (m) => ENTITIES[m])
    .replace(/\s+/g, " ")
    .trim();

const countWords = (text) => (text ? text.split(/\s+/).filter(Boolean).length : 0);

/** Minutes at ~220 words per minute, minimum 1. */
const readingTime = (words) => Math.max(1, Math.round(words / 220));

const slugify = (value) =>
  String(value || "")
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 100)
    .replace(/-+$/, "");

const escapeRegex = (value) => String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

module.exports = { sanitizeContent, toPlainText, countWords, readingTime, slugify, escapeRegex };
