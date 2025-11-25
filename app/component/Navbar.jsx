"use client";

import { useState } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/90 backdrop-blur border-b border-purple-300">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="#home" className="text-lg font-semibold">
          Portfolio
        </a>

        {/* desktop */}
        <ul className="hidden items-center gap-8 text-sm text-slate-700 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hover:text-purple-600 transition"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* mobile */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden"
          aria-label="Toggle navigation"
        >
          <div className="space-y-1">
            <span className="block h-0.5 w-5 bg-slate-800" />
            <span className="block h-0.5 w-5 bg-slate-800" />
            <span className="block h-0.5 w-5 bg-slate-800" />
          </div>
        </button>
      </nav>

      {open && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <ul className="flex flex-col gap-2 px-6 py-3 text-sm text-slate-700">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-1"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
