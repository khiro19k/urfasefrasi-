"use client";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

const tagVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

interface HeroProps {
  lang?: "sv" | "en";
}

export default function Hero({ lang = "sv" }: HeroProps) {
  const copy = {
    sv: {
      tag: "VÄLKOMMEN TILL EN ÄKTA TURKISK SMAKUPPLEVELSE",
      title: "DÄR HISTORIA MÖTER KULINARISK KONST",
      subtitle:
        "Urfa Sofrası bjuder på en exceptionell matupplevelse inspirerad av den historiska staden Şanlıurfa. Vi grillar färskt premiumkött på öppen kolbädd.",
      primary: "Utforska Menyn",
      secondary: "Vår Historia",
    },
    en: {
      tag: "WELCOME TO AN AUTHENTIC TURKISH TASTE EXPERIENCE",
      title: "WHERE HISTORY MEETS CULINARY ART",
      subtitle:
        "Urfa Sofrası offers an exceptional dining experience inspired by the historical city of Şanlıurfa. We grill fresh premium meats on an open charcoal bed.",
      primary: "Explore Menu",
      secondary: "Our Story",
    },
  };
  const t = copy[lang];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Cinematic background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/food_main.jpg"
          alt="Urfa Sofrası grill background"
          className="w-full h-full object-cover scale-105"
        />
        {/* Multi-layer dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black-pearl via-brand-black-pearl/80 to-brand-black-pearl/50" />
        {/* Subtle vignette edges */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,24,34,0.7)_100%)]" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto text-center px-6 flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Logo badge */}
        <motion.div
          variants={itemVariants}
          className="mb-8 p-1 rounded-full bg-brand-bronze/10 border border-brand-bronze/25"
        >
          <img
            src="/images/logo.png"
            alt="Urfa Sofrası badge"
            className="w-36 sm:w-48 md:w-56 drop-shadow-[0_8px_24px_rgba(189,150,86,0.2)]"
          />
        </motion.div>

        {/* Tag line */}
        <motion.span
          variants={tagVariants}
          className="text-brand-bronze text-[9px] sm:text-xs font-semibold uppercase mb-5 block"
        >
          {t.tag}
        </motion.span>

        {/* Main heading */}
        <motion.h1
          variants={itemVariants}
          className="text-3xl sm:text-5xl md:text-7xl font-grityle text-white leading-[1.05] tracking-[0.04em] mb-6"
        >
          {t.title}
        </motion.h1>

        {/* Gold divider */}
        <motion.div
          variants={itemVariants}
          className="w-0 h-[1px] bg-gradient-to-r from-transparent via-brand-bronze to-transparent mb-6"
          animate={{ width: "80px" }}
          transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
        />

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-foreground/75 text-xs sm:text-sm md:text-base max-w-2xl mb-10 leading-relaxed font-light"
        >
          {t.subtitle}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <motion.a
            href="#menu"
            whileHover={{ scale: 1.05, y: -2, boxShadow: "0 12px 32px rgba(189,150,86,0.25)" }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-4 bg-brand-bronze text-brand-black-pearl font-bold text-[10px] tracking-widest uppercase rounded-sm text-center cursor-pointer"
          >
            {t.primary}
          </motion.a>
          <motion.a
            href="#story"
            whileHover={{ scale: 1.05, y: -2, backgroundColor: "rgba(189,150,86,0.08)" }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-4 border border-brand-bronze/40 text-white font-bold text-[10px] tracking-widest uppercase rounded-sm text-center cursor-pointer transition-colors"
          >
            {t.secondary}
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={itemVariants}
          className="mt-16 flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="text-brand-bronze/60"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
