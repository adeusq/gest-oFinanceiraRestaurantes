"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const PAYMENT_LINK = "https://www.asaas.com/c/blzjkahdcpacqaa2";

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Conteúdo", href: "#conteudo" },
  { label: "Professores", href: "#professores" },
  { label: "Inscrição", href: "#inscricao" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050505]/95 backdrop-blur-md border-b border-[#F2B705]/20 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative h-10 w-40 sm:h-12 sm:w-48">
              <Image
                src="/logo-login.png"
                alt="Liberdata Consultoria Empresarial"
                fill
                sizes="(max-width: 640px) 160px, 192px"
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium text-gray-300 hover:text-[#F2B705] transition-colors duration-200 cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a
              href={PAYMENT_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#F2B705] hover:bg-[#ffd84d] text-[#050505] font-bold text-sm px-6 py-3 rounded-lg transition-all duration-200 hover:shadow-[0_0_20px_rgba(242,183,5,0.4)]"
            >
              Garantir minha vaga
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2 rounded-md hover:text-[#F2B705] transition-colors"
            aria-label="Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden bg-[#0a0a0a] border-t border-[#F2B705]/20"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-base font-medium text-gray-200 hover:text-[#F2B705] transition-colors py-2 border-b border-white/5 cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
              <a
                href={PAYMENT_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="mt-2 w-full text-center bg-[#F2B705] hover:bg-[#ffd84d] text-[#050505] font-bold py-3 px-6 rounded-lg transition-all duration-200"
              >
                Garantir minha vaga
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
