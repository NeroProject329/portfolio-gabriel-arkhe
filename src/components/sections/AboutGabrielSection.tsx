"use client";

import Image from "next/image";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";

const aboutCards = [
  {
    title: "Design premium",
    text: "Interfaces elegantes que comunicam valor e constroem autoridade.",
    icon: "/images/sobre-gabriel-arkhe/quadrados.png",
  },
  {
    title: "Performance",
    text: "Sites rápidos, leves e otimizados para uma experiência impecável.",
    icon: "/images/sobre-gabriel-arkhe/velocimetro.png",
  },
  {
    title: "Conversão",
    text: "Estrutura estratégica para transformar visitantes em clientes.",
    icon: "/images/sobre-gabriel-arkhe/mira.png",
  },
  {
    title: "Sistemas sob medida",
    text: "Soluções robustas, escaláveis e alinhadas aos objetivos do seu negócio.",
    icon: "/images/sobre-gabriel-arkhe/chave.png",
  },
];

const aboutViewport = {
  once: false,
  amount: 0.24,
};

const smoothEase = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
    filter: "blur(12px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.85,
      ease: smoothEase,
    },
  },
};

const lineReveal = {
  hidden: {
    y: "112%",
    opacity: 0,
    filter: "blur(14px)",
  },
  show: {
    y: "0%",
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1,
      ease: smoothEase,
    },
  },
};

