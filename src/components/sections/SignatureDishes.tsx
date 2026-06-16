"use client";

import { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";

// --- Types ---
interface Dish {
  id: string;
  name: string;
  desc: string;
  price: string;
  img: string;
  tag: string;
}

interface Category {
  id: string;
  label: string;
  dishes: Dish[];
}

// --- Data (Swedish default, can be parameterized) ---
const categoriesSv: Category[] = [
  {
    id: "grill",
    label: "Kolgrillat",
    dishes: [
      {
        id: "urfa-kebab",
        name: "Klassisk Urfa Kebab",
        desc: "Finmalet lamm- och nötkött kryddat med milda Urfa-kryddor, grillat på spett över träkol.",
        price: "225 kr",
        img: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?auto=format&fit=crop&q=80&w=800",
        tag: "🔥 Mild",
      },
      {
        id: "mix-grill",
        name: "Urfa Premium Mixgrill",
        desc: "Lyxig kombination av Urfa kebab, kycklingspett, grillade lammracks och oxfiléspett.",
        price: "345 kr",
        img: "/images/food_main.jpg",
        tag: "⭐ Signatur",
      },
      {
        id: "beyti",
        name: "Beyti Kebab",
        desc: "Grillat kebabspett insvept i tunnbröd, toppat med brynt smör och krämig turkisk yoghurt.",
        price: "245 kr",
        img: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?auto=format&fit=crop&q=80&w=800",
        tag: "🔥 Kockens Val",
      },
    ],
  },
  {
    id: "meze",
    label: "Kalla & Varma Meze",
    dishes: [
      {
        id: "hummus",
        name: "Hummus med Varmt Lamm",
        desc: "Silkeslen hummus gjord på kikärtor, tahini och citron, toppad med stekt lammkött.",
        price: "125 kr",
        img: "https://images.unsplash.com/photo-1547058881-aa0edd92aab3?auto=format&fit=crop&q=80&w=800",
        tag: "Klassiker",
      },
      {
        id: "meze-platter",
        name: "Klassisk Mezetallrik",
        desc: "Kockens urval av meze: hummus, tzatziki, muhammara, haydari och fyllda vinblad.",
        price: "175 kr",
        img: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&q=80&w=800",
        tag: "Perfekt att dela",
      },
    ],
  },
  {
    id: "dessert",
    label: "Desserter",
    dishes: [
      {
        id: "baklava",
        name: "Gaziantep Baklava",
        desc: "Frasig smördeg fylld med premium pistaschnötter och söt sirap. Serveras varm med glass.",
        price: "95 kr",
        img: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&q=80&w=800",
        tag: "Äkta Antep",
      },
      {
        id: "kunefe",
        name: "Klassisk Künefe",
        desc: "Ugnsbakad trådsmördeg med smält ost, dränkt i sockerlag och toppad med pistaschnötter.",
        price: "115 kr",
        img: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=800",
        tag: "Serveras varm",
      },
    ],
  },
];

const categoriesEn: Category[] = [
  {
    id: "grill",
    label: "Charcoal Grilled",
    dishes: [
      { id: "urfa-kebab", name: "Classic Urfa Kebab", desc: "Finely minced lamb and beef seasoned with mild Urfa spices, grilled on skewers over charcoal.", price: "225 SEK", img: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?auto=format&fit=crop&q=80&w=800", tag: "🔥 Mild" },
      { id: "mix-grill", name: "Urfa Premium Mix Grill", desc: "A luxurious combination of Urfa kebab, chicken skewers, grilled lamb chops and beef tenderloin.", price: "345 SEK", img: "/images/food_main.jpg", tag: "⭐ Signature" },
      { id: "beyti", name: "Beyti Kebab", desc: "Grilled kebab skewer wrapped in flatbread, topped with browned butter and creamy Turkish yogurt.", price: "245 SEK", img: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?auto=format&fit=crop&q=80&w=800", tag: "🔥 Chef's Choice" },
    ],
  },
  {
    id: "meze",
    label: "Cold & Hot Meze",
    dishes: [
      { id: "hummus", name: "Hummus with Warm Lamb", desc: "Silky hummus made from chickpeas, tahini, and lemon, topped with sautéed lamb and melted butter.", price: "125 SEK", img: "https://images.unsplash.com/photo-1547058881-aa0edd92aab3?auto=format&fit=crop&q=80&w=800", tag: "Classic" },
      { id: "meze-platter", name: "Classic Meze Platter", desc: "Chef's selection of meze: hummus, tzatziki, muhammara, haydari, and stuffed grape leaves.", price: "175 SEK", img: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&q=80&w=800", tag: "Perfect to Share" },
    ],
  },
  {
    id: "dessert",
    label: "Desserts",
    dishes: [
      { id: "baklava", name: "Gaziantep Baklava", desc: "Crispy layered pastry filled with premium pistachios and sweet syrup. Served warm with ice cream.", price: "95 SEK", img: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&q=80&w=800", tag: "Authentic Antep" },
      { id: "kunefe", name: "Classic Künefe", desc: "Oven-baked shredded pastry with melted cheese, soaked in sweet syrup and topped with pistachios.", price: "115 SEK", img: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=800", tag: "Served Warm" },
    ],
  },
];

// --- DishCard Sub-component ---
function DishCard({ dish, index }: { dish: Dish; index: number }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] },
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ boxShadow: "0 0 30px rgba(189,150,86,0.12)", borderColor: "rgba(189,150,86,0.45)" }}
      className="group flex flex-col bg-brand-black-pearl/80 border border-brand-bronze/15 rounded-sm overflow-hidden transition-colors duration-300 cursor-default"
    >
      {/* Image */}
      <div className="relative h-52 sm:h-60 overflow-hidden bg-brand-dark-green/40">
        <motion.img
          src={dish.img}
          alt={dish.name}
          loading="lazy"
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        />
        {/* Bottom gradient for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        {/* Dish name + price over image bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between">
          <h3 className="text-white font-grityle text-base leading-tight drop-shadow-md">
            {dish.name}
          </h3>
          <span className="bg-brand-black-pearl/90 border border-brand-bronze/30 text-brand-bronze font-bold text-xs px-2.5 py-1 rounded-sm ml-2 shrink-0">
            {dish.price}
          </span>
        </div>
        {/* Tag badge */}
        <span className="absolute top-3 left-3 bg-brand-black-pearl/85 border border-brand-bronze/25 text-brand-bronze-light text-[10px] font-semibold px-2 py-1 rounded-sm tracking-wide">
          {dish.tag}
        </span>
      </div>

      {/* Description */}
      <div className="p-5 flex-grow">
        <p className="text-foreground/65 text-xs leading-relaxed font-light">{dish.desc}</p>
      </div>
    </motion.div>
  );
}

// --- Main Component ---
interface SignatureDishesProps {
  lang?: "sv" | "en";
}

export default function SignatureDishes({ lang = "sv" }: SignatureDishesProps) {
  const categories = lang === "sv" ? categoriesSv : categoriesEn;
  const [activeId, setActiveId] = useState(categories[0].id);
  const activeCategory = categories.find((c) => c.id === activeId)!;

  return (
    <section id="menu" className="py-20 md:py-32 bg-brand-black-pearl/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-brand-bronze font-bold text-[10px] tracking-[0.3em] uppercase block mb-3">
            {lang === "sv" ? "KULINARISKA MÄSTERVERK" : "CULINARY MASTERPIECES"}
          </span>
          <h2 className="text-3xl md:text-5xl font-grityle text-white mb-4">
            {lang === "sv" ? "Våra Signaturrätter" : "Our Signature Dishes"}
          </h2>
          <p className="text-brand-meteor text-xs md:text-sm font-light">
            {lang === "sv"
              ? "Ett handplockat urval av rätter som definierar vårt kök"
              : "A handpicked selection of dishes that define our kitchen"}
          </p>
        </motion.div>

        {/* Tab Navigation with Framer Motion layoutId sliding indicator */}
        <LayoutGroup>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveId(cat.id)}
                className={`relative px-4 md:px-6 py-2.5 text-[10px] md:text-xs font-bold tracking-widest uppercase rounded-sm transition-colors duration-200 ${
                  activeId === cat.id
                    ? "text-brand-black-pearl"
                    : "text-foreground/70 hover:text-white border border-brand-bronze/25 hover:border-brand-bronze"
                }`}
              >
                {/* Animated gold background pill */}
                {activeId === cat.id && (
                  <motion.span
                    layoutId="tab-bg"
                    className="absolute inset-0 bg-brand-bronze rounded-sm"
                    transition={{ type: "spring", stiffness: 380, damping: 34 }}
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
              </button>
            ))}
          </div>
        </LayoutGroup>

        {/* Dishes Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {activeCategory.dishes.map((dish, i) => (
              <DishCard key={dish.id} dish={dish} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
