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
  perspectiveClassName?: string;
  delay?: number;
  priority?: boolean;
  float?: "slow" | "medium" | "fast";
};

function FloatingMockup({
  src,
  alt,
  className,
  perspectiveClassName,
  delay = 0,
  priority = false,
  float = "medium",
}: FloatingMockupProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 42 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.95,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn(
        "pointer-events-none absolute z-20",
        float === "slow" && "float-slow",
        float === "medium" && "float-medium",
        float === "fast" && "float-fast",
        className
      )}
    >
      <div
        className={cn(
          "mockup-card relative h-full w-full drop-shadow-[0_34px_90px_rgba(0,0,0,0.72)] [transform-style:preserve-3d]",
          perspectiveClassName
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
      </div>
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
        <div className="grid flex-1 items-center gap-8 lg:grid-cols-[0.73fr_1.27fr] lg:gap-0">
          <div className="relative z-40 max-w-[700px] pt-0 lg:pl-[0px] lg:pt-6">
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
              className="font-display max-w-[630px] text-[clamp(3.05rem,3.45vw,4.95rem)] font-normal leading-[0.98] tracking-[-0.055em] text-white"
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
              className="mt-7 max-w-[520px] text-[16px] leading-[1.6] tracking-[-0.02em] text-white/58 lg:text-[17px]"
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

          <div className="hero-stage relative z-20 min-h-[640px] sm:min-h-[720px] lg:min-h-[700px] xl:min-h-[735px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.84, rotate: -8 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{
                duration: 1.15,
                delay: 0.18,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute left-[50%] top-[43%] z-40 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 sm:h-[400px] sm:w-[400px] lg:left-[49%] lg:top-[43%] lg:h-[470px] lg:w-[470px] xl:h-[520px] xl:w-[520px]"
            >
              <div className="hero-metal-object">
                <span className="hero-metal-glow" />
                <span className="hero-metal-asset" />
              </div>
            </motion.div>

            <FloatingMockup
              src="/images/hero/hero-card-site-portfolio.png"
              alt="Mockup de site portfólio em preto e branco"
              priority
              delay={0.35}
              float="slow"
              className="left-[4%] top-[-1%] h-[275px] w-[550px]  sm:left-[5%] sm:top-[0%] sm:h-[215px] sm:w-[425px] lg:left-[-3%] lg:top-[1%] xl:h-[285px] xl:w-[400px]"
              perspectiveClassName="[transform:perspective(400px)_rotateY(20deg)_rotateX(20deg)_rotateZ(3deg)]"
            />

            <FloatingMockup
              src="/images/hero/hero-card-contents.png"
              alt="Mockup editorial contents"
              delay={0.43}
              float="medium"
              className="left-[-30%] top-[39%] h-[175px] w-[370px] sm:left-[-7%] sm:top-[40%] sm:h-[225px] sm:w-[435px] lg:left-[-8%] lg:top-[41%] xl:h-[295px] xl:w-[400px]"
              perspectiveClassName="[transform:perspective(1200px)_rotateY(25deg)_rotateX(-3deg)_rotateZ(-6deg)]"
            />

            <FloatingMockup
              src="/images/hero/hero-card-colecao.png"
              alt="Mockup de loja virtual coleção essencial"
              delay={0.5}
              float="fast"
              className="right-[40%] top-[3%] h-[175px] w-[360px]  sm:right-[-7%] sm:top-[4%] sm:h-[225px] sm:w-[455px] lg:right-[-12%] lg:top-[-4%] xl:h-[400px] xl:w-[500px]"
              perspectiveClassName="[transform:perspective(2000px)_rotateY(50deg)_rotateX(-10deg)_rotateZ(-7deg)]"
            />

            <FloatingMockup
              src="/images/hero/hero-card-dashboard.png"
              alt="Mockup de dashboard escuro"
              delay={0.56}
              float="slow"
              className="right-[-5%] bottom-[13%] h-[200px] w-[365px]  sm:right-[-4%] sm:bottom-[14%] sm:h-[255px] sm:w-[465px] lg:right-[-2%] lg:bottom-[20%] xl:h-[300px] xl:w-[380px]"
              perspectiveClassName="[transform:perspective(2000px)_rotateY(30deg)_rotateX(-20deg)_rotateZ(-8deg)]"
            />

            <FloatingMockup
              src="/images/hero/hero-card-performance.png"
              alt="Mockup performance que impulsiona resultados"
              delay={0.62}
              float="medium"
              className="left-[-26%] bottom-[30%] h-[155px] w-[335px] rotate-[4deg] sm:left-[29%] sm:bottom-[6%] sm:h-[200px] sm:w-[430px] lg:left-[17%] lg:bottom-[-5%] xl:h-[290px] xl:w-[510px]"
              perspectiveClassName="[transform:perspective(1000px)_rotateY(-10deg)_rotateX(3deg)_rotateZ(6deg)]"
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
          className="relative z-30 mx-auto mt-3 w-full max-w-[900px] lg:-mt-3"
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