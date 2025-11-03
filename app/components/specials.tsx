"use client";

import { motion } from "framer-motion";

const specials = [
  { title: "2-for-1 Tuesdays", description: "Buy one large pizza, get another free every Tuesday." },
  { title: "Family Feast", description: "Get 2 large pizzas and a 1.5L drink for only $25." },
  { title: "Lunch Combo", description: "Slice, drink, and fries combo for just $8." },
];

export default function Specials() {
  return (
    <section id="specials" className="w-full py-20 px-6 sm:px-16 bg-black text-white">
      <motion.h2
        className="text-4xl sm:text-5xl font-bold text-center mb-12 text-[#ff5a5f]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Specials & Deals
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-6xl mx-auto text-center">
        {specials.map((deal, i) => (
          <motion.div
            key={i}
            className="bg-zinc-900 rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-2">{deal.title}</h3>
            <p className="text-gray-400 text-sm">{deal.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
