"use client";

import { ArrowUpRight } from "lucide-react";
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { motion, useReducedMotion } from "motion/react";

const navigationLinks = [
  { label: "Início", href: "#" },
  { label: "Projetos", href: "#projetos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Contato", href: "#contato" },
];

const servicesLinks = [
  "Sites Institucionais",
  "Lojas Virtuais",
  "Sistemas Personalizados",
  "Landing Pages",
  "Manutenção & Performance",
];

const socialLinks = [
  {
    label: "WhatsApp",
    href: "https://wa.me/5511925995735",
    icon: FaWhatsapp,
  },
  {
    label: "Instagram",
    href: "#",
    icon: FaInstagram,
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: FaLinkedinIn,
  },
];

const footerViewport = {
  once: false,
  amount: 0.18,
};

const smoothEase = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 26,
    filter: "blur(10px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.82,
      ease: smoothEase,
    },
  },
};

export function Footer() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <footer className="footer-section" data-header-theme="dark">
      <div className="footer-grid-lines" />

      <div className="footer-shell">
        <motion.div
          className="footer-main"
          initial="hidden"
          whileInView="show"
          viewport={footerViewport}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.09,
                delayChildren: 0.08,
              },
            },
          }}
        >
          <motion.div className="footer-brand" variants={fadeUp}>
            <h3>
              Gabriel Arkhé
              <span>✦</span>
            </h3>

            <motion.div
              className="footer-brand-line"
              initial={{ scaleX: 0, transformOrigin: "left center" }}
              whileInView={{ scaleX: 1 }}
              viewport={footerViewport}
              transition={{
                duration: 0.78,
                delay: 0.18,
                ease: smoothEase,
              }}
            />

            <p>
              Design, tecnologia e performance para negócios digitais que querem
              liderar.
            </p>
          </motion.div>

          <motion.div className="footer-column" variants={fadeUp}>
            <h4>Navegação</h4>

            <nav>
              {navigationLinks.map((link, index) => (
                <motion.a
                  href={link.href}
                  key={link.label}
                  initial={{
                    opacity: 0,
                    x: prefersReducedMotion ? 0 : -12,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={footerViewport}
                  transition={{
                    duration: 0.56,
                    delay: 0.24 + index * 0.045,
                    ease: smoothEase,
                  }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>

          <motion.div className="footer-column" variants={fadeUp}>
            <h4>Serviços</h4>

            <nav>
              {servicesLinks.map((link, index) => (
                <motion.a
                  href="#servicos"
                  key={link}
                  initial={{
                    opacity: 0,
                    x: prefersReducedMotion ? 0 : -12,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={footerViewport}
                  transition={{
                    duration: 0.56,
                    delay: 0.28 + index * 0.045,
                    ease: smoothEase,
                  }}
                >
                  {link}
                </motion.a>
              ))}
            </nav>
          </motion.div>

          <motion.div className="footer-column footer-socials" variants={fadeUp}>
            <h4>Vamos conversar</h4>

            <nav>
              {socialLinks.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.a
                    href={item.href}
                    key={item.label}
                    target="_blank"
                    rel="noreferrer"
                    initial={{
                      opacity: 0,
                      x: prefersReducedMotion ? 0 : -12,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={footerViewport}
                    transition={{
                      duration: 0.56,
                      delay: 0.32 + index * 0.045,
                      ease: smoothEase,
                    }}
                  >
                    <Icon size={23} />
                    <span>{item.label}</span>
                    <ArrowUpRight size={16} strokeWidth={1.5} />
                  </motion.a>
                );
              })}
            </nav>
          </motion.div>

          <motion.div
            className="footer-statement"
            initial={{
              opacity: 0,
              y: prefersReducedMotion ? 0 : 28,
              scale: prefersReducedMotion ? 1 : 0.97,
              filter: "blur(12px)",
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
              filter: "blur(0px)",
            }}
            viewport={footerViewport}
            transition={{
              duration: 0.82,
              delay: 0.34,
              ease: smoothEase,
            }}
          >
            <span className="footer-statement-star">✦</span>

            <p>
              Ideias bem executadas <br />
              geram resultados <strong>reais.</strong>
            </p>
          </motion.div>
        </motion.div>

        <div className="footer-copyright">
          <p>
            © 2026 Gabriel Arkhé. Design, tecnologia e performance para negócios
            digitais.
          </p>

          <p>Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}