import { useEffect } from 'react';
import Lenis from 'lenis';

/**
 * Premium easing function - smooth exponential decay
 * Creates apple-like, buttery smooth scrolling
 */
const premiumEasing = (t: number) => {
  // Exponential ease-out with extended smoothness
  return 1 - Math.pow(1 - t, 4);
};

interface LenisConfig {
  duration?: number;
  easing?: (t: number) => number;
  smoothWheel?: boolean;
  smoothTouch?: boolean;
  touchMultiplier?: number;
  infinite?: boolean;
}

/**
 * useLenis Hook
 * Initialize smooth scrolling with Lenis
 * Provides premium, lag-free scrolling experience
 * Works seamlessly with animations and transitions
 * 
 * @param config - Optional Lenis configuration
 * @returns void
 */
export function useLenis(config: LenisConfig = {}) {
  useEffect(() => {
    // Detect if device is mobile
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    // Initialize Lenis with premium smooth scrolling
    const lenisConfig: LenisConfig = {
      duration: config.duration ?? 1.8, // Longer duration for glided feel
      easing: config.easing ?? premiumEasing,
      smoothWheel: config.smoothWheel ?? true,
      // Disable smooth touch on mobile to avoid conflicts with native scroll
      smoothTouch: isMobile ? false : (config.smoothTouch ?? false),
      touchMultiplier: config.touchMultiplier ?? (isMobile ? 2 : 1.5),
      infinite: config.infinite ?? false,
    };

    const lenis = new Lenis(lenisConfig as any);

    // Animation loop - runs continuously for smooth interpolation
    let lastTime = 0;
    function raf(time: number) {
      // Calculate delta for frame-rate independent timing
      const deltaTime = time - lastTime;
      lastTime = time;

      // Only update if delta is reasonable (avoid huge jumps on tab switch)
      if (deltaTime < 1000) {
        lenis.raf(time);
      }

      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    // Scroll to top handler for page navigation
    const handleScrollToTop = () => {
      lenis.scrollTo(0, { duration: 0.6 });
    };

    // Listen for scroll-to-top events (for navigation)
    window.addEventListener('lenis-scroll-to-top', handleScrollToTop);

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('lenis-scroll-to-top', handleScrollToTop);
      lenis.destroy();
    };
  }, [config]);
}
