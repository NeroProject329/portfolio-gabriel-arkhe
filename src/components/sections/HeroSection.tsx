"use client";

import Image from "next/image";
import { type ComponentProps, type PointerEvent, useRef } from "react";
import { ArrowRight, LockKeyhole, TrendingUp, Zap } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const WHATSAPP_URL =
  "https://wa.me/5511925995735?text=Ol%C3%A1%2C%20Gabriel.%20Quero%20criar%20um%20projeto%20digital%20premium.";

const heroTitleLines = [
  "Sites, lojas e sistemas",
  "criados para vender mais",
  "com design, tecnologia",
  "e performance.",
];

const features = [
  {
    label: "Performance",
    icon: Zap,
  },
  {
    label: "Segurança",
    icon: LockKeyhole,
  },
  {
    label: "Escalabilidade",
    icon: TrendingUp,
  },
];

const trustItems = ["Nexora", "Lumina", "Verdade", "Pixora", "Núcleo"];

const smoothEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

const revealContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.075,
      delayChildren: 0.12,
    },
  },
};

const lineReveal = {
  hidden: {
    y: "112%",
    opacity: 0,
    rotateX: -18,
    filter: "blur(16px)",
  },
  show: {
    y: "0%",
    opacity: 1,
    rotateX: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.05,
      ease: smoothEase,
    },
  },
};

type FloatingMockupProps = {
  src: string;
  alt: string;
  className?: string;
  perspectiveClassName?: string;
  delay?: number;
  priority?: boolean;
  float?: "slow" | "medium" | "fast";
  style?: ComponentProps<typeof motion.div>["style"];
  hasReflection?: boolean;
  entrance?: {
    x?: number;
    y?: number;
    rotate?: number;
    scale?: number;
  };
};

function FloatingMockup({
  src,
  alt,
  className,
  perspectiveClassName,
  delay = 0,
  priority = false,
  float = "medium",
  style,
  hasReflection = true,
  entrance,
}: FloatingMockupProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: entrance?.x ?? 0,
        y: entrance?.y ?? 74,
        rotate: entrance?.rotate ?? 0,
        scale: entrance?.scale ?? 0.88,
        filter: "blur(18px)",
      }}
      animate={{
        opacity: 1,
        x: 0,
        y: 0,
        rotate: 0,
        scale: 1,
        filter: "blur(0px)",
      }}
      transition={{
        duration: 1.18,
        delay,
        ease: smoothEase,
      }}
      className={cn(
        "pointer-events-none absolute z-20 will-change-transform",
        float === "slow" && "float-slow",
        float === "medium" && "float-medium",
        float === "fast" && "float-fast",
        className,
      )}
    >
      <motion.div style={style} className="h-full w-full will-change-transform">
        <div
          className={cn(
            "mockup-card relative h-full w-full drop-shadow-[0_34px_90px_rgba(0,0,0,0.72)] [transform-style:preserve-3d]",
            perspectiveClassName,
          )}
        >
          {hasReflection && (
  <span className="hero-mockup-reflection" aria-hidden="true" />
)}

<Image
  src={src}
  alt={alt}
  fill
  priority={priority}
  sizes="(max-width: 768px) 70vw, (max-width: 1200px) 42vw, 560px"
  className="relative z-10 object-contain"
