"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 20, suffix: "+", label: "Years Of Experience" },
  { value: 10, suffix: "M+", label: "Satisfied Customers" },
  { value: 360, suffix: "°", label: "Risk Protection" },
  { value: 300, suffix: "+", label: "Insurance Professionals" },
];

function Counter({ value, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          setCount(value);
          return;
        }

        const duration = 1500;
        const start = performance.now();
        const animate = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.round(value * eased));
          if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
      },
      { threshold: 0.35 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [value]);

  return <strong ref={ref} className="text-3xl font-semibold tabular-nums md:text-[34px]">{count}{suffix}</strong>;
}

export default function CounterStats() {
  return (
    <div className="bg-[#30337A] text-white">
      <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-y-10 px-5 py-10 text-center md:px-10 lg:grid-cols-4 lg:py-11 xl:px-20">
        {stats.map((stat) => (
          <div key={stat.label}>
            <Counter value={stat.value} suffix={stat.suffix} />
            <p className="mt-4 text-sm font-medium md:text-base">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
