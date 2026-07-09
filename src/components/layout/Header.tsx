"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_URL =
  "https://wa.me/5511925995735?text=Ol%C3%A1%2C%20Gabriel.%20Quero%20criar%20um%20projeto%20digital%20premium.";

const navItems = [
  { label: "Portfólio", href: "#projetos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Processo", href: "#processo" },
  { label: "Contato", href: "#contato" },
];

type HeaderTheme = "dark" | "light";

const HEADER_HEIGHT = 92;

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<HeaderTheme>("dark");

  const themeRef = useRef<HeaderTheme>("dark");
  const frameRef = useRef<number | null>(null);

  const isLightSection = theme === "light";

  const headerColor = isLightSection ? "#000000" : "#ffffff";

  const headerSoftColor = isLightSection
    ? "#000000"
    : "rgba(255, 255, 255, 0.68)";

  const buttonBorder = isLightSection
    ? "rgba(0, 0, 0, 0.28)"
    : "rgba(255, 255, 255, 0.22)";

  const buttonBackground = isLightSection
    ? "rgba(255, 255, 255, 0.42)"
    : "rgba(255, 255, 255, 0.045)";

  function closeMenu() {
    setIsOpen(false);
  }

  useEffect(() => {
    function getCurrentTheme(): HeaderTheme {
      const sections = Array.from(
        document.querySelectorAll<HTMLElement>("[data-header-theme]")
      );

      const readPoint = window.scrollY + HEADER_HEIGHT;

      let activeTheme: HeaderTheme = "dark";

      for (const section of sections) {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (readPoint >= sectionTop && readPoint < sectionBottom) {
          activeTheme =
            section.dataset.headerTheme === "light" ? "light" : "dark";
          break;
        }
      }

      return activeTheme;
    }

    function updateTheme() {
      const nextTheme = getCurrentTheme();

      if (themeRef.current !== nextTheme) {
        themeRef.current = nextTheme;
        setTheme(nextTheme);
      }
    }

    function onScrollOrResize() {
      if (frameRef.current) return;

      frameRef.current = requestAnimationFrame(() => {
        frameRef.current = null;
        updateTheme();
      });
    }

    updateTheme();

    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }

      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, []);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 pointer-events-none"
      data-current-theme={theme}
    >
      <div className="mx-auto flex h-[92px] w-full max-w-[1760px] items-center justify-between px-5 sm:px-8 lg:px-[76px] pointer-events-auto">
        <Link
          href="#inicio"
          onClick={closeMenu}
          className="font-display text-[12px] font-medium leading-none tracking-[-0.06em] transition-colors duration-300 sm:text-[25px] lg:text-[35px]"
          style={{ color: headerColor }}
        >
          Gabriel Arkhé
        </Link>

        <nav className="hidden items-center gap-[60px] lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[12.5px] font-medium uppercase tracking-[0.09em] transition-colors duration-300"
              style={{ color: headerSoftColor }}
              onMouseEnter={(event) => {
                event.currentTarget.style.color = headerColor;
              }}
              onMouseLeave={(event) => {
                event.currentTarget.style.color = headerSoftColor;
              }}
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
            className="hidden h-[48px] items-center gap-3 rounded-[7px] border px-5 text-[14px] font-semibold backdrop-blur-xl transition-colors duration-300 sm:flex"
            style={{
              color: headerColor,
              borderColor: buttonBorder,
              background: buttonBackground,
            }}
          >
            <FaWhatsapp className="h-4 w-4" />
            WhatsApp
          </a>

         <button
  type="button"
  aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
  onClick={() => setIsOpen((value) => !value)}
  className="flex h-12 w-12 items-center justify-center rounded-[8px] border backdrop-blur-xl transition-colors duration-300 lg:hidden"
  style={{
    color: headerColor,
    borderColor: buttonBorder,
    background: isOpen
      ? isLightSection
        ? "rgba(255, 255, 255, 0.52)"
        : "rgba(255, 255, 255, 0.07)"
      : buttonBackground,
  }}
>
  {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-6 w-6" />}
</button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
<motion.div
  className="pointer-events-auto fixed left-4 right-4 top-[104px] z-[60] h-auto overflow-visible rounded-[22px] border border-white/12 bg-black/90 p-4 shadow-[0_30px_100px_rgba(0,0,0,0.65)] backdrop-blur-2xl sm:left-8 sm:right-8 lg:hidden"
  initial={{ opacity: 0, y: -14, scale: 0.98 }}
  animate={{ opacity: 1, y: 0, scale: 1 }}
  exit={{ opacity: 0, y: -14, scale: 0.98 }}
  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
>
  <nav className="flex flex-col">
    {navItems.map((item, index) => (
      <Link
        key={item.href}
        href={item.href}
        onClick={closeMenu}
        className="flex min-h-[58px] items-center justify-between border-b border-white/8 px-3 text-[15px] font-semibold text-white/86 transition hover:text-white last:border-b-0"
      >
        <span>{item.label}</span>

        <span className="text-xs font-semibold text-white/36">
          {String(index + 1).padStart(2, "0")}
        </span>
      </Link>
    ))}

  <a
  href={WHATSAPP_URL}
  target="_blank"
  rel="noreferrer"
  className="mobile-menu-whatsapp mt-4 flex h-12 items-center justify-center gap-3 rounded-[12px] border border-white bg-white text-sm font-semibold text-black shadow-[0_18px_40px_rgba(0,0,0,0.28)]"
>
  <FaWhatsapp className="h-4 w-4" />
  <span>Falar no WhatsApp</span>
</a>
  </nav>
</motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}