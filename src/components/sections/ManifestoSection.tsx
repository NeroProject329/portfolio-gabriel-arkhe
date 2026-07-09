"use client";

import { type ReactNode, useRef } from "react";
import { Code2, Grid2X2, Target, TrendingUp } from "lucide-react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";

type ManifestoCard = {
  number: string;
  title: string;
  text: string;
  icon: ReactNode;
};

const cards: ManifestoCard[] = [
  {
    number: "01",
    title: "Estratégia",
    text: "Planejamento inteligente com foco em posicionamento e conversão.",
    icon: <Target size={22} strokeWidth={1.6} />,
  },
  {
    number: "02",
    title: "Experiência",
    text: "Design que comunica, conecta e transforma visitantes em clientes.",
    icon: <Grid2X2 size={22} strokeWidth={1.6} />,
  },
  {
    number: "03",
    title: "Código",
    text: "Desenvolvimento moderno, seguro e escalável com alta performance.",
    icon: <Code2 size={22} strokeWidth={1.6} />,
  },
  {
    number: "04",
    title: "Resultado",
    text: "Sites que geram impacto real, autoridade e crescimento contínuo.",
    icon: <TrendingUp size={22} strokeWidth={1.6} />,
  },
];

const titleLines = ["Um site não deve", "apenas existir."];

const subtitleLines = [
  "Ele precisa posicionar,",
  "vender e elevar a percepção",
  "da sua marca.",
];

const manifestoViewport = {
  once: false,
  amount: 0.32,
};

const smoothEase = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 34,
    filter: "blur(12px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
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

const tagReveal = {
  hidden: {
    opacity: 0,
    y: 16,
    filter: "blur(8px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.72,
      ease: smoothEase,
    },
  },
};

type Manifesto3DCardProps = {
  number: string;
  title: string;
  text: string;
  icon: ReactNode;
  index: number;
};

function Manifesto3DCard({
  number,
  title,
  text,
  icon,
  index,
}: Manifesto3DCardProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.article
      className="manifesto-card-3d"
      initial={{
        opacity: 0,
        y: prefersReducedMotion ? 0 : 46,
        rotateX: prefersReducedMotion ? 0 : -8,
        filter: "blur(14px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        rotateX: 0,
        filter: "blur(0px)",
      }}
      viewport={manifestoViewport}
      transition={{
        duration: 0.88,
        delay: 0.1 + index * 0.09,
        ease: smoothEase,
      }}
    >
      <div className="manifesto-card-inner">
        <div className="manifesto-card-content">
          <div className="manifesto-card-top">
            <div className="manifesto-card-icon">{icon}</div>

            <span>{number}</span>
          </div>

          <h4>{title}</h4>

          <div className="manifesto-card-line" />

          <p>{text}</p>
        </div>
      </div>
    </motion.article>
  );
}

