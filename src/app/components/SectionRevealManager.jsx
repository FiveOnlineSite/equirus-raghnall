"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function SectionRevealManager() {
  const pathname = usePathname();

  useEffect(() => {
    if (["/privacy-policy", "/grievance-redressal-policy"].includes(pathname)) return;

    const main = document.querySelector("main");
    if (!main) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const registeredSections = new Set();

    const observer = reducedMotion
      ? null
      : new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (!entry.isIntersecting) return;
              entry.target.dataset.reveal = "visible";
              observer.unobserve(entry.target);
            });
          },
          { rootMargin: "0px 0px -12%", threshold: 0.01 },
        );

    function registerSections() {
      const revealTargets = [
        ...main.querySelectorAll("section:not(footer section)"),
        ...document.querySelectorAll("footer"),
      ];

      revealTargets.forEach((section) => {
        if (
          (section.tagName === "SECTION" && section.parentElement?.closest("section")) ||
          registeredSections.has(section) ||
          section.hasAttribute("data-no-reveal")
        ) return;

        registeredSections.add(section);

        if (reducedMotion) {
          section.dataset.reveal = "visible";
          return;
        }

        const bounds = section.getBoundingClientRect();
        const isAlreadyVisible = bounds.top < window.innerHeight && bounds.bottom > 0;
        section.dataset.reveal = isAlreadyVisible ? "visible" : "pending";

        if (!isAlreadyVisible) observer.observe(section);
      });
    }

    registerSections();

    const mutationObserver = new MutationObserver(registerSections);
    mutationObserver.observe(main, { childList: true, subtree: true });

    return () => {
      observer?.disconnect();
      mutationObserver.disconnect();
      registeredSections.forEach((section) => section.removeAttribute("data-reveal"));
    };
  }, [pathname]);

  return null;
}