/>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function HeroSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothMouseX = useSpring(mouseX, {
    stiffness: 75,
    damping: 28,
    mass: 0.45,
  });

  const smoothMouseY = useSpring(mouseY, {
    stiffness: 75,
    damping: 28,
    mass: 0.45,
  });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 0.82], [0, -92]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);

  const backgroundWordY = useTransform(scrollYProgress, [0, 1], [0, -130]);
  const backgroundWordScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const backgroundWordOpacity = useTransform(
    scrollYProgress,
    [0, 0.52],
    [0.13, 0],
  );

  const gridOpacity = useTransform(scrollYProgress, [0, 0.7], [0.16, 0.035]);
  const smokeOpacity = useTransform(scrollYProgress, [0, 0.6], [0.72, 0.2]);
  const scrollCueOpacity = useTransform(scrollYProgress, [0, 0.16], [1, 0]);

  const stageY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, prefersReducedMotion ? 0 : -152],
  );

  const stageScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, prefersReducedMotion ? 1 : 0.91],
  );

  const stageOpacity = useTransform(scrollYProgress, [0, 0.82], [1, 0.18]);

  const stageRotateY = useTransform(smoothMouseX, (value) =>
    prefersReducedMotion ? 0 : value * 5.5,
  );

  const stageRotateX = useTransform(smoothMouseY, (value) =>
    prefersReducedMotion ? 0 : value * -4.2,
  );

  const metalY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, prefersReducedMotion ? 0 : -118],
  );

  const metalScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, prefersReducedMotion ? 1 : 0.9],
  );

  const metalRotate = useTransform(
    scrollYProgress,
    [0, 1],
    [0, prefersReducedMotion ? 0 : 10],
  );

  const cardSiteX = useTransform(smoothMouseX, (value) =>
    prefersReducedMotion ? 0 : value * -22,
  );

  const cardSiteY = useTransform(smoothMouseY, (value) =>
    prefersReducedMotion ? 0 : value * -14,
  );

  const cardContentsX = useTransform(smoothMouseX, (value) =>
    prefersReducedMotion ? 0 : value * -36,
  );

  const cardContentsY = useTransform(smoothMouseY, (value) =>
    prefersReducedMotion ? 0 : value * 18,
  );

  const cardCollectionX = useTransform(smoothMouseX, (value) =>
    prefersReducedMotion ? 0 : value * 28,
  );

  const cardCollectionY = useTransform(smoothMouseY, (value) =>
    prefersReducedMotion ? 0 : value * -18,
  );

  const cardDashboardX = useTransform(smoothMouseX, (value) =>
    prefersReducedMotion ? 0 : value * 34,
  );

  const cardDashboardY = useTransform(smoothMouseY, (value) =>
    prefersReducedMotion ? 0 : value * 20,
  );

  const cardPerformanceX = useTransform(smoothMouseX, (value) =>
    prefersReducedMotion ? 0 : value * -16,
  );

  const cardPerformanceY = useTransform(smoothMouseY, (value) =>
    prefersReducedMotion ? 0 : value * 26,
  );

  function handlePointerMove(event: PointerEvent<HTMLElement>) {
    if (prefersReducedMotion) return;

    const rect = event.currentTarget.getBoundingClientRect();

    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;

    mouseX.set(x);
    mouseY.set(y);
  }

  function handlePointerLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <section
      ref={sectionRef}
      id="inicio"
      data-header-theme="dark"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="hero-section relative min-h-[100svh] overflow-hidden bg-[#030303] text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_16%,rgba(255,255,255,0.23),transparent_20%),radial-gradient(circle_at_82%_34%,rgba(255,255,255,0.08),transparent_24%),radial-gradient(circle_at_10%_20%,rgba(255,255,255,0.065),transparent_24%),linear-gradient(180deg,#050505_0%,#020202_100%)]" />

      <motion.div
        style={{ opacity: gridOpacity }}
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.032)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.022)_1px,transparent_1px)] bg-[size:118px_118px]"
      />

      <div className="grain-overlay" />
      <div className="hero-cinematic-vignette" />

      <div
        className="pointer-events-none absolute left-1/2 top-[16%] z-[1] hidden -translate-x-1/2 select-none text-center font-display text-[clamp(8rem,13.5vw,17rem)] font-normal uppercase leading-[0.72] tracking-[-0.085em] text-white lg:block"
        aria-hidden="true"
      >
        <motion.div
          initial={{ opacity: 0, y: 44, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.05, ease: smoothEase }}
          style={{
            y: backgroundWordY,
            scale: backgroundWordScale,
            opacity: backgroundWordOpacity,
          }}
          className="hero-background-word"
        >

        </motion.div>
      </div>

      <motion.span
        className="hero-smoke-light"
        aria-hidden="true"
        style={{ opacity: smokeOpacity }}
      />

      <motion.span className="hero-smoke-haze" aria-hidden="true" />

      <div className="relative mx-auto flex min-h-[100svh] w-full max-w-[1760px] flex-col px-5 pb-10 pt-[122px] sm:px-8 lg:px-[76px] lg:pt-[112px]">
        <div className="grid flex-1 items-center gap-8 lg:grid-cols-[0.73fr_1.27fr] lg:gap-0">
          <motion.div
            style={{ y: contentY, opacity: contentOpacity }}
            className="relative z-40 max-w-[700px] pt-0 lg:pl-[0px] lg:pt-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.78, ease: smoothEase }}
              className="mb-7 hidden items-center gap-3 overflow-hidden text-[10px] font-semibold uppercase tracking-[0.55em] text-white/38 sm:flex"
            >
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  duration: 0.85,
                  delay: 0.16,
                  ease: smoothEase,
                }}
                className="h-px w-10 origin-left bg-white/22"
              />

              Studio digital premium
            </motion.div>

            <motion.h1
              variants={revealContainer}
              initial="hidden"
              animate="show"
              className="font-display max-w-[630px] text-[clamp(3.05rem,3.45vw,4.95rem)] font-normal leading-[0.98] tracking-[-0.055em] text-white"
            >
              {heroTitleLines.map((line) => (
                <span
                  key={line}
                  className="hero-title-mask block overflow-hidden [perspective:900px]"
                >
                  <motion.span
                    variants={lineReveal}
                    className="block will-change-transform"
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 28, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.86,
                delay: 0.45,
                ease: smoothEase,
              }}
              className="mt-7 max-w-[520px] text-[16px] leading-[1.6] tracking-[-0.02em] text-white/58 lg:text-[17px]"
            >
              Soluções digitais completas que unem estratégia, experiência e
              código de alta performance.
            </motion.p>

            <motion.div
              variants={revealContainer}
              initial="hidden"
              animate="show"
              className="mt-9 flex flex-col gap-4 sm:flex-row"
            >
              <motion.div variants={lineReveal}>
                <Button
                  href="#projetos"
                  variant="light"
                  className="sm:min-w-[222px]"
                >
                  Ver portfólio
                  <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-1" />
                </Button>
              </motion.div>

              <motion.div variants={lineReveal}>
                <Button
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  variant="outline"
                  className="sm:min-w-[255px]"
                >
                  <FaWhatsapp className="h-5 w-5" />
                  Falar no WhatsApp
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.075,
                    delayChildren: 0.66,
                  },
                },
              }}
              className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4 text-white/48 sm:gap-x-9"
            >
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <motion.div
                    key={feature.label}
                    variants={{
                      hidden: {
                        opacity: 0,
                        y: 18,
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
                    }}
                    className="flex items-center gap-3"
                  >
                    <Icon className="h-5 w-5 text-white/48" />

                    <span className="text-[15px] font-medium tracking-[-0.02em] sm:text-[16px]">
                      {feature.label}
                    </span>

                    {index < features.length - 1 && (
                      <span className="ml-3 hidden h-5 w-px bg-white/10 sm:block" />
                    )}
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-stage relative z-20 min-h-[640px] sm:min-h-[720px] lg:min-h-[700px] xl:min-h-[735px]"
            style={{
              rotateX: stageRotateX,
              rotateY: stageRotateY,
              y: stageY,
              scale: stageScale,
              opacity: stageOpacity,
            }}
          >
            <span
              className="hero-stage-light hero-stage-light-one"
              aria-hidden="true"
            />

            <span
              className="hero-stage-light hero-stage-light-two"
              aria-hidden="true"
            />

            <div className="absolute left-[50%] top-[43%] z-40 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 sm:h-[400px] sm:w-[400px] lg:left-[49%] lg:top-[43%] lg:h-[470px] lg:w-[470px] xl:h-[520px] xl:w-[520px]">
              <motion.div
                initial={{
                  opacity: 0,
                  y: 88,
                  scale: 0.72,
                  rotate: -12,
                  filter: "blur(22px)",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  rotate: 0,
                  filter: "blur(0px)",
                }}
                transition={{
                  duration: 1.28,
                  delay: 0.32,
                  ease: smoothEase,
                }}
                className="h-full w-full will-change-transform"
              >
                <motion.div
                  style={{
                    y: metalY,
                    scale: metalScale,
                    rotate: metalRotate,
                  }}
                  className="h-full w-full will-change-transform"
                >
                  <div className="hero-metal-object">
                    <span className="hero-metal-glow" />
                    <span className="hero-metal-asset" />
                  </div>
                </motion.div>
              </motion.div>
            </div>

            <FloatingMockup
              src="/images/hero/hero-card-site-portfolio.png"
              alt="Mockup de site portfólio em preto e branco"
              priority
              delay={0.5}
              float="slow"
              hasReflection={false}
              entrance={{ x: -90, y: 92, rotate: -8, scale: 0.82 }}
              className="left-[4%] top-[-1%] h-[275px] w-[550px] sm:left-[5%] sm:top-[0%] sm:h-[215px] sm:w-[425px] lg:left-[-3%] lg:top-[1%] xl:h-[285px] xl:w-[400px]"
              perspectiveClassName="[transform:perspective(400px)_rotateY(20deg)_rotateX(20deg)_rotateZ(3deg)]"
              style={{ x: cardSiteX, y: cardSiteY }}
            />

            <FloatingMockup
              src="/images/hero/hero-card-contents.png"
              alt="Mockup editorial contents"
              delay={0.58}
              float="medium"
              entrance={{ x: -140, y: 76, rotate: -10, scale: 0.82 }}
              className="left-[-30%] top-[39%] h-[175px] w-[370px] sm:left-[-7%] sm:top-[40%] sm:h-[225px] sm:w-[435px] lg:left-[-8%] lg:top-[41%] xl:h-[295px] xl:w-[400px]"
              perspectiveClassName="[transform:perspective(1200px)_rotateY(25deg)_rotateX(-3deg)_rotateZ(-6deg)]"
              style={{ x: cardContentsX, y: cardContentsY }}
            />

            <FloatingMockup
              src="/images/hero/hero-card-colecao.png"
              alt="Mockup de loja virtual coleção essencial"
              delay={0.66}
              float="fast"
              entrance={{ x: 130, y: 62, rotate: 8, scale: 0.8 }}
              className="right-[40%] top-[3%] h-[175px] w-[360px] sm:right-[-7%] sm:top-[4%] sm:h-[225px] sm:w-[455px] lg:right-[-12%] lg:top-[-4%] xl:h-[400px] xl:w-[500px]"
              perspectiveClassName="[transform:perspective(2000px)_rotateY(50deg)_rotateX(-10deg)_rotateZ(-7deg)]"
              style={{ x: cardCollectionX, y: cardCollectionY }}
            />

            <FloatingMockup
              src="/images/hero/hero-card-dashboard.png"
              alt="Mockup de dashboard escuro"
              delay={0.74}
              float="slow"
              entrance={{ x: 120, y: 96, rotate: 10, scale: 0.82 }}
              className="right-[-5%] bottom-[13%] h-[200px] w-[365px] sm:right-[-4%] sm:bottom-[14%] sm:h-[255px] sm:w-[465px] lg:right-[-2%] lg:bottom-[20%] xl:h-[300px] xl:w-[380px]"
              perspectiveClassName="[transform:perspective(2000px)_rotateY(30deg)_rotateX(-20deg)_rotateZ(-8deg)]"
              style={{ x: cardDashboardX, y: cardDashboardY }}
            />

            <FloatingMockup
              src="/images/hero/hero-card-performance.png"
              alt="Mockup performance que impulsiona resultados"
              delay={0.82}
              float="medium"
              entrance={{ x: -80, y: 120, rotate: -7, scale: 0.84 }}
              className="left-[-26%] bottom-[30%] h-[155px] w-[335px] rotate-[4deg] sm:left-[29%] sm:bottom-[6%] sm:h-[200px] sm:w-[430px] lg:left-[17%] lg:bottom-[-5%] xl:h-[290px] xl:w-[510px]"
              perspectiveClassName="[transform:perspective(1000px)_rotateY(-10deg)_rotateX(3deg)_rotateZ(6deg)]"
              style={{ x: cardPerformanceX, y: cardPerformanceY }}
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 0.82,
            delay: 0.92,
            ease: smoothEase,
          }}
          style={{ opacity: scrollCueOpacity }}
          className="hero-scroll-cue pointer-events-none absolute bottom-8 left-1/2 z-40 hidden -translate-x-1/2 flex-col items-center gap-3 text-white/34 lg:flex"
          aria-hidden="true"
        >
          

        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 1.02,
            ease: smoothEase,
          }}
          className="relative z-30 mx-auto mt-3 w-full max-w-[900px] lg:-mt-3"
        >
          <div className="mb-5 flex items-center gap-5 text-center">
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: 1,
                delay: 1.02,
                ease: smoothEase,
              }}
              className="h-px flex-1 origin-right bg-white/10"
            />

            <span className="text-[10px] font-semibold uppercase tracking-[0.5em] text-white/43">
              Confiança de marcas que inovam
            </span>

            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: 1,
                delay: 1.02,
                ease: smoothEase,
              }}
              className="h-px flex-1 origin-left bg-white/10"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 sm:gap-x-12">
            {trustItems.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 14, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 0.65,
                  delay: 1.12 + index * 0.08,
                  ease: smoothEase,
                }}
                className="flex items-center gap-3 text-[13px] font-semibold uppercase tracking-[0.22em] text-white/38"
              >
                <span className="h-5 w-5 rounded-[5px] border border-white/16 bg-white/[0.03]" />
                {item}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}