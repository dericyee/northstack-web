"use client";

import { useEffect } from "react";

/**
 * Progressive enhancement, mounted once: scroll-reveal for `.reveal`
 * elements and a subtle border on the nav once the page scrolls.
 * Everything degrades gracefully if JS is off — content is visible by default
 * via the reduced-motion fallback in globals.css.
 */
export default function Enhance() {
  useEffect(() => {
    const nav = document.querySelector(".nav");
    const onScroll = () => {
      if (!nav) return;
      nav.classList.toggle("scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const reveals = Array.from(document.querySelectorAll(".reveal"));
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduce || !("IntersectionObserver" in window)) {
      reveals.forEach((el) => el.classList.add("in"));
    } else {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in");
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
      );
      reveals.forEach((el) => io.observe(el));
      return () => {
        io.disconnect();
        window.removeEventListener("scroll", onScroll);
      };
    }

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
