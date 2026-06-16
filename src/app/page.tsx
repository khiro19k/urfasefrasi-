"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import SignatureDishes from "@/components/sections/SignatureDishes";
import ReservationForm from "@/components/sections/ReservationForm";
import { translations } from "./translations";

// --- Premium Gold Ornament Divider ---
function GoldOrnament() {
  return (
    <div className="flex items-center justify-center gap-4 py-10 md:py-14">
      <div className="h-[1px] w-16 sm:w-28 bg-gradient-to-r from-transparent to-brand-bronze/35" />
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-brand-bronze/75 shrink-0">
        <path d="M12 2L15.5 8.5L22 12L15.5 15.5L12 22L8.5 15.5L2 12L8.5 8.5L12 2Z" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
      </svg>
      <div className="h-[1px] w-16 sm:w-28 bg-gradient-to-l from-transparent to-brand-bronze/35" />
    </div>
  );
}

// --- Story Section ---
function StorySection({ lang }: { lang: "sv" | "en" }) {
  const t = translations[lang];

  return (
    <section id="story" className="py-16 md:py-24 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left image with offset frame */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative p-2 md:p-4 order-2 lg:order-1"
        >
          <div className="absolute inset-0 border border-brand-bronze/20 translate-x-3 translate-y-3 rounded-sm pointer-events-none" />
          <div className="relative h-[300px] sm:h-[420px] md:h-[500px] w-full rounded-sm overflow-hidden border border-brand-bronze/15 shadow-2xl">
            <img
              src="/images/food_main.jpg"
              alt="Inside Urfa Sofrası kitchen"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </motion.div>

        {/* Right text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col justify-center order-1 lg:order-2"
        >
          <span className="text-brand-bronze font-bold text-[10px] tracking-[0.3em] uppercase block mb-3">
            {t.story.tag}
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-grityle text-white mb-6 leading-tight">
            {t.story.title}
          </h2>
          <p className="text-foreground/75 text-xs md:text-sm leading-relaxed font-light mb-5">
            {t.story.desc1}
          </p>
          <p className="text-foreground/65 text-xs md:text-sm leading-relaxed font-light mb-10">
            {t.story.desc2}
          </p>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-4 pt-8 border-t border-brand-bronze/15">
            {[
              { val: "100%", label: t.story.stat1 },
              { val: "30+", label: t.story.stat2 },
              { val: t.story.stat3Val, label: t.story.stat3 },
            ].map((s) => (
              <div key={s.label} className="text-center lg:text-left">
                <span className="block text-xl md:text-3xl font-grityle text-brand-bronze mb-1">{s.val}</span>
                <span className="text-[9px] md:text-[10px] text-brand-meteor uppercase tracking-wider font-semibold leading-snug block">{s.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// --- Footer ---
function Footer({ lang }: { lang: "sv" | "en" }) {
  const t = translations[lang];
  const days = {
    sv: { wt: "Måndag – Torsdag", fri: "Fredag", sat: "Lördag", sun: "Söndag" },
    en: { wt: "Monday – Thursday", fri: "Friday", sat: "Saturday", sun: "Sunday" },
  };
  const d = days[lang];

  return (
    <footer className="bg-brand-black-pearl border-t border-brand-bronze/12 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
        {/* Brand */}
        <div>
          <img src="/images/logo.png" alt="Urfa Sofrası" className="h-16 md:h-20 w-auto mb-5" />
          <p className="text-foreground/60 text-xs leading-relaxed font-light mb-6 max-w-xs">
            {t.footer.description}
          </p>
          <div className="flex gap-4 text-[10px] font-semibold tracking-widest uppercase">
            <a href="#" className="text-foreground/50 hover:text-brand-bronze transition-colors">Instagram</a>
            <span className="text-brand-bronze/30">•</span>
            <a href="#" className="text-foreground/50 hover:text-brand-bronze transition-colors">Facebook</a>
          </div>
        </div>

        {/* Hours */}
        <div>
          <h4 className="font-grityle text-white text-base md:text-lg tracking-[0.1em] uppercase mb-6">{t.footer.hoursTitle}</h4>
          <ul className="space-y-3 text-xs font-light text-foreground/65">
            {[
              { day: d.wt, time: "11:30 – 22:00" },
              { day: d.fri, time: "11:30 – 23:00" },
              { day: d.sat, time: "12:00 – 23:00" },
              { day: d.sun, time: "12:00 – 22:00" },
            ].map((row) => (
              <li key={row.day} className="flex justify-between border-b border-brand-bronze/8 pb-2">
                <span>{row.day}:</span>
                <span className="text-brand-bronze font-medium">{row.time}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-grityle text-white text-base md:text-lg tracking-[0.1em] uppercase mb-6">{t.footer.contactTitle}</h4>
          <address className="not-italic text-xs text-foreground/65 space-y-3 font-light leading-relaxed">
            <p className="flex items-start gap-3"><span className="text-brand-bronze font-semibold w-14 shrink-0">ADR:</span><span>{t.footer.address}</span></p>
            <p className="flex items-center gap-3"><span className="text-brand-bronze font-semibold w-14 shrink-0">TEL:</span><a href={`tel:${t.footer.phone}`} className="hover:text-brand-bronze transition-colors">{t.footer.phone}</a></p>
            <p className="flex items-center gap-3"><span className="text-brand-bronze font-semibold w-14 shrink-0">E-POST:</span><a href={`mailto:${t.footer.email}`} className="hover:text-brand-bronze transition-colors">{t.footer.email}</a></p>
          </address>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-6 border-t border-brand-bronze/10 text-center text-[9px] text-brand-meteor uppercase tracking-[0.2em]">
        © {new Date().getFullYear()} Urfa Sofrası. {t.footer.rights}
      </div>
    </footer>
  );
}

// --- Root Page ---
export default function Home() {
  const [lang, setLang] = useState<"sv" | "en">("sv");

  return (
    <div className="min-h-screen bg-brand-black-pearl bg-brand-pattern text-foreground selection:bg-brand-bronze selection:text-brand-black-pearl overflow-x-hidden">
      
      {/* Ambient background orbs */}
      <div className="fixed top-0 right-0 w-[400px] h-[400px] bg-brand-bronze/4 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="fixed bottom-1/4 left-0 w-[400px] h-[400px] bg-brand-dark-green/8 rounded-full blur-[140px] pointer-events-none z-0" />

      {/* Language toggle — fixed top-right on desktop, inside nav on mobile */}
      <div className="fixed top-5 right-24 md:right-48 z-[60] hidden sm:flex items-center bg-brand-dark-green/50 border border-brand-bronze/20 rounded-full p-0.5 backdrop-blur-sm">
        {(["sv", "en"] as const).map((l) => (
          <button
            key={l}
            onClick={() => setLang(l)}
            className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-wider transition-all ${lang === l ? "bg-brand-bronze text-brand-black-pearl" : "text-foreground/60 hover:text-white"}`}
          >
            {l.toUpperCase()}
          </button>
        ))}
      </div>

      <Navbar lang={lang} />
      <Hero lang={lang} />
      <GoldOrnament />
      <StorySection lang={lang} />
      <GoldOrnament />
      <SignatureDishes lang={lang} />
      <GoldOrnament />
      <ReservationForm lang={lang} />
      <Footer lang={lang} />
    </div>
  );
}
