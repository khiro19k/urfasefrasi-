"use client";

import { useState } from "react";
import { translations } from "./translations";

export default function Home() {
  const [lang, setLang] = useState<"sv" | "en">("sv");
  const [activeCategory, setActiveCategory] = useState<"grill" | "meze" | "dessert">("grill");
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", date: "", guests: "2" });

  const t = translations[lang];

  // Helper for category-specific menu items
  const menuItems = {
    grill: [
      { id: "urfaKebab", translation: t.menu.dishes.urfaKebab, img: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?auto=format&fit=crop&q=80&w=800", tag: "🔥 Mild" },
      { id: "mixGrill", translation: t.menu.dishes.mixGrill, img: "/images/food_main.jpg", tag: "⭐ Signatur" },
      { id: "beyti", translation: t.menu.dishes.beyti, img: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?auto=format&fit=crop&q=80&w=800", tag: "🔥 Kockens Val" }
    ],
    meze: [
      { id: "hummus", translation: t.menu.dishes.hummus, img: "https://images.unsplash.com/photo-1547058881-aa0edd92aab3?auto=format&fit=crop&q=80&w=800", tag: "Klassiker" },
      { id: "mezePlatter", translation: t.menu.dishes.mezePlatter, img: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&q=80&w=800", tag: "Perfekt att dela" }
    ],
    dessert: [
      { id: "baklava", translation: t.menu.dishes.baklava, img: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&q=80&w=800", tag: "Äkta Antep" },
      { id: "kunefe", translation: t.menu.dishes.kunefe, img: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=800", tag: "Serveras varm" }
    ]
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSubmitted(true);
    setTimeout(() => {
      setBookingSubmitted(false);
      setFormData({ name: "", phone: "", date: "", guests: "2" });
    }, 6000);
  };

  return (
    <div className="min-h-screen bg-brand-black-pearl bg-brand-pattern text-foreground selection:bg-brand-bronze selection:text-brand-black-pearl relative overflow-x-hidden">
      
      {/* Dynamic Background Gradient Overlays */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-brand-bronze/5 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-brand-dark-green/10 rounded-full blur-[90px] md:blur-[140px] pointer-events-none" />

      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-brand-black-pearl/90 backdrop-blur-md border-b border-brand-bronze/15 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 md:h-24 flex items-center justify-between">
          
          {/* Logo Brand Frame */}
          <a href="#" className="flex items-center gap-3 md:gap-4 group">
            <img 
              src="/images/logo.png" 
              alt="Urfa Sofrası Logo" 
              className="h-12 md:h-16 w-auto object-contain transition-transform group-hover:scale-105" 
            />
            <div className="flex flex-col">
              <span className="font-grityle text-sm md:text-lg tracking-[0.15em] text-brand-bronze group-hover:text-brand-bronze-light transition-colors">
                URFA SOFRASI
              </span>
              <span className="text-[8px] md:text-[9px] font-sans tracking-[0.3em] text-brand-meteor uppercase">
                GRILL & STEAK
              </span>
            </div>
          </a>

          {/* Navigation Links - Desktop Only */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10 text-xs font-medium tracking-[0.15em] uppercase">
            <a href="#" className="text-brand-bronze hover:text-brand-bronze-light transition-colors">{t.nav.home}</a>
            <a href="#story" className="text-foreground/85 hover:text-brand-bronze transition-colors">{t.nav.story}</a>
            <a href="#menu" className="text-foreground/85 hover:text-brand-bronze transition-colors">{t.nav.menu}</a>
            <a href="#booking" className="text-foreground/85 hover:text-brand-bronze transition-colors">{t.nav.booking}</a>
          </nav>

          {/* Action Zone: Language Selector & Booking CTA & Mobile Toggle */}
          <div className="flex items-center gap-3 md:gap-6">
            
            {/* Lang Switcher Button */}
            <div className="flex items-center bg-brand-dark-green/40 border border-brand-bronze/20 rounded-full p-0.5 md:p-1">
              <button 
                onClick={() => setLang("sv")}
                className={`px-2 md:px-3 py-0.5 md:py-1 rounded-full text-[10px] md:text-xs font-semibold tracking-wider transition-all ${lang === "sv" ? "bg-brand-bronze text-brand-black-pearl shadow-md" : "text-foreground/70 hover:text-white"}`}
              >
                SV
              </button>
              <button 
                onClick={() => setLang("en")}
                className={`px-2 md:px-3 py-0.5 md:py-1 rounded-full text-[10px] md:text-xs font-semibold tracking-wider transition-all ${lang === "en" ? "bg-brand-bronze text-brand-black-pearl shadow-md" : "text-foreground/70 hover:text-white"}`}
              >
                EN
              </button>
            </div>

            {/* Header Booking Button - Desktop Only */}
            <a
              href="#booking"
              className="hidden sm:inline-flex items-center justify-center px-4 md:px-6 py-2.5 md:py-3 bg-gradient-to-r from-brand-bronze to-brand-bronze-light text-brand-black-pearl font-bold text-[10px] md:text-xs tracking-widest uppercase rounded-sm transition-all hover:brightness-110 shadow-lg shadow-brand-bronze/10 hover:-translate-y-0.5"
            >
              {t.nav.cta}
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-brand-bronze hover:text-brand-bronze-light p-2 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU DRAWER OVERLAY */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 bottom-0 top-20 z-40 bg-brand-black-pearl bg-brand-pattern border-t border-brand-bronze/15 flex flex-col justify-between p-8 animate-fade-in">
          <nav className="flex flex-col gap-6 text-base font-grityle tracking-widest text-center mt-6">
            <a 
              href="#" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-brand-bronze py-3 border-b border-brand-bronze/10"
            >
              {t.nav.home}
            </a>
            <a 
              href="#story" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white py-3 border-b border-brand-bronze/10"
            >
              {t.nav.story}
            </a>
            <a 
              href="#menu" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white py-3 border-b border-brand-bronze/10"
            >
              {t.nav.menu}
            </a>
            <a 
              href="#booking" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white py-3 border-b border-brand-bronze/10"
            >
              {t.nav.booking}
            </a>
          </nav>
          
          <div className="flex flex-col gap-4 items-center mb-8">
            <a
              href="#booking"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full text-center px-6 py-4 bg-gradient-to-r from-brand-bronze to-brand-bronze-light text-brand-black-pearl font-bold text-xs tracking-widest uppercase rounded-sm shadow-lg shadow-brand-bronze/10"
            >
              {t.nav.cta}
            </a>
            <div className="text-[10px] text-brand-meteor uppercase tracking-[0.2em] mt-4">
              URFA SOFRASI • GRILL & STEAK
            </div>
          </div>
        </div>
      )}

      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] md:min-h-[92vh] flex items-center justify-center overflow-hidden py-12 md:py-20">
        
        {/* Cinematic Backdrop Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black-pearl via-brand-black-pearl/85 to-brand-black-pearl/40 z-10" />
          <img 
            src="/images/food_main.jpg" 
            alt="Delicious Turkish Meze & Grill background" 
            className="w-full h-full object-cover opacity-30 object-center scale-105" 
          />
        </div>

        {/* Elegant Gold-Lined Framing & Content */}
        <div className="relative z-20 max-w-5xl mx-auto text-center px-6 flex flex-col items-center">
          
          {/* Logo Badge Large */}
          <div className="mb-6 md:mb-8 p-1 bg-brand-bronze/10 rounded-full border border-brand-bronze/20 animate-fade-in">
            <img 
              src="/images/logo.png" 
              alt="Urfa Sofrası Badge" 
              className="w-36 sm:w-48 md:w-64 drop-shadow-[0_10px_20px_rgba(189,150,86,0.15)]"
            />
          </div>

          <span className="text-brand-bronze font-sans text-[10px] md:text-sm font-semibold tracking-[0.25em] md:tracking-[0.35em] uppercase mb-4 block animate-fade-in-up">
            {t.hero.welcome}
          </span>
          
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-grityle mb-6 md:mb-8 leading-tight tracking-[0.05em] text-white max-w-4xl animate-fade-in-up-delay-1">
            {t.hero.title1}
          </h1>

          <div className="w-20 md:w-32 h-[1px] bg-gradient-to-r from-transparent via-brand-bronze to-transparent mb-6 md:mb-8" />
          
          <p className="text-foreground/80 font-sans text-xs sm:text-sm md:text-lg max-w-3xl mb-10 md:mb-12 leading-relaxed font-light animate-fade-in-up-delay-2">
            {t.hero.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto animate-fade-in-up-delay-2">
            <a
              href="#menu"
              className="px-6 md:px-8 py-3.5 md:py-4.5 bg-brand-bronze text-brand-black-pearl font-bold tracking-widest text-[10px] md:text-xs uppercase rounded-sm transition-all shadow-xl shadow-brand-bronze/15 hover:bg-brand-bronze-light hover:-translate-y-0.5 text-center"
            >
              {t.hero.menuCta}
            </a>
            <a
              href="#story"
              className="px-6 md:px-8 py-3.5 md:py-4.5 bg-transparent text-white border border-brand-bronze/35 font-bold tracking-widest text-[10px] md:text-xs uppercase rounded-sm hover:bg-brand-bronze/10 hover:border-brand-bronze transition-all text-center"
            >
              {t.hero.storyCta}
            </a>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <a href="#story" className="text-brand-bronze hover:text-brand-bronze-light transition-all block p-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </a>
        </div>
      </section>

      {/* STORY SECTION */}
      <section id="story" className="py-20 md:py-32 px-4 sm:px-6 max-w-7xl mx-auto border-t border-brand-bronze/10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left: Premium Image Layout with Gold Accents */}
          <div className="relative p-2 md:p-4 order-2 lg:order-1">
            <div className="absolute inset-0 border border-brand-bronze/20 translate-x-2 md:translate-x-4 translate-y-2 md:translate-y-4 rounded-sm" />
            <div className="relative h-[300px] sm:h-[400px] md:h-[480px] w-full rounded-sm overflow-hidden shadow-2xl border border-brand-bronze/20 bg-brand-black-pearl">
              <div className="absolute inset-0 bg-brand-black-pearl/10" />
              <img
                src="/images/food_main.jpg"
                alt="Inside Urfa Sofrası kitchen grill"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Right: Text Information */}
          <div className="flex flex-col justify-center order-1 lg:order-2">
            <span className="text-brand-bronze font-bold text-[10px] md:text-xs tracking-[0.25em] uppercase block mb-3 md:mb-4">
              {t.story.tag}
            </span>
            <h2 className="text-2xl md:text-5xl font-grityle font-normal mb-6 md:mb-8 text-white leading-tight">
              {t.story.title}
            </h2>
            <p className="text-foreground/80 font-sans text-xs md:text-base mb-4 md:mb-6 leading-relaxed font-light">
              {t.story.desc1}
            </p>
            <p className="text-foreground/75 font-sans text-xs md:text-base mb-8 md:mb-10 leading-relaxed font-light">
              {t.story.desc2}
            </p>
            
            {/* Stats Counter Blocks */}
            <div className="grid grid-cols-3 gap-4 md:gap-6 pt-6 md:pt-8 border-t border-brand-bronze/15 text-center lg:text-left">
              <div>
                <span className="block text-xl md:text-4xl font-grityle text-brand-bronze mb-1 md:mb-2">100%</span>
                <span className="text-[9px] md:text-xs text-brand-meteor uppercase tracking-wider font-semibold leading-tight block">{t.story.stat1}</span>
              </div>
              <div>
                <span className="block text-xl md:text-4xl font-grityle text-brand-bronze mb-1 md:mb-2">30+</span>
                <span className="text-[9px] md:text-xs text-brand-meteor uppercase tracking-wider font-semibold leading-tight block">{t.story.stat2}</span>
              </div>
              <div>
                <span className="block text-xl md:text-4xl font-grityle text-brand-bronze mb-1 md:mb-2">Anrik</span>
                <span className="text-[9px] md:text-xs text-brand-meteor uppercase tracking-wider font-semibold leading-tight block">{t.story.stat3}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MENU SECTION */}
      <section id="menu" className="py-20 md:py-32 bg-brand-black-pearl/70 border-y border-brand-bronze/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
            <span className="text-brand-bronze font-bold text-[10px] md:text-xs tracking-[0.25em] uppercase block mb-3 md:mb-4">
              {t.menu.tag}
            </span>
            <h2 className="text-2xl md:text-5xl font-grityle font-normal mb-4 md:mb-6 text-white">
              {t.menu.title}
            </h2>
            <p className="text-brand-meteor text-xs md:text-base tracking-wide font-light">
              {t.menu.subtitle}
            </p>
          </div>

          {/* Interactive Category Filter Menu Tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-8 mb-12 md:mb-16">
            {(["grill", "meze", "dessert"] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 md:px-6 py-2.5 md:py-3.5 border text-[10px] md:text-xs font-bold tracking-[0.15em] uppercase rounded-sm transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-brand-bronze border-brand-bronze text-brand-black-pearl shadow-lg shadow-brand-bronze/10"
                    : "border-brand-bronze/25 text-foreground/80 hover:border-brand-bronze hover:text-white"
                }`}
              >
                {t.menu.categories[cat]}
              </button>
            ))}
          </div>

          {/* Dishes Showcase Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {menuItems[activeCategory].map((item) => (
              <div 
                key={item.id} 
                className="bg-brand-black-pearl/80 rounded-sm overflow-hidden border border-brand-bronze/15 hover:border-brand-bronze/40 transition-all duration-300 group shadow-md flex flex-col h-full"
              >
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden bg-brand-dark-green/30">
                  <img
                    src={item.img}
                    alt={item.translation.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <span className="absolute top-4 left-4 bg-brand-black-pearl/90 border border-brand-bronze/30 text-brand-bronze-light font-bold px-2.5 py-1 text-[10px] uppercase tracking-wider rounded-sm">
                    {item.tag}
                  </span>
                </div>
                
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <div className="flex justify-between items-start gap-4 mb-3 md:mb-4">
                    <h3 className="text-lg md:text-xl font-grityle text-white group-hover:text-brand-bronze transition-colors leading-tight">
                      {item.translation.name}
                    </h3>
                    <span className="text-brand-bronze font-bold text-xs md:text-sm tracking-wider whitespace-nowrap bg-brand-bronze/10 px-2 md:px-2.5 py-0.5 md:py-1 rounded-sm border border-brand-bronze/20">
                      {item.translation.price}
                    </span>
                  </div>
                  <p className="text-foreground/70 text-xs md:text-sm leading-relaxed font-light flex-grow">
                    {item.translation.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING SECTION */}
      <section id="booking" className="py-20 md:py-32 px-4 sm:px-6 max-w-4xl mx-auto">
        <div className="bg-brand-dark-green/20 border border-brand-bronze/25 rounded-sm p-6 sm:p-10 md:p-16 shadow-2xl relative overflow-hidden bg-brand-pattern">
          
          <div className="absolute top-0 right-0 w-32 md:w-48 h-32 md:h-48 bg-brand-bronze/5 rounded-full blur-[60px] md:blur-[80px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-32 md:w-48 h-32 md:h-48 bg-brand-bronze/5 rounded-full blur-[60px] md:blur-[80px] pointer-events-none" />

          <div className="relative z-10 text-center max-w-2xl mx-auto mb-10 md:mb-14">
            <span className="text-brand-bronze font-bold text-[10px] md:text-xs tracking-[0.25em] uppercase block mb-3 md:mb-4">
              {t.booking.tag}
            </span>
            <h2 className="text-2xl md:text-4xl font-grityle font-normal mb-3 md:mb-4 text-white">
              {t.booking.title}
            </h2>
            <p className="text-foreground/75 font-sans text-xs font-light leading-relaxed">
              {t.booking.subtitle}
            </p>
          </div>

          {bookingSubmitted ? (
            <div className="relative z-10 p-6 md:p-8 border border-brand-bronze/30 bg-brand-black-pearl/90 text-center rounded-sm animate-fade-in">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 md:w-12 md:h-12 text-brand-bronze mx-auto mb-4 animate-[bounce_2s_infinite]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-brand-bronze font-bold text-xs md:text-sm tracking-wide">{t.booking.successMsg}</p>
            </div>
          ) : (
            <form onSubmit={handleBookingSubmit} className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 font-sans">
              <div>
                <label className="block text-[9px] md:text-[10px] text-brand-bronze font-semibold uppercase tracking-wider mb-2">
                  {t.booking.nameLabel}
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-brand-black-pearl/70 border border-brand-bronze/20 rounded-sm py-3 md:py-3.5 px-4 text-xs md:text-sm text-white focus:outline-none focus:border-brand-bronze transition-all placeholder-white/20"
                  placeholder="Karl Andersson"
                  required
                />
              </div>
              <div>
                <label className="block text-[9px] md:text-[10px] text-brand-bronze font-semibold uppercase tracking-wider mb-2">
                  {t.booking.phoneLabel}
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-brand-black-pearl/70 border border-brand-bronze/20 rounded-sm py-3 md:py-3.5 px-4 text-xs md:text-sm text-white focus:outline-none focus:border-brand-bronze transition-all placeholder-white/20"
                  placeholder="+46 70 123 45 67"
                  required
                />
              </div>
              <div>
                <label className="block text-[9px] md:text-[10px] text-brand-bronze font-semibold uppercase tracking-wider mb-2">
                  {t.booking.dateLabel}
                </label>
                <input
                  type="datetime-local"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full bg-brand-black-pearl/70 border border-brand-bronze/20 rounded-sm py-3 md:py-3.5 px-4 text-xs md:text-sm text-white focus:outline-none focus:border-brand-bronze transition-all uppercase"
                  required
                />
              </div>
              <div>
                <label className="block text-[9px] md:text-[10px] text-brand-bronze font-semibold uppercase tracking-wider mb-2">
                  {t.booking.guestsLabel}
                </label>
                <select
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  className="w-full bg-brand-black-pearl/70 border border-brand-bronze/20 rounded-sm py-3 md:py-3.5 px-4 text-xs md:text-sm text-white focus:outline-none focus:border-brand-bronze transition-all"
                  required
                >
                  <option className="bg-brand-black-pearl text-white" value="1">{t.booking.guestOptions[1]}</option>
                  <option className="bg-brand-black-pearl text-white" value="2">{t.booking.guestOptions[2]}</option>
                  <option className="bg-brand-black-pearl text-white" value="3">{t.booking.guestOptions[3]}</option>
                  <option className="bg-brand-black-pearl text-white" value="4">{t.booking.guestOptions[4]}</option>
                  <option className="bg-brand-black-pearl text-white" value="5">{t.booking.guestOptions[5]}</option>
                </select>
              </div>
              <div className="md:col-span-2 mt-4">
                <button
                  type="submit"
                  className="w-full py-3.5 md:py-4.5 bg-brand-bronze text-brand-black-pearl font-bold tracking-widest text-[10px] md:text-xs uppercase rounded-sm shadow-xl shadow-brand-bronze/10 hover:bg-brand-bronze-light transition-all"
                >
                  {t.booking.submitBtn}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-brand-black-pearl border-t border-brand-bronze/15 py-16 md:py-20 text-xs text-foreground/75 tracking-wider font-light">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          
          {/* Col 1: Brand Info */}
          <div className="flex flex-col items-start">
            <img 
              src="/images/logo.png" 
              alt="Urfa Sofrası Logo" 
              className="h-16 md:h-20 w-auto mb-6" 
            />
            <p className="leading-relaxed mb-6 max-w-sm text-xs md:text-sm font-light">
              Vi serverar det äkta turkiska köket med fokus på förstklassiga råvaror, kolgrillat kött och klassiska mezes. Välkommen till en oförglömlig kväll.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-brand-bronze transition-all text-[10px] md:text-xs font-semibold tracking-widest uppercase">Instagram</a>
              <span className="text-brand-bronze/50">•</span>
              <a href="#" className="hover:text-brand-bronze transition-all text-[10px] md:text-xs font-semibold tracking-widest uppercase">Facebook</a>
            </div>
          </div>

          {/* Col 2: Opening Hours */}
          <div>
            <h4 className="text-white font-grityle text-base md:text-lg tracking-[0.1em] font-normal mb-6 uppercase">
              {t.footer.hoursTitle}
            </h4>
            <ul className="space-y-3 md:space-y-4 text-xs font-light">
              <li className="flex justify-between border-b border-brand-bronze/10 pb-2">
                <span>{lang === "sv" ? "Måndag - Torsdag" : "Monday - Thursday"}:</span>
                <span className="text-brand-bronze font-medium">11:30 - 22:00</span>
              </li>
              <li className="flex justify-between border-b border-brand-bronze/10 pb-2">
                <span>{lang === "sv" ? "Fredag" : "Friday"}:</span>
                <span className="text-brand-bronze font-medium">11:30 - 23:00</span>
              </li>
              <li className="flex justify-between border-b border-brand-bronze/10 pb-2">
                <span>{lang === "sv" ? "Lördag" : "Saturday"}:</span>
                <span className="text-brand-bronze font-medium">12:00 - 23:00</span>
              </li>
              <li className="flex justify-between border-b border-brand-bronze/10 pb-2">
                <span>{lang === "sv" ? "Söndag" : "Sunday"}:</span>
                <span className="text-brand-bronze font-medium">12:00 - 22:00</span>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div>
            <h4 className="text-white font-grityle text-base md:text-lg tracking-[0.1em] font-normal mb-6 uppercase">
              {t.footer.contactTitle}
            </h4>
            <address className="not-italic space-y-3 md:space-y-4 text-xs leading-relaxed">
              <p className="flex items-start gap-3">
                <span className="text-brand-bronze font-semibold">ADR:</span>
                <span>{t.footer.address}</span>
              </p>
              <p className="flex items-center gap-3">
                <span className="text-brand-bronze font-semibold">TEL:</span>
                <a href={`tel:${t.footer.phone}`} className="hover:text-brand-bronze transition-colors">{t.footer.phone}</a>
              </p>
              <p className="flex items-center gap-3">
                <span className="text-brand-bronze font-semibold">E-POST:</span>
                <a href={`mailto:${t.footer.email}`} className="hover:text-brand-bronze transition-colors">{t.footer.email}</a>
              </p>
            </address>
          </div>
        </div>

        {/* Lower footer copyright */}
        <div className="max-w-7xl mx-auto px-6 mt-12 md:mt-16 pt-8 border-t border-brand-bronze/10 text-center text-[9px] md:text-[10px] text-brand-meteor uppercase tracking-[0.2em]">
          <p>© {new Date().getFullYear()} Urfa Sofrası. {t.footer.rights}</p>
        </div>
      </footer>
    </div>
  );
}