export function AboutGabrielSection() {
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const sectionOpacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.76, 1],
    [0, 1, 1, 0],
  );

  const sectionY = useTransform(
    scrollYProgress,
    [0, 0.15, 0.76, 1],
    [
      prefersReducedMotion ? 0 : 44,
      0,
      0,
      prefersReducedMotion ? 0 : -62,
    ],
  );

  const bgLinesOpacity = useTransform(
    scrollYProgress,
    [0, 0.18, 0.78, 1],
    [0, 0.16, 0.16, 0],
  );

  const photoY = useTransform(
    scrollYProgress,
    [0, 1],
    [prefersReducedMotion ? 0 : 26, prefersReducedMotion ? 0 : -34],
  );

  return (
    <section
      ref={sectionRef}
      className="about-gabriel-section"
      id="sobre"
      data-header-theme="light"
    >
      <motion.div
        className="about-gabriel-bg-lines"
        style={{ opacity: bgLinesOpacity }}
      />

      <motion.div
        className="about-gabriel-shell"
        style={{
          opacity: sectionOpacity,
          y: sectionY,
        }}
      >
        <motion.div
          className="about-gabriel-copy"
          initial="hidden"
          whileInView="show"
          viewport={aboutViewport}
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
          <motion.div className="about-gabriel-eyebrow" variants={fadeUp}>
            <motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={aboutViewport}
              transition={{
                duration: 0.55,
                delay: 0.08,
                ease: smoothEase,
              }}
            />

            <p>Sobre Gabriel Arkhé</p>
          </motion.div>

          <h2>
            <span className="about-gabriel-line-mask">
              <motion.span
                className="about-gabriel-title-main"
                variants={lineReveal}
              >
                Por trás de cada
              </motion.span>
            </span>

            <span className="about-gabriel-line-mask">
              <motion.span
                className="about-gabriel-title-main"
                variants={lineReveal}
              >
                projeto, existe
              </motion.span>
            </span>

            <span className="about-gabriel-line-mask">
              <motion.span
                className="about-gabriel-title-muted"
                variants={lineReveal}
              >
                estratégia, estética
              </motion.span>
            </span>

            <span className="about-gabriel-line-mask">
              <motion.span
                className="about-gabriel-title-muted"
                variants={lineReveal}
              >
                e intenção.
              </motion.span>
            </span>
          </h2>

          <motion.div
            className="about-gabriel-title-line"
            initial={{ scaleX: 0, transformOrigin: "left center" }}
            whileInView={{ scaleX: 1 }}
            viewport={aboutViewport}
            transition={{
              duration: 0.85,
              delay: 0.22,
              ease: smoothEase,
            }}
          />

          <motion.div
            className="about-gabriel-text"
            initial="hidden"
            whileInView="show"
            viewport={aboutViewport}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.28,
                },
              },
            }}
          >
            <motion.p variants={fadeUp}>
              Sou Gabriel Arkhé, desenvolvedor de software focado em criar
              experiências digitais para negócios que querem se apresentar
              melhor, vender mais e crescer com presença online de alto padrão.
            </motion.p>

            <motion.p variants={fadeUp}>
              Meu trabalho une design, tecnologia e visão comercial para
              transformar sites, lojas e sistemas em ativos digitais reais —
              não apenas páginas bonitas.
            </motion.p>
          </motion.div>

          <motion.a
            href="#contato"
            className="about-gabriel-cta"
            initial={{
              opacity: 0,
              y: prefersReducedMotion ? 0 : 24,
              filter: "blur(10px)",
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            viewport={aboutViewport}
            transition={{
              duration: 0.78,
              delay: 0.46,
              ease: smoothEase,
            }}
          >
            <span>Falar comigo</span>

            <div className="about-gabriel-cta-icon">
              <ArrowUpRight size={20} strokeWidth={1.5} />
            </div>
          </motion.a>
        </motion.div>

        <div className="about-gabriel-visual">
          <motion.div
            className="about-gabriel-photo-card"
            style={{ y: photoY }}
            initial={{
              opacity: 0,
              y: prefersReducedMotion ? 0 : 44,
              scale: prefersReducedMotion ? 1 : 0.97,
              rotateX: prefersReducedMotion ? 0 : -7,
              filter: "blur(16px)",
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
              rotateX: 0,
              filter: "blur(0px)",
            }}
            viewport={aboutViewport}
            transition={{
              duration: 0.95,
              delay: 0.18,
              ease: smoothEase,
            }}
          >
            <motion.div
              className="about-gabriel-monogram"
              initial={{
                opacity: 0,
                scale: prefersReducedMotion ? 1 : 0.82,
                y: prefersReducedMotion ? 0 : -12,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              viewport={aboutViewport}
              transition={{
                duration: 0.72,
                delay: 0.48,
                ease: smoothEase,
              }}
            >
              <Image
                src="/images/sobre-gabriel-arkhe/logo-ga.png"
                alt="Gabriel Arkhé"
                width={86}
                height={86}
                className="about-gabriel-logo-ga"
              />
            </motion.div>

            <motion.div
              className="about-gabriel-photo-line"
              initial={{ scaleY: 0, transformOrigin: "top center" }}
              whileInView={{ scaleY: 1 }}
              viewport={aboutViewport}
              transition={{
                duration: 0.75,
                delay: 0.56,
                ease: smoothEase,
              }}
            />

            <motion.div
              className="about-gabriel-photo-wrap"
              initial={{
                scale: prefersReducedMotion ? 1 : 1.06,
              }}
              whileInView={{
                scale: 1,
              }}
              viewport={aboutViewport}
              transition={{
                duration: 1.05,
                delay: 0.22,
                ease: smoothEase,
              }}
            >
              <Image
                src="/images/sobre-gabriel-arkhe/rosto.png"
                alt="Gabriel Arkhé"
                fill
                className="about-gabriel-photo"
                priority={false}
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="about-gabriel-cards"
            initial="hidden"
            whileInView="show"
            viewport={aboutViewport}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.08,
                  delayChildren: 0.34,
                },
              },
            }}
          >
            {aboutCards.map((card, index) => (
              <motion.article
                className="about-gabriel-card"
                key={card.title}
                initial={{
                  opacity: 0,
                  y: prefersReducedMotion ? 0 : 34,
                  x: prefersReducedMotion ? 0 : index % 2 === 0 ? -18 : 18,
                  rotateX: prefersReducedMotion ? 0 : -6,
                  filter: "blur(14px)",
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  x: 0,
                  rotateX: 0,
                  filter: "blur(0px)",
                }}
                viewport={aboutViewport}
                transition={{
                  duration: 0.82,
                  delay: index * 0.075,
                  ease: smoothEase,
                }}
              >
                <motion.div
                  className="about-gabriel-card-icon"
                  initial={{
                    opacity: 0,
                    scale: prefersReducedMotion ? 1 : 0.82,
                    y: prefersReducedMotion ? 0 : 12,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                  }}
                  viewport={aboutViewport}
                  transition={{
                    duration: 0.64,
                    delay: 0.16 + index * 0.075,
                    ease: smoothEase,
                  }}
                >
                  <Image
                    src={card.icon}
                    alt=""
                    width={52}
                    height={52}
                    className="about-gabriel-card-img"
                  />
                </motion.div>

                <motion.div
                  className="about-gabriel-card-copy"
                  initial={{
                    opacity: 0,
                    y: prefersReducedMotion ? 0 : 14,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={aboutViewport}
                  transition={{
                    duration: 0.64,
                    delay: 0.22 + index * 0.075,
                    ease: smoothEase,
                  }}
                >
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </motion.div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}