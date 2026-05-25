import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "light" | "dark" | "outline";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
};

const variants: Record<ButtonVariant, string> = {
  light:
    "border-white bg-white !text-[#050505] hover:bg-white/90 shadow-[0_18px_70px_rgba(255,255,255,0.14)]",
  dark:
    "border-white/10 bg-black !text-white hover:bg-black/88 shadow-[0_16px_60px_rgba(0,0,0,0.22)]",
  outline:
    "border-white/18 bg-white/[0.02] !text-white hover:bg-white/[0.08] backdrop-blur-xl",
};

export function Button({
  children,
  className,
  variant = "light",
  ...props
}: ButtonProps) {
  return (
    <a
      className={cn(
        "group relative inline-flex min-h-14 items-center justify-center overflow-hidden rounded-[9px] border px-7 text-[15px] font-medium tracking-[-0.01em] transition duration-300 ease-out",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
        variants[variant],
        className
      )}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-3">
        {children}
      </span>
    </a>
  );
}