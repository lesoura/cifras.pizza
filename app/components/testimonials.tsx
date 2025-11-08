"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import CircularGallery from "@/components/CircularGallery";
import "@/components/CircularGallery.css";

const reviews = [
  {
    name: "Ka FoodTrip",
    text: "Isang tagong kainan na may masarap, affordable, at quality na mga pizza at pasta!",
    image: "/images/kafoodtrip-icon.jpg",
  },
  {
    name: "Papa Dhon TV",
    text: "Masarap at quality na hidden gem pizza sa Pasay!",
    image: "/images/papadhon-icon.jpg",
  },
  {
    name: "Hey Jhay PH",
    text: "Quality na sulit pa hanggang crust!",
    image: "/images/heyjhay-icon.jpg",
  },
];

// sample CircularGallery items
const galleryItems = [
  { image: "/images/slide1.jpg", text: "" },
  { image: "/images/slide2.jpg", text: "" },
  { image: "/images/slide3.jpg", text: "" },
  { image: "/images/slide4.jpg", text: "" },
  { image: "/images/slide5.jpg", text: "" },
  { image: "/images/slide6.jpg", text: "" },
  { image: "/images/slide7.jpg", text: "" },
  { image: "/images/slide8.jpg", text: "" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.25 } },
};

const cardVariants = (i: number) => ({
  hidden: { opacity: 0, x: i === 0 ? -100 : i === 1 ? 0 : 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
});

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="w-full py-20 px-6 sm:px-16 bg-black/95 text-white overflow-hidden"
    >
      <motion.h2
        className="text-4xl sm:text-5xl font-bold text-center mb-12 text-[#ff5a5f]"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ amount: 0.3, once: false }}
      >
        What Do Food Vloggers Say?
      </motion.h2>

      {/* Vloggers Section */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3, once: false }}
      >
        {reviews.map((review, i) => (
          <motion.div
            key={i}
            variants={cardVariants(i)}
            className="relative bg-zinc-900 rounded-2xl shadow-lg p-6 text-center group overflow-visible"
          >
            <div className="flex justify-center mb-4 relative">
              <motion.div className="w-20 h-20 rounded-full overflow-hidden border-4 border-[#ff5a5f] transition-all duration-300 group-hover:opacity-0 group-hover:border-transparent">
                <Image
                  src={review.image}
                  alt={review.name}
                  width={80}
                  height={80}
                  className="object-cover w-full h-full"
                />
              </motion.div>

              <motion.div className="absolute w-32 h-32 rounded-full overflow-hidden border-4 border-transparent opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 -top-32">
                <Image
                  src={review.image}
                  alt={review.name}
                  width={128}
                  height={128}
                  className="object-cover w-full h-full"
                />
              </motion.div>
            </div>

            <p className="text-gray-300 mb-4 italic">“{review.text}”</p>
            <h4 className="font-semibold text-[#ff5a5f]">{review.name}</h4>
          </motion.div>
        ))}
      </motion.div>

      {/* Divider */}
      <motion.div
        className="w-1/5 h-px bg-[#ff5a5f] mx-auto my-12"
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      />

      {/* Circular Gallery */}
      <motion.div
        className="mt-10 relative h-[600px]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ amount: 0.3, once: false }}
      >
        <CircularGallery
          items={galleryItems}
          bend={1}
          textColor="#ffffff"
          borderRadius={0.05}
          scrollEase={0.02}
        />
      </motion.div>
    </section>
  );
}
