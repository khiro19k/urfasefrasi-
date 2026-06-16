"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Hem", labelEn: "Home", href: "#" },
  { label: "Vår Historia", labelEn: "Our Story", href: "#story" },
  { label: "Meny", labelEn: "Menu", href: "#menu" },
  { label: "Boka Bord", labelEn: "Book Table", href: "#booking" },
];

interface NavbarProps {
  lang?: "sv" | "en";
}

export default function Navbar({ lang = "sv" }: NavbarProps) {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const unsub = scrollY.on("change", (v) => setScrolled(v > 50));
    return () => unsub();
  }, [scrollY]);

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 transition-colors"
        animate={
          scrolled
            ? { backgroundColor: "rgba(0,24,34,0.85)", borderColor: "rgba(189,150,86,0.12)" }
            : { backgroundColor: "rgba(0,24,34,0)", borderColor: "rgba(189,150,86,0)" }
        }
        transition={{ duration: 0.35, ease: "easeOut" }}
        style={{
          backdropFilter: scrolled ? "blur(14px)" : "blur(0px)",
          borderBottom: "1px solid",
          WebkitBackdropFilter: scrolled ? "blur(14px)" : "blur(0px)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-3 group"
            animate={{ paddingTop: scrolled ? "12px" : "20px", paddingBottom: scrolled ? "12px" : "20px" }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <motion.img
              src="/images/logo.png"
              alt="Urfa Sofrası"
              animate={{ height: scrolled ? "44px" : "56px" }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="w-auto object-contain"
            />
            <div className="flex flex-col leading-none">
              <span className="font-grityle text-sm md:text-base tracking-[0.15em] text-brand-bronze">
                URFA SOFRASI
              </span>
              <span className="text-[8px] tracking-[0.3em] text-brand-meteor uppercase">
                GRILL & STEAK
              </span>
            </div>
          </motion.a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink key={link.href} href={link.href} label={lang === "sv" ? link.label : link.labelEn} />
            ))}
          </nav>

          {/* Right: CTA + Mobile toggle */}
          <div className="flex items-center gap-4">
            <motion.a
              href="#booking"
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="hidden sm:inline-flex items-center px-5 py-2.5 bg-brand-bronze text-brand-black-pearl text-[10px] font-bold tracking-widest uppercase rounded-sm shadow-lg shadow-brand-bronze/10 hover:bg-brand-bronze-light transition-colors"
            >
              {lang === "sv" ? "Boka Bord" : "Book Table"}
            </motion.a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden text-brand-bronze p-2"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-x-0 top-0 bottom-0 z-40 bg-brand-black-pearl/97 flex flex-col justify-between p-8 pt-28"
            style={{ backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)" }}
          >
            <nav className="flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.3 }}
                  className="font-grityle text-2xl tracking-widest text-white/90 hover:text-brand-bronze py-4 border-b border-brand-bronze/10 transition-colors"
                >
                  {lang === "sv" ? link.label : link.labelEn}
                </motion.a>
              ))}
            </nav>

            <motion.a
              href="#booking"
              onClick={() => setMobileOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="block w-full text-center py-4 bg-brand-bronze text-brand-black-pearl font-bold text-xs tracking-widest uppercase rounded-sm mb-8"
            >
              {lang === "sv" ? "Boka Bord" : "Book Table"}
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="relative group text-[11px] font-semibold tracking-[0.15em] uppercase text-foreground/80 hover:text-brand-bronze transition-colors py-1"
    >
      {label}
      {/* Gold underline reveal */}
      <span
        className="absolute bottom-0 left-0 h-[1px] bg-brand-bronze transition-all duration-300 group-hover:w-full"
        style={{ width: "0%" }}
      />
    </a>
  );
}
