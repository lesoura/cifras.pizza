"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      className="relative w-full py-20 px-6 sm:px-16 text-white flex flex-col items-center overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ amount: 0.2 }}
    >
      {/* Background Image */}
      <Image
        src="/images/jewel-bg.jpg"
        alt="About Background"
        fill
        className="object-cover object-top opacity-20 -z-10"
        priority
      />
      <div className="absolute inset-0 bg-zinc-950/60 -z-10" />

      {/* Avatar */}
      <motion.div
        className="flex justify-center items-center gap-6 mb-8 mt-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Image
          src="/images/cifras-icon-inverted.png"
          alt="Jewel Torres Cifra"
          width={300}
          height={300}
          className="rounded-full object-cover border-2 border-[#CEAE7B]"
        />
      </motion.div>

      {/* Title */}
      <motion.h2
        className="text-4xl sm:text-5xl font-bold text-center mb-12 text-[#ff5a5f]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        About Us
      </motion.h2>

      {/* Paragraph */}
      <motion.p
        className="max-w-3xl mx-auto text-center text-gray-300 text-lg leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Founded in 2022 by{" "}
        <span className="text-[#CEAE7B] font-semibold">Jewel Torres Cifra</span>, a known
        founder of Pasayeño Klasiko, started from a humble house with great knowledge and mastery
        he gained from working at an Italian restaurant. Cifra’s Pizza was built on passion, precision, and love
        for the craft. What started as a simple dream quickly turned into a pursuit of creating
        pizzas that aren’t just delicious — but unforgettable. Each pizza is made with care,
        inspired by the same dedication Jewel has for his classic motorcycles. With one goal in
        heart — to leave every customer with a smile, one perfectly crafted pizza at a time.
      </motion.p>
    </motion.section>
  );
}
