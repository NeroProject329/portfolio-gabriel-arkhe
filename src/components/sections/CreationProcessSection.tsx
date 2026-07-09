"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";

const processSteps = [
  {
    number: "01",
    title: "Estratégia",
    text: "Entendimento do negócio, público e objetivo.",
    icon: "/images/processo-de-criacao/mira.png",
  },
  {
    number: "02",
    title: "Direção visual",
    text: "Construção da estética, experiência e posicionamento.",
    icon: "/images/processo-de-criacao/quadrados.png",
  },
  {
    number: "03",
    title: "Desenvolvimento",
    text: "Código moderno, responsivo e escalável.",
    icon: "/images/processo-de-criacao/chave.png",
  },
  {
    number: "04",
    title: "Motion & Interação",
    text: "Animações, microinterações e experiência premium.",
    icon: "/images/processo-de-criacao/planeta.png",
  },
  {
    number: "05",
    title: "Performance",
    text: "Otimização para velocidade, conversão e usabilidade.",
    icon: "/images/processo-de-criacao/velocimetro.png",
  },
  {
    number: "06",
    title: "Publicação",
    text: "Deploy, domínio, ajustes finais e entrega.",
    icon: "/images/processo-de-criacao/aviao-de-papel.png",
  },
];

const processViewport = {
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

export function CreationProcessSection() {
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
    [0, 0.2, 0.2, 0],
  );

  return (
    <section
      ref={sectionRef}
      className="creation-process-section"
      id="processo"
      data-header-theme="light"
    >
      <motion.div
        className="creation-process-bg-lines"
        style={{ opacity: bgLinesOpacity }}
      />

      <motion.div
        className="creation-process-shell"
        style={{
          opacity: sectionOpacity,
          y: sectionY,
        }}
      >
        <motion.div
          className="creation-process-left"
          initial="hidden"
          whileInView="show"
          viewport={processViewport}
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
          <motion.div className="creation-process-eyebrow" variants={fadeUp}>
            <motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={processViewport}
              transition={{
                duration: 0.55,
                delay: 0.08,
                ease: smoothEase,
              }}
            />

            <p>Processo</p>
          </motion.div>

          <h2>
            <span className="creation-process-line-mask">
              <motion.span
                className="creation-process-title-strong"
                variants={lineReveal}
              >
                Do conceito
              </motion.span>
            </span>

            <span className="creation-process-line-mask">
              <motion.span
                className="creation-process-title-strong"
                variants={lineReveal}
              >
                ao projeto
              </motion.span>
            </span>

            <span className="creation-process-line-mask">
              <motion.span
                className="creation-process-title-muted"
                variants={lineReveal}
              >
                publicado.
              </motion.span>
            </span>
          </h2>

          <motion.div
            className="creation-process-title-line"
            initial={{ scaleX: 0, transformOrigin: "left center" }}
            whileInView={{ scaleX: 1 }}
            viewport={processViewport}
            transition={{
              duration: 0.85,
              delay: 0.22,
              ease: smoothEase,
            }}
          />

          <motion.p className="creation-process-description" variants={fadeUp}>
            Um processo claro para transformar ideias em experiências digitais
            completas, com estratégia, design, desenvolvimento, performance e
            entrega final.
          </motion.p>

          <motion.div
            className="creation-process-signature"
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
            viewport={processViewport}
            transition={{
              duration: 0.78,
              delay: 0.42,
              ease: smoothEase,
            }}
          >
            <Image
              src="/images/processo-de-criacao/logo-GA.png"
              alt="Gabriel Arkhé"
              width={76}
              height={76}
              className="creation-process-logo"
            />

            <div>
              <strong>Gabriel Arkhé</strong>
              <span>Design & Development</span>
            </div>
          </motion.div>
        </motion.div>

        <div className="creation-process-right">
          <div className="creation-process-timeline" aria-hidden="true">
            {processSteps.map((step, index) => (
              <motion.span
                key={step.number}
                initial={{
                  opacity: 0,
                  scale: prefersReducedMotion ? 1 : 0.62,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={processViewport}
                transition={{
                  duration: 0.52,
                  delay: 0.2 + index * 0.08,
                  ease: smoothEase,
                }}
              />
            ))}
          </div>

          <motion.div
            className="creation-process-list"
            initial="hidden"
            whileInView="show"
            viewport={processViewport}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.08,
                  delayChildren: 0.16,
                },
              },
            }}
          >
            {processSteps.map((step, index) => (
              <motion.article
                className="creation-process-card"
                key={step.number}
                initial={{
                  opacity: 0,
                  y: prefersReducedMotion ? 0 : 34,
                  x: prefersReducedMotion ? 0 : 24,
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
                viewport={processViewport}
                transition={{
                  duration: 0.82,
                  delay: 0.08 + index * 0.075,
                  ease: smoothEase,
                }}
              >
                <motion.div
                  className="creation-process-number"
                  initial={{
                    opacity: 0,
                    y: prefersReducedMotion ? 0 : 16,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={processViewport}
                  transition={{
                    duration: 0.62,
                    delay: 0.22 + index * 0.075,
                    ease: smoothEase,
                  }}
                >
                  {step.number}
                </motion.div>

                <motion.div
                  className="creation-process-divider"
                  initial={{ scaleY: 0, transformOrigin: "center center" }}
                  whileInView={{ scaleY: 1 }}
                  viewport={processViewport}
                  transition={{
                    duration: 0.58,
                    delay: 0.28 + index * 0.075,
                    ease: smoothEase,
                  }}
                />

                <motion.div
                  className="creation-process-icon"
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
                  viewport={processViewport}
                  transition={{
                    duration: 0.66,
                    delay: 0.3 + index * 0.075,
                    ease: smoothEase,
                  }}
                >
                  <Image
                    src={step.icon}
                    alt=""
                    width={78}
                    height={78}
                    className="creation-process-icon-img"
                  />
                </motion.div>

                <motion.div
                  className="creation-process-card-copy"
                  initial={{
                    opacity: 0,
                    y: prefersReducedMotion ? 0 : 14,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={processViewport}
                  transition={{
                    duration: 0.64,
                    delay: 0.34 + index * 0.075,
                    ease: smoothEase,
                  }}
                >
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </motion.div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}