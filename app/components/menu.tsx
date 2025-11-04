"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const pizzas = [
  { name: "Menu 1", image: "/images/menu1.jpg" },
  { name: "Menu 2", image: "/images/menu2.jpg" },
  { name: "Menu 3", image: "/images/menu3.jpg" },
  { name: "Menu 4", image: "/images/menu4.jpg" },
  { name: "Menu 5", image: "/images/menu5.jpg" },
  { name: "Menu 6", image: "/images/menu6.jpg" },
  { name: "Menu 7", image: "/images/menu7.jpg" },
  { name: "Menu 8", image: "/images/menu8.jpg" },
];

export default function Menu() {
  const [current, setCurrent] = useState(0);
  const [modalImage, setModalImage] = useState<string | null>(null);

  const slides = [];
  for (let i = 0; i < pizzas.length; i += 3) {
    slides.push(pizzas.slice(i, i + 3));
  }

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <motion.section
      className="relative w-full py-20 px-6 sm:px-16 bg-zinc-950 text-white flex flex-col items-center overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Left background image */}
      <motion.img
        src="/images/hand-model.png"
        alt="Hand Pizza Model Left"
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 0.4 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: false }}
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[800px] sm:w-[950px] pointer-events-none select-none"
      />

      {/* Right background image */}
      <motion.img
        src="/images/hand-model-right.png"
        alt="Hand Pizza Model Right"
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 0.4 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: false }}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[800px] sm:w-[950px] pointer-events-none select-none"
      />

      <h2 className="text-4xl sm:text-5xl font-bold text-center mb-2 text-[#ff5a5f] relative z-10">
        Our Menu
      </h2>

      <div className="relative w-full max-w-6xl overflow-hidden z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className="flex gap-6 justify-center"
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {slides[current].map((pizza, i) => (
              <div
                key={i}
                className="flex-shrink-0 h-[400px] mt-8 rounded-2xl cursor-pointer transition-transform duration-300 hover:scale-105"
              >
                <div className="h-full overflow-visible">
                  <div
                    className="bg-zinc-900 h-full rounded-2xl flex items-center justify-center shadow-lg
                               transition-shadow duration-300 hover:shadow-[0_0_15px_5px_rgba(255,215,0,0.7)]"
                    onClick={() => setModalImage(pizza.image)}
                  >
                    <img
                      src={pizza.image}
                      alt={pizza.name}
                      className="h-full w-auto rounded-2xl object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <div className="flex justify-between mt-6 max-w-6xl w-full">
          <button
            onClick={prev}
            className="px-4 py-2 border-2 border-[#CEAE7B] text-[#CEAE7B] rounded-full bg-transparent 
                      hover:bg-[#CEAE7B] hover:text-black transition-colors duration-300"
          >
            Prev
          </button>

          <button
            onClick={next}
            className="px-4 py-2 border-2 border-[#CEAE7B] text-[#CEAE7B] rounded-full bg-transparent 
                      hover:bg-[#CEAE7B] hover:text-black transition-colors duration-300"
          >
            Next
          </button>
        </div>
      </div>

      {/* Modal */}
      {modalImage && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={() => setModalImage(null)}
        >
          <motion.div
            className="flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.img
              src={modalImage}
              alt="Full view"
              className="max-h-[80vh] max-w-full rounded-xl shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />

            <motion.div
              className="relative mt-4 px-6 py-2 border-2 border-[#CEAE7B] text-[#CEAE7B] font-semibold rounded-full overflow-hidden cursor-pointer group"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
            >
              <span className="absolute inset-0 bg-[#CEAE7B] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out rounded-full z-0" />
              <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                Call us at 0949-897-6361 / 0968-243-4110
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </motion.section>
  );
}
