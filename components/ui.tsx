import { type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "outline";

type ButtonProps = {
  href: string;
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
  small?: boolean;
};

const BUTTON_STYLES: Record<ButtonVariant, string> = {
  primary:
    "bg-terracotta text-white hover:bg-terracotta-light hover:shadow-lg hover:shadow-terracotta/15",
  secondary:
    "bg-sage text-white hover:bg-sage-dark hover:shadow-lg hover:shadow-sage/15",
  outline:
    "border-2 border-bark/15 text-bark hover:border-terracotta/40 hover:text-terracotta",
};

export function Button({
  href,
  variant = "primary",
  children,
  className = "",
  small = false,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 ease-[cubic-bezier(0.33,1,0.68,1)] hover:scale-[1.03] hover:-translate-y-[1px] active:scale-[0.97] active:translate-y-0 ${
        small ? "px-5 py-2 text-sm" : "px-8 py-3.5 text-base"
      } ${BUTTON_STYLES[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      {eyebrow && (
        <p
          className={`text-sm font-medium tracking-widest uppercase mb-3 ${
            light ? "text-sage-light" : "text-terracotta"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-heading text-4xl md:text-5xl lg:text-6xl font-light leading-tight ${
          light ? "text-cream" : "text-bark"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 text-lg leading-relaxed max-w-2xl ${
            centered ? "mx-auto" : ""
          } ${light ? "text-cream/70" : "text-bark-light/60"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function Divider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-4 py-2 ${className}`}>
      <div className="h-px w-16 bg-terracotta/20" />
      <Image src="/images/logo.png" alt="" width={44} height={44} className="w-11 h-11" />
      <div className="h-px w-16 bg-terracotta/20" />
    </div>
  );
}

type ServiceCardProps = {
  title: string;
  description: string;
  href: string;
  icon: ReactNode;
};

export function ServiceCard({
  title,
  description,
  href,
  icon,
}: ServiceCardProps) {
  return (
    <Link href={href} className="group block h-full">
      <div className="relative rounded-2xl bg-warm-white border border-bark/8 shadow-md shadow-bark/4 p-8 transition-all duration-500 hover:shadow-xl hover:shadow-bark/8 hover:-translate-y-1 hover:border-terracotta/15 h-full flex flex-col">
        <div className="mb-5 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-sage/10 text-sage group-hover:bg-terracotta group-hover:text-white transition-all duration-300">
          {icon}
        </div>
        <h3 className="font-heading text-2xl font-medium text-bark mb-3">
          {title}
        </h3>
        <p className="text-bark-light/60 leading-relaxed text-sm">{description}</p>
        <div className="mt-auto pt-5 inline-flex items-center gap-2 text-terracotta text-sm font-medium group-hover:gap-3 transition-all duration-300">
          Learn More
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            <path
              d="M3 8h10M9 4l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}
