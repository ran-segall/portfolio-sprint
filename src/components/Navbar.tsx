"use client";

import { useState } from "react";

const navLinks = ["About", "Services", "Projects", "News", "Contact"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between py-6 w-full relative z-10">
      {/* Logo */}
      <span className="font-semibold text-base tracking-[-0.04em] capitalize text-black">
        H.Studio
      </span>

      {/* Desktop links */}
      <ul className="hidden md:flex items-center gap-14 font-semibold text-base tracking-[-0.04em] capitalize text-black">
        {navLinks.map((link) => (
          <li key={link}>
            <a href={`#${link.toLowerCase()}`} className="hover:opacity-60 transition-opacity">
              {link}
            </a>
          </li>
        ))}
      </ul>

      {/* Desktop CTA */}
      <a
        href="#contact"
        className="hidden md:flex items-center justify-center bg-black text-white text-sm font-medium tracking-[-0.04em] px-4 py-3 rounded-full hover:bg-neutral-800 transition-colors"
      >
        Let&apos;s talk
      </a>

      {/* Mobile hamburger */}
      <button
        className="md:hidden flex flex-col gap-[5px] p-1"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`block h-[2px] w-6 bg-black transition-all ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
        <span className={`block h-[2px] w-6 bg-black transition-all ${menuOpen ? "opacity-0" : ""}`} />
        <span className={`block h-[2px] w-6 bg-black transition-all ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-sm flex flex-col gap-6 px-4 py-8 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="font-semibold text-xl tracking-[-0.04em] capitalize text-black"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            className="self-start bg-black text-white text-sm font-medium tracking-[-0.04em] px-4 py-3 rounded-full mt-2"
            onClick={() => setMenuOpen(false)}
          >
            Let&apos;s talk
          </a>
        </div>
      )}
    </nav>
  );
}
