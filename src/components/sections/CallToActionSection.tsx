"use client";

import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";

const ctaViewport = {
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

export function CallToActionSection() {
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const sectionOpacity = useTransform(
    scrollYProgress,
    [0, 0.18, 0.78, 1],
    [0, 1, 1, 0],
  );

  const sectionY = useTransform(
    scrollYProgress,
    [0, 0.18, 0.78, 1],
    [
      prefersReducedMotion ? 0 : 42,
      0,
      0,
      prefersReducedMotion ? 0 : -56,
    ],
  );

  const gridOpacity = useTransform(
    scrollYProgress,
    [0, 0.18, 0.78, 1],
    [0, 0.1, 0.1, 0],
  );

  const backgroundY = useTransform(
    scrollYProgress,
    [0, 1],
    [prefersReducedMotion ? 0 : 28, prefersReducedMotion ? 0 : -26],
  );

  return (
    <section
      ref={sectionRef}
      className="cta-section"
      id="contato"
      data-header-theme="dark"
    >
      <motion.div
        className="cta-motion-bg"
        style={{
          y: backgroundY,
        }}
      />

      <motion.div
        className="cta-overlay"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={ctaViewport}
        transition={{ duration: 0.95, ease: smoothEase }}
      />

      <motion.div className="cta-grid-lines" style={{ opacity: gridOpacity }} />

      <motion.div
        className="cta-shell"
        style={{
          opacity: sectionOpacity,
          y: sectionY,
        }}
      >
        <motion.div
          className="cta-content"
          initial="hidden"
          whileInView="show"
          viewport={ctaViewport}
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
          <motion.div className="cta-eyebrow" variants={fadeUp}>
            <span>Vamos construir algo excepcional</span>

            <motion.div
              initial={{ scaleX: 0, transformOrigin: "left center" }}
              whileInView={{ scaleX: 1 }}
              viewport={ctaViewport}
              transition={{
                duration: 0.75,
                delay: 0.16,
                ease: smoothEase,
              }}
            />

            <strong>✦</strong>
          </motion.div>

          <h2>
            <span className="cta-line-mask">
              <motion.span variants={lineReveal}>Vamos tirar sua</motion.span>
            </span>

            <span className="cta-line-mask">
              <motion.span variants={lineReveal}>próxima presença</motion.span>
            </span>

            <span className="cta-line-mask">
              <motion.span variants={lineReveal}>
                digital do <span>papel.</span>
              </motion.span>
            </span>
          </h2>

          <motion.p className="cta-description" variants={fadeUp}>
            Sites, lojas virtuais e sistemas personalizados com design
            estratégico, tecnologia de ponta e foco total em resultado.
          </motion.p>

          <motion.div className="cta-note" variants={fadeUp}>
            <FaWhatsapp size={24} />
            <p>
              Vamos conversar no WhatsApp e criar algo{" "}
              <strong>à altura da sua marca.</strong>
            </p>
          </motion.div>

          <motion.div
            className="cta-actions"
            initial="hidden"
            whileInView="show"
            viewport={ctaViewport}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.08,
                  delayChildren: 0.42,
                },
              },
            }}
          >
            <motion.a
              href="https://wa.me/5511925995735"
              target="_blank"
              rel="noreferrer"
              className="cta-button cta-button-primary"
              variants={fadeUp}
            >
              <FaWhatsapp size={24} />
              <span>Falar no WhatsApp</span>
              <ArrowUpRight size={20} strokeWidth={1.6} />
            </motion.a>

            <motion.a
              href="#projetos"
              className="cta-button cta-button-secondary"
              variants={fadeUp}
            >
              <span>Ver projetos</span>
              <ArrowUpRight size={20} strokeWidth={1.6} />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="cta-side-info"
          initial={{
            opacity: 0,
            x: prefersReducedMotion ? 0 : 34,
            filter: "blur(14px)",
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            filter: "blur(0px)",
          }}
          viewport={ctaViewport}
          transition={{
            duration: 0.9,
            delay: 0.24,
            ease: smoothEase,
          }}
        >
          <motion.span
            className="cta-side-star"
            initial={{
              opacity: 0,
              scale: prefersReducedMotion ? 1 : 0.82,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={ctaViewport}
            transition={{
              duration: 0.7,
              delay: 0.42,
              ease: smoothEase,
            }}
          >
            ✦
          </motion.span>

          <motion.div
            className="cta-side-line cta-side-line-top"
            initial={{ scaleY: 0, transformOrigin: "top center" }}
            whileInView={{ scaleY: 1 }}
            viewport={ctaViewport}
            transition={{
              duration: 0.7,
              delay: 0.5,
              ease: smoothEase,
            }}
          />

          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={ctaViewport}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.08,
                  delayChildren: 0.56,
                },
              },
            }}
          >
            {["Estratégia", "Design", "Tecnologia", "Performance"].map(
              (item) => (
                <motion.li key={item} variants={fadeUp}>
                  {item}
                </motion.li>
              ),
            )}
          </motion.ul>

          <motion.div
            className="cta-side-line cta-side-line-bottom"
            initial={{ scaleY: 0, transformOrigin: "top center" }}
            whileInView={{ scaleY: 1 }}
            viewport={ctaViewport}
            transition={{
              duration: 0.7,
              delay: 0.74,
              ease: smoothEase,
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}