"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cierra el menú al hacer scroll
  useEffect(() => {
    if (scrolled) setMenuOpen(false);
  }, [scrolled]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm"
          : "bg-transparent"
      } ${scrolled ? "py-3" : "py-5"}`}
    >
      <nav className="max-w-5xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-mono text-lg font-bold text-gray-950 hover:text-gray-700 transition-colors"
          onClick={() => setMenuOpen(false)}
        >
          Gonzalo <span className="text-[#F5B30A]">Barroso</span>
        </Link>

        {/* Links — desktop */}
        <div className="hidden sm:flex items-center gap-6">
          <a
            href="/#projects"
            className="text-sm font-semibold text-gray-800 hover:text-gray-950 transition-colors"
          >
            Proyectos
          </a>
          <a
            href="/#about"
            className="text-sm font-semibold text-gray-800 hover:text-gray-950 transition-colors"
          >
            Sobre mí
          </a>
          <a
            href="/cv-gonzalo-barroso.pdf"
            download
            className="text-sm font-mono px-4 py-2 bg-gray-950 text-white hover:bg-[#F5B30A] hover:text-gray-950 transition-all duration-200 rounded-sm font-bold"
          >
            CV ↓
          </a>
        </div>

        {/* Botón hamburguesa — mobile */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="sm:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 group"
          aria-label="Abrir menú"
        >
          <span
            className={`block h-0.5 w-6 bg-gray-950 transition-all duration-300 origin-center ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-gray-950 transition-all duration-300 ${
              menuOpen ? "opacity-0 scale-x-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-gray-950 transition-all duration-300 origin-center ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </nav>

      {/* Menú desplegable — mobile */}
      <div
        className={`sm:hidden grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
          menuOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="flex flex-col px-6 pb-5 pt-4 gap-4 border-t border-gray-100 mt-2">
            <a
              href="/#projects"
              onClick={() => setMenuOpen(false)}
              className="text-sm font-semibold text-gray-800 hover:text-gray-950 transition-colors"
            >
              Proyectos
            </a>
            <a
              href="/#about"
              onClick={() => setMenuOpen(false)}
              className="text-sm font-semibold text-gray-800 hover:text-gray-950 transition-colors"
            >
              Sobre mí
            </a>
            <a
              href="/cv-gonzalo-barroso.pdf"
              download
              onClick={() => setMenuOpen(false)}
              className="text-sm font-mono px-4 py-2 bg-gray-950 text-white hover:bg-[#F5B30A] hover:text-gray-950 transition-all duration-200 rounded-sm font-bold text-center"
            >
              CV ↓
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}