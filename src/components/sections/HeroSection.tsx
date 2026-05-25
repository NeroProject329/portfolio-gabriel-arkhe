"use client";

import Image from "next/image";
import {
  ArrowRight,
  LockKeyhole,
  MessageCircle,
  TrendingUp,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const WHATSAPP_URL =
  "https://wa.me/5500000000000?text=Ol%C3%A1%2C%20Gabriel.%20Quero%20criar%20um%20projeto%20digital%20premium.";

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

type FloatingMockupProps = {
  src: string;
  alt: string;
  className?: string;
  delay?: number;
  priority?: boolean;
  float?: "slow" | "medium" | "fast";
};

function FloatingMockup({
  src,
  alt,
  className,
  delay = 0,
  priority = false,
  float = "medium",
}: FloatingMockupProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 42, rotateX: 8 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{
        duration: 0.95,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn(
        "mockup-card pointer-events-none absolute z-30",
        "drop-shadow-[0_34px_90px_rgba(0,0,0,0.72)]",
        float === "slow" && "float-slow",
        float === "medium" && "float-medium",
        float === "fast" && "float-fast",
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 768px) 70vw, (max-width: 1200px) 42vw, 560px"
        className="object-contain"
      />
    </motion.div>
  );
}

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-[100svh] overflow-hidden bg-[#030303] text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_16%,rgba(255,255,255,0.23),transparent_20%),radial-gradient(circle_at_82%_34%,rgba(255,255,255,0.08),transparent_24%),radial-gradient(circle_at_10%_20%,rgba(255,255,255,0.065),transparent_24%),linear-gradient(180deg,#050505_0%,#020202_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.032)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.022)_1px,transparent_1px)] bg-[size:118px_118px] opacity-[0.16]" />
      <div className="grain-overlay" />

      <div className="relative mx-auto flex min-h-[100svh] w-full max-w-[1760px] flex-col px-5 pb-10 pt-[122px] sm:px-8 lg:px-[76px] lg:pt-[112px]">
        <div className="grid flex-1 items-center gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-0">
          <div className="relative z-40 max-w-[820px] pt-0 lg:pl-[24px] lg:pt-8">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="mb-7 hidden items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.55em] text-white/38 sm:flex"
            >
              <span className="h-px w-10 bg-white/22" />
              Studio digital premium
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 34 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-display max-w-[790px] text-[clamp(3.75rem,9.8vw,6.7rem)] font-medium leading-[0.94] tracking-[-0.06em] text-white sm:text-[clamp(4.5rem,8.2vw,7rem)] lg:text-[clamp(5rem,4.28vw,6.45rem)]"
            >
              <span className="block">Sites, lojas e sistemas</span>
              <span className="block">criados para vender mais</span>
              <span className="block">com design, tecnologia</span>
              <span className="block">e performance.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.16,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-8 max-w-[620px] text-balance text-[19px] leading-[1.62] tracking-[-0.025em] text-white/62 sm:text-[20px] lg:text-[21px]"
            >
              Soluções digitais completas que unem estratégia, experiência e
              código de alta performance.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-9 flex flex-col gap-4 sm:flex-row"
            >
              <Button
                href="#portfolio"
                variant="light"
                className="sm:min-w-[222px]"
              >
                Ver portfólio
                <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-1" />
              </Button>

              <Button
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                variant="outline"
                className="sm:min-w-[255px]"
              >
                <MessageCircle className="h-5 w-5" />
                Falar no WhatsApp
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.34,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4 text-white/48 sm:gap-x-9"
            >
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <div key={feature.label} className="flex items-center gap-3">
                    <Icon className="h-5 w-5 text-white/48" />
                    <span className="text-[15px] font-medium tracking-[-0.02em] sm:text-[16px]">
                      {feature.label}
                    </span>

                    {index < features.length - 1 && (
                      <span className="ml-3 hidden h-5 w-px bg-white/10 sm:block" />
                    )}
                  </div>
                );
              })}
            </motion.div>
          </div>

          <div className="hero-stage relative z-20 min-h-[690px] sm:min-h-[790px] lg:min-h-[790px] xl:min-h-[835px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.84, rotate: -8 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{
                duration: 1.15,
                delay: 0.18,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute left-[50%] top-[46%] z-20 h-[405px] w-[405px] -translate-x-1/2 -translate-y-1/2 sm:h-[520px] sm:w-[520px] lg:left-[49%] lg:top-[46%] lg:h-[610px] lg:w-[610px] xl:h-[685px] xl:w-[685px]"
            >
              <div className="hero-metal-object">
                <span className="hero-metal-core" />
                <span className="hero-orbit hero-orbit-one" />
                <span className="hero-orbit hero-orbit-two" />
                <span className="hero-orbit hero-orbit-three" />
                <span className="hero-orbit-dot hero-dot-one" />
                <span className="hero-orbit-dot hero-dot-two" />
                <span className="hero-orbit-dot hero-dot-three" />
                <span className="hero-metal-asset" />
              </div>
            </motion.div>

            <FloatingMockup
              src="/images/hero/hero-card-site-portfolio.png"
              alt="Mockup de site portfólio em preto e branco"
              priority
              delay={0.35}
              float="slow"
              className="left-[2%] top-[-2%] h-[185px] w-[360px] -rotate-[5deg] sm:left-[6%] sm:top-[0%] sm:h-[225px] sm:w-[435px] lg:left-[6%] lg:top-[1%] xl:h-[260px] xl:w-[505px]"
            />

            <FloatingMockup
              src="/images/hero/hero-card-contents.png"
              alt="Mockup editorial contents"
              delay={0.43}
              float="medium"
              className="left-[-8%] top-[36%] h-[185px] w-[350px] rotate-[2deg] sm:left-[-4%] sm:top-[38%] sm:h-[238px] sm:w-[450px] lg:left-[-6%] lg:top-[39%] xl:h-[280px] xl:w-[535px]"
            />

            <FloatingMockup
              src="/images/hero/hero-card-colecao.png"
              alt="Mockup de loja virtual coleção essencial"
              delay={0.5}
              float="fast"
              className="right-[-9%] top-[2%] h-[180px] w-[365px] rotate-[4deg] sm:right-[-5%] sm:top-[3%] sm:h-[230px] sm:w-[465px] lg:right-[-5%] lg:top-[3%] xl:h-[275px] xl:w-[570px]"
            />

            <FloatingMockup
              src="/images/hero/hero-card-dashboard.png"
              alt="Mockup de dashboard escuro"
              delay={0.56}
              float="slow"
              className="right-[-4%] bottom-[14%] h-[210px] w-[370px] rotate-[4deg] sm:right-[-2%] sm:bottom-[14%] sm:h-[270px] sm:w-[475px] lg:right-[-1%] lg:bottom-[15%] xl:h-[330px] xl:w-[580px]"
            />

            <FloatingMockup
              src="/images/hero/hero-card-performance.png"
              alt="Mockup performance que impulsiona resultados"
              delay={0.62}
              float="medium"
              className="left-[22%] bottom-[2%] h-[170px] w-[360px] rotate-[4deg] sm:left-[27%] sm:bottom-[4%] sm:h-[220px] sm:w-[465px] lg:left-[23%] lg:bottom-[6%] xl:h-[270px] xl:w-[560px]"
            />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.72,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative z-30 mx-auto mt-7 w-full max-w-[940px] lg:mt-0"
        >
          <div className="mb-5 flex items-center gap-5 text-center">
            <span className="h-px flex-1 bg-white/10" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.5em] text-white/43">
              Confiança de marcas que inovam
            </span>
            <span className="h-px flex-1 bg-white/10" />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 sm:gap-x-12">
            {trustItems.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 text-[13px] font-semibold uppercase tracking-[0.22em] text-white/38"
              >
                <span className="h-5 w-5 rounded-[5px] border border-white/16 bg-white/[0.03]" />
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}