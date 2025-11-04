"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaRegEdit } from "react-icons/fa";
import BlurText from "@/reactbits/BlurText";
import LightRays from "@/components/LightRays";

export default function Hero() {
  const titles = [
    "MADE WITH LOVE",
    "HANDMADE DOUGH",
    "DELICIOUS TOPPINGS",
  ];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const rotate = setInterval(() => {
      setCurrent((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(rotate);
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center px-10 sm:px-24 overflow-hidden"
    >
      {/* Light Rays Background */}
      <div className="absolute inset-0 -z-10">
          <LightRays raysColor="#CEAE7B" />
      </div>

      {/* 2 Columns */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 items-center w-full gap-10">
        {/* Left Column (Text) */}
        <motion.div
          className="flex flex-col items-start text-left w-full"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <BlurText
            text="We bring you freshly baked italian pizza!"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-6xl sm:text-7xl font-bold mb-6 text-left"
            animationFrom={undefined}
            animationTo={undefined}
            onAnimationComplete={() => {}}
          />

          <div className="text-[#CEAE7B] text-3xl sm:text-4xl font-semibold mb-10 max-w-full overflow-x-auto whitespace-nowrap h-14">
            <AnimatePresence mode="wait">
              <motion.p
                key={titles[current]}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
              >
                {titles[current]}
              </motion.p>
            </AnimatePresence>
          </div>

          <div className="flex flex-col sm:flex-row items-start gap-6">
            <div className="relative inline-flex rounded-full overflow-hidden bg-zinc-900 w-[360px] h-14">
              <a
                href="#menu"
                className="flex-1 flex items-center justify-center text-zinc-50 transition hover:text-[#CEAE7B]"
              >
                View Menu
              </a>
              <a
                href="#contact"
                className="flex-1 flex items-center justify-center text-zinc-50 transition hover:text-[#CEAE7B]"
              >
                Give Feedback
              </a>

              <span className="absolute top-0 bottom-0 left-1/2 w-px bg-zinc-700 transform rotate-12 origin-center pointer-events-none"></span>
            </div>

            <a
              href="#contact"
              className="relative px-8 py-4 border border-[#CEAE7B] text-[#CEAE7B] rounded-full font-semibold flex items-center gap-2 transition hover:bg-[#CEAE7B] hover:text-black"
            >
              <span className="absolute inset-0 rounded-full border-2 border-[#CEAE7B] animate-pulse-glow pointer-events-none"></span>
              <FaRegEdit className="text-lg z-10" />
              <span className="z-10">Order Now!</span>
            </a>
          </div>
        </motion.div>

        {/* Right Column (Image) */}
        <motion.div
          className="flex justify-center sm:justify-start"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src="/images/veggiexcheese.png"
            alt="Cifra's Pizza"
            width={500}
            height={500}
            className="object-contain drop-shadow-2xl"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
