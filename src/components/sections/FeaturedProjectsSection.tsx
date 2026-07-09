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

const projects = [
  {
    title: "SaaS Marcenaria",
    category: "SAAS",
    image: "/images/projetos-em-destaque/projeto1.png",
    size: "large",
  },
  {
    title: "SaaS de Investimentos",
    category: "SAAS",
    image: "/images/projetos-em-destaque/projeto2.png",
    size: "large",
  },
  {
    title: "Landing Page Premium",
    category: "LANDING PAGE",
    image: "/images/projetos-em-destaque/projeto3.png",
    size: "normal",
  },
  {
    title: "Loja Virtual",
    category: "LOJA",
    image: "/images/projetos-em-destaque/projeto4.png",
    size: "normal",
  },
  {
    title: "Dashboard Analytics",
    category: "DASHBOARD",
    image: "/images/projetos-em-destaque/projeto5.png",
    size: "normal",
  },
  {
    title: "Checkout & Pagamento",
    category: "SISTEMA",
    image: "/images/projetos-em-destaque/projeto6.png",
    size: "normal",
  },
];

const featuredViewport = {
  once: false,
  amount: 0.22,
};

const smoothEase = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 28,
    filter: "blur(12px)",
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

const lineReveal = {
  hidden: {
    y: "112%",
    opacity: 0,
    filter: "blur(12px)",
  },
  show: {
    y: "0%",
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.95,
      ease: smoothEase,
    },
  },
};

export function FeaturedProjectsSection() {
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const sectionOpacity = useTransform(
    scrollYProgress,
    [0, 0.14, 0.76, 1],
    [0, 1, 1, 0],
  );

  const sectionY = useTransform(
    scrollYProgress,
    [0, 0.14, 0.76, 1],
    [
      prefersReducedMotion ? 0 : 44,
      0,
      0,
      prefersReducedMotion ? 0 : -62,
    ],
  );

  const backgroundY = useTransform(
    scrollYProgress,
    [0, 1],
    [prefersReducedMotion ? 0 : 22, prefersReducedMotion ? 0 : -32],
  );

  return (
    <section
      ref={sectionRef}
      className="featured-projects-section"
      id="projetos"
      data-header-theme="light"
    >
      <motion.div
        className="featured-projects-shell"
        style={{
          opacity: sectionOpacity,
          y: sectionY,
        }}
      >
        <motion.div
          className="featured-projects-grid"
          style={{ y: backgroundY }}
        >
          <motion.div
            className="featured-projects-intro"
            initial="hidden"
            whileInView="show"
            viewport={featuredViewport}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.08,
                  delayChildren: 0.08,
                },
              },
            }}
          >
            <motion.div
              className="featured-projects-eyebrow"
              variants={fadeUp}
            >
              <motion.span
                initial={{ scaleX: 0, transformOrigin: "left center" }}
                whileInView={{ scaleX: 1 }}
                viewport={featuredViewport}
                transition={{
                  duration: 0.72,
                  delay: 0.12,
                  ease: smoothEase,
                }}
              />

              <p>Projetos em Destaque</p>
            </motion.div>

            <h2>
              <span className="featured-projects-line-mask">
                <motion.span variants={lineReveal}>
                  Projetos criados para
                </motion.span>
              </span>

              <span className="featured-projects-line-mask">
                <motion.span variants={lineReveal}>
                  marcas que precisam
                </motion.span>
              </span>

              <span className="featured-projects-line-mask">
                <motion.span variants={lineReveal}>se destacar.</motion.span>
              </span>
            </h2>

            <motion.p variants={fadeUp}>
              Uma seleção de sites, lojas, sistemas e experiências digitais
              desenvolvidas com foco em estética premium, performance e
              conversão.
            </motion.p>
          </motion.div>

          {projects.map((project, index) => (
            <motion.article
              className={`featured-project-card ${
                project.size === "large" ? "featured-project-card-large" : ""
              }`}
              key={project.title}
              initial={{
                opacity: 0,
                filter: "blur(14px)",
              }}
              whileInView={{
                opacity: 1,
                filter: "blur(0px)",
              }}
              viewport={featuredViewport}
              transition={{
                duration: 0.78,
                delay: 0.14 + index * 0.075,
                ease: smoothEase,
              }}
            >
              <motion.a
                href="#"
                aria-label={`Ver projeto ${project.title}`}
                initial={{
                  y: prefersReducedMotion ? 0 : 34,
                  scale: prefersReducedMotion ? 1 : 0.975,
                }}
                whileInView={{
                  y: 0,
                  scale: 1,
                }}
                viewport={featuredViewport}
                transition={{
                  duration: 0.88,
                  delay: 0.14 + index * 0.075,
                  ease: smoothEase,
                }}
              >
                <div
                  className="featured-project-image"
                  style={{ position: "relative" }}
                >
                  <motion.span
                    className="featured-project-category"
                    initial={{
                      opacity: 0,
                      y: prefersReducedMotion ? 0 : -10,
                      filter: "blur(8px)",
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                    }}
                    viewport={featuredViewport}
                    transition={{
                      duration: 0.58,
                      delay: 0.32 + index * 0.075,
                      ease: smoothEase,
                    }}
                  >
                    {project.category}
                  </motion.span>

                  <motion.div
                    className="featured-project-image-motion"
                    initial={{
                      scale: prefersReducedMotion ? 1 : 1.08,
                    }}
                    whileInView={{
                      scale: 1,
                    }}
                    viewport={featuredViewport}
                    transition={{
                      duration: 1.05,
                      delay: 0.12 + index * 0.075,
                      ease: smoothEase,
                    }}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes={
                        project.size === "large"
                          ? "(max-width: 768px) 100vw, 38vw"
                          : "(max-width: 768px) 100vw, 25vw"
                      }
                      className="featured-project-img"
                      priority={project.title === "SaaS Marcenaria"}
                    />
                  </motion.div>
                </div>

                <motion.div
                  className="featured-project-footer"
                  initial={{
                    opacity: 0,
                    y: prefersReducedMotion ? 0 : 18,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={featuredViewport}
                  transition={{
                    duration: 0.7,
                    delay: 0.28 + index * 0.075,
                    ease: smoothEase,
                  }}
                >
                  <h3>{project.title}</h3>

                  <div className="featured-project-link">
                    <span>Ver projeto</span>
                    <ArrowUpRight size={17} strokeWidth={1.8} />
                  </div>
                </motion.div>
              </motion.a>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}