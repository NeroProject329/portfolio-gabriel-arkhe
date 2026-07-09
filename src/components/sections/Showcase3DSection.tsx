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

const showcaseCards = [
  {
    title: "Motion",
    text: "Animações fluidas e interações que guiam, envolvem e encantam.",
    icon: "/images/showcase_3D/planeta1.png",
  },
  {
    title: "Performance",
    text: "Código otimizado e carregamento inteligente para máxima velocidade.",
    icon: "/images/showcase_3D/planeta2.png",
  },
  {
    title: "Responsividade",
    text: "Experiência impecável em todos os dispositivos e tamanhos de tela.",
    icon: "/images/showcase_3D/computador.png",
  },
  {
    title: "Tecnologia",
    text: "Soluções modernas, seguras e escaláveis para projetos robustos.",
    icon: "/images/showcase_3D/tecnologia.png",
  },
];

const titleLines = [
  "Cada detalhe pensado",
  "para transformar",
  "navegação em experiência.",
];

const showcaseViewport = {
  once: false,
  amount: 0.28,
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

export function Showcase3DSection() {
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const sectionOpacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.78, 1],
    [0, 1, 1, 0],
  );

  const sectionY = useTransform(
    scrollYProgress,
    [0, 0.15, 0.78, 1],
    [
      prefersReducedMotion ? 0 : 46,
      0,
      0,
      prefersReducedMotion ? 0 : -64,
    ],
  );

  const backgroundScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [
      prefersReducedMotion ? 1 : 1.08,
      1,
      prefersReducedMotion ? 1 : 1.08,
    ],
  );

  const backgroundY = useTransform(
    scrollYProgress,
    [0, 1],
    [prefersReducedMotion ? 0 : 32, prefersReducedMotion ? 0 : -34],
  );

  const gridOpacity = useTransform(
    scrollYProgress,
    [0, 0.18, 0.78, 1],
    [0, 0.15, 0.15, 0],
  );

  return (
    <motion.section
      ref={sectionRef}
      className="showcase3d-section"
      id="showcase-3d"
      data-header-theme="dark"
      style={{
        opacity: sectionOpacity,
        y: sectionY,
      }}
    >
      <motion.div
        className="showcase3d-background"
        style={{
          scale: backgroundScale,
          y: backgroundY,
        }}
      >
        <video
          className="showcase3d-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src="/videos/showcase-3d.webm" type="video/webm" />
          <source src="/videos/showcase-3d.mp4" type="video/mp4" />
        </video>
      </motion.div>

      <motion.div
        className="showcase3d-overlay"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={showcaseViewport}
        transition={{ duration: 0.95, ease: smoothEase }}
      />

      <motion.div
        className="showcase3d-grid-lines"
        style={{ opacity: gridOpacity }}
      />

      <div className="showcase3d-container">
        <motion.div
          className="showcase3d-header"
          initial="hidden"
          whileInView="show"
          viewport={showcaseViewport}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.08,
              },
            },
          }}
        >
          <motion.div className="showcase3d-brand" variants={fadeUp}>
            <span />
            <p>Gabriel Arkhé</p>
          </motion.div>

          <motion.div className="showcase3d-indicator" variants={fadeUp}>
            <p>Portfólio</p>
            <span className="showcase3d-light-dot" />
            <p>02 / 06</p>

            <div className="showcase3d-dots">
              <span />
              <span />
              <span className="active" />
              <span />
            </div>
          </motion.div>
        </motion.div>

        <div className="showcase3d-content">
          <motion.div
            className="showcase3d-copy"
            initial="hidden"
            whileInView="show"
            viewport={showcaseViewport}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.08,
                  delayChildren: 0.12,
                },
              },
            }}
          >
            <motion.span className="showcase3d-eyebrow" variants={fadeUp}>
              Showcase 3D / Experiência Imersiva
            </motion.span>

            <h2>
              {titleLines.map((line) => (
                <span className="showcase3d-line-mask" key={line}>
                  <motion.span variants={lineReveal}>{line}</motion.span>
                </span>
              ))}
            </h2>

            <motion.p variants={fadeUp}>
              Interfaces que ganham vida através do motion design, performance
              de alto nível, responsividade em qualquer dispositivo e tecnologia
              de ponta aplicada com propósito.
            </motion.p>
          </motion.div>

          <motion.div
            className="showcase3d-cards-area"
            initial="hidden"
            whileInView="show"
            viewport={showcaseViewport}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.08,
                  delayChildren: 0.24,
                },
              },
            }}
          >
            <motion.div
              className="showcase3d-line"
              initial={{ scaleX: 0, transformOrigin: "left center" }}
              whileInView={{ scaleX: 1 }}
              viewport={showcaseViewport}
              transition={{
                duration: 0.85,
                delay: 0.22,
                ease: smoothEase,
              }}
            />

            <div className="showcase3d-cards">
              {showcaseCards.map((card, index) => (
                <motion.article
                  className="showcase3d-card"
                  key={card.title}
                  initial={{
                    opacity: 0,
                    y: prefersReducedMotion ? 0 : 38,
                    rotateX: prefersReducedMotion ? 0 : -7,
                    filter: "blur(14px)",
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    rotateX: 0,
                    filter: "blur(0px)",
                  }}
                  viewport={showcaseViewport}
                  transition={{
                    duration: 0.82,
                    delay: 0.06 + index * 0.08,
                    ease: smoothEase,
                  }}
                >
                  <motion.div
                    className="showcase3d-card-icon"
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
                    viewport={showcaseViewport}
                    transition={{
                      duration: 0.72,
                      delay: 0.22 + index * 0.08,
                      ease: smoothEase,
                    }}
                  >
                    <Image
                      src={card.icon}
                      alt=""
                      width={70}
                      height={70}
                      className="showcase3d-card-image"
                    />
                  </motion.div>

                  <motion.h3
                    initial={{
                      opacity: 0,
                      y: prefersReducedMotion ? 0 : 14,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={showcaseViewport}
                    transition={{
                      duration: 0.66,
                      delay: 0.28 + index * 0.08,
                      ease: smoothEase,
                    }}
                  >
                    {card.title}
                  </motion.h3>

                  <motion.p
                    initial={{
                      opacity: 0,
                      y: prefersReducedMotion ? 0 : 14,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={showcaseViewport}
                    transition={{
                      duration: 0.66,
                      delay: 0.34 + index * 0.08,
                      ease: smoothEase,
                    }}
                  >
                    {card.text}
                  </motion.p>

                  <motion.div
                    initial={{
                      opacity: 0,
                      x: prefersReducedMotion ? 0 : -8,
                      y: prefersReducedMotion ? 0 : 8,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                      y: 0,
                    }}
                    viewport={showcaseViewport}
                    transition={{
                      duration: 0.62,
                      delay: 0.4 + index * 0.08,
                      ease: smoothEase,
                    }}
                  >
                    <ArrowUpRight
                      className="showcase3d-card-arrow"
                      size={22}
                      strokeWidth={1.4}
                    />
                  </motion.div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="showcase3d-footer"
          initial="hidden"
          whileInView="show"
          viewport={showcaseViewport}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.34,
              },
            },
          }}
        >
          <motion.div className="showcase3d-footer-left" variants={fadeUp}>
            <span>✦</span>

            <p>
              Do conceito ao detalhe, tudo conectado.
              <br />
              <strong>
                Estratégia, design, tecnologia e performance trabalhando juntos.
              </strong>
            </p>
          </motion.div>

          <motion.p className="showcase3d-footer-right" variants={fadeUp}>
            Experiências digitais que deixam marca.
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
}