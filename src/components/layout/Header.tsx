"use client";

import Link from "next/link";
import { Menu, MessageCircle, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const WHATSAPP_URL =
  "https://wa.me/5500000000000?text=Ol%C3%A1%2C%20Gabriel.%20Quero%20criar%20um%20projeto%20digital%20premium.";

const navItems = [
  { label: "Portfólio", href: "#portfolio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Processo", href: "#processo" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex h-[92px] w-full max-w-[1760px] items-center justify-between px-5 sm:px-8 lg:px-[76px]">
        <Link
          href="#inicio"
          onClick={closeMenu}
          className="font-display text-[12px] font-medium leading-none tracking-[-0.06em] text-white sm:text-[25px] lg:text-[35px]"
        >
          Gabriel Arkhé
        </Link>

        <nav className="hidden items-center gap-[60px] lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[10.5px] font-light uppercase tracking-[0.09em] text-white/58 transition duration-300 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="hidden h-[48px] items-center gap-3 rounded-[7px] border border-white/20 bg-white/[0.025] px-5 text-[14px] font-medium text-white/92 backdrop-blur-xl transition duration-300 hover:bg-white/10 sm:flex"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>

          <button
            type="button"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            onClick={() => setIsOpen((value) => !value)}
            className={cn(
              "flex h-12 w-12 items-center justify-center rounded-[8px] border border-white/14 bg-white/[0.03] text-white backdrop-blur-xl transition duration-300 hover:bg-white/10 lg:hidden",
              isOpen && "bg-white text-black hover:bg-white"
            )}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="mx-5 overflow-hidden rounded-[22px] border border-white/12 bg-black/88 p-4 shadow-[0_30px_100px_rgba(0,0,0,0.65)] backdrop-blur-2xl sm:mx-8 lg:hidden"
          >
            <div className="flex flex-col">
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="flex items-center justify-between border-b border-white/8 px-2 py-4 text-[15px] font-medium text-white/78 transition hover:text-white last:border-b-0"
                >
                  {item.label}
                  <span className="text-xs text-white/36">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </Link>
              ))}

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-3 flex h-12 items-center justify-center gap-3 rounded-[12px] bg-white text-sm font-medium text-black"
              >
                <MessageCircle className="h-4 w-4" />
                Falar no WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}