export function ManifestoSection() {
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const sectionOpacity = useTransform(
    scrollYProgress,
    [0, 0.16, 0.72, 1],
    [0, 1, 1, 0],
  );

  const sectionY = useTransform(
    scrollYProgress,
    [0, 0.16, 0.72, 1],
    [
      prefersReducedMotion ? 0 : 42,
      0,
      0,
      prefersReducedMotion ? 0 : -58,
    ],
  );

  return (
    <section
      ref={sectionRef}
      className="manifesto-section"
      id="manifesto"
      data-header-theme="light"
    >
      <motion.div
        className="manifesto-shell"
        style={{
          opacity: sectionOpacity,
          y: sectionY,
        }}
      >
        <motion.div
          className="manifesto-background-lines"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.62 }}
          viewport={manifestoViewport}
          transition={{ duration: 1.05, ease: smoothEase }}
        />

        <div className="manifesto-top">
          <motion.div
            className="manifesto-label-area"
            initial="hidden"
            whileInView="show"
            viewport={manifestoViewport}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.12,
                  delayChildren: 0.08,
                },
              },
            }}
          >
            <motion.span className="manifesto-eyebrow" variants={fadeUp}>
              Manifesto / Impacto
            </motion.span>

            <motion.span
              className="manifesto-small-line"
              initial={{ scaleX: 0, transformOrigin: "left center" }}
              whileInView={{ scaleX: 1 }}
              viewport={manifestoViewport}
              transition={{ duration: 0.75, delay: 0.22, ease: smoothEase }}
            />
          </motion.div>

          <motion.div
            className="manifesto-visual"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={manifestoViewport}
            transition={{ duration: 0.9, delay: 0.18, ease: smoothEase }}
          >
            <motion.span
              className="manifesto-tag tag-strategy"
              variants={tagReveal}
              initial="hidden"
              whileInView="show"
              viewport={manifestoViewport}
              transition={{ delay: 0.28 }}
            >
              Estratégia
            </motion.span>

            <motion.span
              className="manifesto-tag tag-tech"
              variants={tagReveal}
              initial="hidden"
              whileInView="show"
              viewport={manifestoViewport}
              transition={{ delay: 0.34 }}
            >
              Tecnologia
            </motion.span>

            <motion.span
              className="manifesto-tag tag-exp"
              variants={tagReveal}
              initial="hidden"
              whileInView="show"
              viewport={manifestoViewport}
              transition={{ delay: 0.4 }}
            >
              Experiência
            </motion.span>

            <motion.span
              className="manifesto-tag tag-perf"
              variants={tagReveal}
              initial="hidden"
              whileInView="show"
              viewport={manifestoViewport}
              transition={{ delay: 0.46 }}
            >
              Performance
            </motion.span>

            <motion.div
              className="manifesto-orbit orbit-one"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={manifestoViewport}
              transition={{ duration: 0.9, delay: 0.32, ease: smoothEase }}
            />

            <motion.div
              className="manifesto-orbit orbit-two"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={manifestoViewport}
              transition={{ duration: 0.9, delay: 0.42, ease: smoothEase }}
            />

            <motion.div
              className="manifesto-dashed-orbit"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={manifestoViewport}
              transition={{ duration: 0.9, delay: 0.5, ease: smoothEase }}
            />

            <motion.div
              className="manifesto-sphere"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={manifestoViewport}
              transition={{ duration: 0.9, delay: 0.48, ease: smoothEase }}
            >
              <div className="manifesto-sphere-shine" />
            </motion.div>

            <motion.span
              className="manifesto-dot dot-one"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={manifestoViewport}
              transition={{ duration: 0.75, delay: 0.56, ease: smoothEase }}
            />

            <motion.span
              className="manifesto-dot dot-two"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={manifestoViewport}
              transition={{ duration: 0.75, delay: 0.64, ease: smoothEase }}
            />
          </motion.div>

          <motion.div
            className="manifesto-copy"
            initial="hidden"
            whileInView="show"
            viewport={manifestoViewport}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.08,
                  delayChildren: 0.18,
                },
              },
            }}
          >
            <h2>
              {titleLines.map((line) => (
                <span className="manifesto-line-mask" key={line}>
                  <motion.span variants={lineReveal}>{line}</motion.span>
                </span>
              ))}
            </h2>

            <h3>
              {subtitleLines.map((line) => (
                <span className="manifesto-line-mask" key={line}>
                  <motion.span variants={lineReveal}>{line}</motion.span>
                </span>
              ))}
            </h3>

            <motion.p variants={fadeUp}>
              Cada projeto é pensado como uma experiência digital completa:
              visual forte, estrutura estratégica, tecnologia moderna e
              performance real para negócios que querem crescer.
            </motion.p>
          </motion.div>

          <motion.div
            className="manifesto-compass"
            aria-hidden="true"
            initial={{
              opacity: 0,
              scale: prefersReducedMotion ? 1 : 0.82,
              filter: "blur(10px)",
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
            }}
            viewport={manifestoViewport}
            transition={{ duration: 0.8, delay: 0.48, ease: smoothEase }}
          >
            ✦
          </motion.div>

          <motion.div
            className="manifesto-slider-mark"
            aria-hidden="true"
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={manifestoViewport}
            transition={{ duration: 0.75, delay: 0.56, ease: smoothEase }}
          >
            <span />
            <span />
            <span />
            <span className="active" />
          </motion.div>
        </div>

        <div className="manifesto-cards-3d-wrap">
          <div className="manifesto-cards-3d">
            {cards.map((card, index) => (
              <Manifesto3DCard
                key={card.title}
                number={card.number}
                title={card.title}
                text={card.text}
                icon={card.icon}
                index={index}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}