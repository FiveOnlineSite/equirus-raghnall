"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Private Clients", href: "/private-clients", children: true },
  { label: "Commercial", href: "/commercial", children: true },
  { label: "Reinsurance", href: "/reinsurance", children: true },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 h-[88px] bg-white shadow-[0_1px_12px_rgba(0,0,0,0.08)]">
      <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-4 md:px-8 xl:px-16">
        <Link href="/" aria-label="Equirus Raghnall home" className="shrink-0">
          <Image
            src="/assets/raghnall-logo.png"
            alt="Equirus Raghnall"
            width={130}
            height={104}
            priority
            className="h-[104px] w-[130px] object-cover"
          />
        </Link>
        <nav
          aria-label="Primary navigation"
          className="hidden items-center lg:flex"
        >
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`flex h-9 min-w-[135px] items-center justify-center gap-2 text-base leading-[30px] transition-colors hover:text-[#0a4e08] ${item.href === "/" ? "text-[#0a4e08]" : "text-[#3d3d3d]"}`}
            >
              {item.label}
              {item.children && (
                <Image
                  src="/assets/chevron-down.svg"
                  alt=""
                  width={20}
                  height={20}
                  aria-hidden
                />
              )}
            </Link>
          ))}
        </nav>
        <Link
          href="/claim-advocacy"
          className="hidden h-11 w-[158px] items-center justify-center rounded-lg bg-[#0a4e08] px-3 text-sm font-semibold text-white transition-colors hover:bg-[#083d06] lg:flex"
        >
          Claim Advocacy
        </Link>
        <button
          type="button"
          className="grid size-11 place-items-center rounded-lg text-[#0a4e08] lg:hidden"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="relative block h-5 w-6" aria-hidden>
            <span
              className={`absolute left-0 top-0 h-0.5 w-6 bg-current transition-transform ${isOpen ? "translate-y-[9px] rotate-45" : ""}`}
            />
            <span
              className={`absolute left-0 top-[9px] h-0.5 w-6 bg-current transition-opacity ${isOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`absolute left-0 top-[18px] h-0.5 w-6 bg-current transition-transform ${isOpen ? "-translate-y-[9px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>
      {isOpen && (
        <nav
          aria-label="Mobile navigation"
          className="absolute inset-x-0 top-full border-t border-black/5 bg-white px-5 py-5 shadow-lg lg:hidden"
        >
          <div className="mx-auto flex max-w-[1440px] flex-col">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex min-h-12 items-center justify-between border-b border-black/5 text-[#3d3d3d]"
              >
                {item.label}
                {item.children && (
                  <Image
                    src="/assets/chevron-down.svg"
                    alt=""
                    width={20}
                    height={20}
                    aria-hidden
                  />
                )}
              </Link>
            ))}
            <Link
              href="/claim-advocacy"
              onClick={() => setIsOpen(false)}
              className="mt-5 flex h-11 items-center justify-center rounded-lg bg-[#0a4e08] text-sm font-semibold text-white"
            >
              Claim Advocacy
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
