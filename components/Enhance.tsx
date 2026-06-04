"use client";

import { useEffect } from "react";

/**
 * Progressive enhancement, mounted once:
 *  - adds a border to the nav and fills the scroll-progress bar on scroll
 *  - scroll-reveals `.reveal` elements as they enter the viewport
 *  - counts up any `[data-count]` numbers the first time they appear
 *
 * Everything degrades gracefully: without JS, content is fully visible
 * (see the `.js-ready` gating in globals.css) and numbers show their final
 * value, since that value is already in the markup.
 */
export default function Enhance() {
  useEffect(() => {
    const nav = document.querySelector(".nav");
    const progress = document.querySelector<HTMLElement>(".scroll-progress");

    const onScroll = () => {
      const y = window.scrollY;
      if (nav) nav.classList.toggle("scrolled", y > 8);
      if (progress) {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const pct = max > 0 ? y / max : 0;
        progress.style.transform = `scaleX(${pct})`;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const countUp = (el: HTMLElement) => {
      const to = Number(el.dataset.count || "0");
      const prefix = el.dataset.prefix || "";
      const suffix = el.dataset.suffix || "";
      const dur = 1300;
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min((now - start) / dur, 1);
        const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
        el.textContent = prefix + Math.round(eased * to) + suffix;
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    const reveals = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    const counters = Array.from(
      document.querySelectorAll<HTMLElement>("[data-count]")
    );

    if (reduce || !("IntersectionObserver" in window)) {
      reveals.forEach((el) => el.classList.add("in"));
      return () => window.removeEventListener("scroll", onScroll);
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          if (el.classList.contains("reveal")) el.classList.add("in");
          if (el.dataset.count) countUp(el);
          io.unobserve(el);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    reveals.forEach((el) => io.observe(el));
    counters.forEach((el) => io.observe(el));

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return null;
}
