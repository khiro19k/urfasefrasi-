"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface ReservationFormProps {
  lang?: "sv" | "en";
}

const copy = {
  sv: {
    tag: "BOKA BORD",
    title: "Säkra din matupplevelse",
    subtitle: "Fyll i formuläret för att reservera ett bord. Vi bekräftar din bokning via SMS.",
    name: "Fullständigt namn",
    namePlaceholder: "Karl Andersson",
    phone: "Telefonnummer",
    phonePlaceholder: "+46 70 123 45 67",
    date: "Datum & Tid",
    guests: "Antal gäster",
    guestOpts: ["1 person", "2 personer", "3–4 personer", "5–6 personer", "7+ (kontakta oss)"],
    submit: "Skicka bokningsförfrågan",
    success: "Tack! Vi har tagit emot din förfrågan och återkommer med bekräftelse inom kort.",
  },
  en: {
    tag: "BOOK A TABLE",
    title: "Secure your dining experience",
    subtitle: "Fill out the form to reserve a table. We will confirm your booking via SMS.",
    name: "Full Name",
    namePlaceholder: "Karl Andersson",
    phone: "Phone Number",
    phonePlaceholder: "+46 70 123 45 67",
    date: "Date & Time",
    guests: "Number of Guests",
    guestOpts: ["1 person", "2 people", "3–4 people", "5–6 people", "7+ (contact us)"],
    submit: "Submit Booking Request",
    success: "Thank you! We have received your request and will confirm shortly.",
  },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

export default function ReservationForm({ lang = "sv" }: ReservationFormProps) {
  const t = copy[lang];
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", date: "", guests: "2 personer" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", phone: "", date: "", guests: "2 personer" });
    }, 7000);
  };

  return (
    <section id="booking" className="py-20 md:py-32 px-4 sm:px-6">
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="relative max-w-4xl mx-auto bg-brand-dark-green/20 border border-brand-bronze/20 rounded-sm p-6 sm:p-12 md:p-16 overflow-hidden"
      >
        {/* Ambient glow blobs */}
        <div className="absolute -top-16 -right-16 w-64 h-64 bg-brand-bronze/6 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-brand-dark-green/20 rounded-full blur-[80px] pointer-events-none" />

        {/* Header */}
        <div className="relative z-10 text-center mb-10 md:mb-14">
          <span className="text-brand-bronze font-bold text-[10px] tracking-[0.3em] uppercase block mb-3">
            {t.tag}
          </span>
          <h2 className="text-2xl md:text-4xl font-grityle text-white mb-3">{t.title}</h2>
          <p className="text-foreground/65 text-xs font-light leading-relaxed max-w-md mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Success state */}
        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative z-10 flex flex-col items-center gap-4 py-10 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.15, type: "spring", stiffness: 260, damping: 20 }}
              className="w-16 h-16 rounded-full border-2 border-brand-bronze flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-brand-bronze">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </motion.div>
            <p className="text-brand-bronze font-semibold text-sm tracking-wide max-w-sm">{t.success}</p>
          </motion.div>
        ) : (
          /* Form */
          <form
            onSubmit={handleSubmit}
            className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* Name */}
            <UnderlinedInput
              label={t.name}
              value={form.name}
              onChange={(v) => setForm({ ...form, name: v })}
              placeholder={t.namePlaceholder}
              type="text"
              required
            />

            {/* Phone */}
            <UnderlinedInput
              label={t.phone}
              value={form.phone}
              onChange={(v) => setForm({ ...form, phone: v })}
              placeholder={t.phonePlaceholder}
              type="tel"
              required
            />

            {/* Date */}
            <UnderlinedInput
              label={t.date}
              value={form.date}
              onChange={(v) => setForm({ ...form, date: v })}
              type="datetime-local"
              required
            />

            {/* Guests (select) */}
            <UnderlinedSelect
              label={t.guests}
              value={form.guests}
              onChange={(v) => setForm({ ...form, guests: v })}
              options={t.guestOpts}
            />

            {/* Submit */}
            <div className="md:col-span-2 mt-2">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, y: -1, boxShadow: "0 8px 28px rgba(189,150,86,0.2)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-brand-bronze text-brand-black-pearl font-bold text-xs tracking-widest uppercase rounded-sm transition-colors hover:bg-brand-bronze-light"
              >
                {t.submit}
              </motion.button>
            </div>
          </form>
        )}
      </motion.div>
    </section>
  );
}

// --- Underlined Input Sub-component ---
function UnderlinedInput({
  label,
  value,
  onChange,
  placeholder = "",
  type = "text",
  required = false,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  const [focused, setFocused] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      <label className="text-[9px] font-semibold tracking-[0.25em] uppercase text-brand-bronze">
        {label}
      </label>
      <div className="relative">
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          required={required}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="w-full bg-transparent text-white text-xs md:text-sm pb-3 pt-1 focus:outline-none placeholder-white/25 border-b border-brand-bronze/30 transition-colors focus:border-brand-bronze"
        />
        {/* Animated gold underline accent */}
        <motion.div
          className="absolute bottom-0 left-0 h-[2px] bg-brand-bronze origin-left"
          animate={{ scaleX: focused ? 1 : 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          style={{ width: "100%" }}
        />
      </div>
    </div>
  );
}

// --- Underlined Select Sub-component ---
function UnderlinedSelect({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  const [focused, setFocused] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      <label className="text-[9px] font-semibold tracking-[0.25em] uppercase text-brand-bronze">
        {label}
      </label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="w-full bg-transparent text-white text-xs md:text-sm pb-3 pt-1 focus:outline-none border-b border-brand-bronze/30 transition-colors focus:border-brand-bronze appearance-none cursor-pointer"
        >
          {options.map((opt) => (
            <option key={opt} value={opt} className="bg-brand-black-pearl text-white">
              {opt}
            </option>
          ))}
        </select>
        {/* Chevron icon */}
        <div className="absolute right-0 bottom-3 pointer-events-none text-brand-bronze/60">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3.5 h-3.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
        {/* Animated gold underline accent */}
        <motion.div
          className="absolute bottom-0 left-0 h-[2px] bg-brand-bronze origin-left"
          animate={{ scaleX: focused ? 1 : 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          style={{ width: "100%" }}
        />
      </div>
    </div>
  );
}
