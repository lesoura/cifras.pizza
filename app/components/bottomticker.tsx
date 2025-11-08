"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tickerItems = [
  "🍕 Pasay's Best Pizzeria!",
  "🚚 Delivery Available!",
  "🛎️ Order Now!",
  "🔥 Best Tambike Spot in Pasay!",
  "📅 Plan Your Next Visit!",
];

export default function BottomTicker() {
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      setIsAtBottom(scrollY + windowHeight >= docHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {!isAtBottom && (
        <motion.div
            className="fixed inset-x-0 bottom-0 z-50 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            >
            <div className="flex h-12 items-center px-4">
                <motion.div
                className="flex whitespace-nowrap"
                animate={{ x: ["100%", "-100%"] }}
                transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                >
                {tickerItems.concat(tickerItems).map((item, i) => (
                    <span
                    key={i}
                    className={`inline-block px-8 text-lg font-bold backdrop-blur-md bg-black/20 rounded-full mr-2 ${
                        i % 2 === 0 ? "text-[#CEAE7B]" : "text-[#ff5a5f]"
                    }`}
                    >
                    {item}
                    </span>
                ))}
                </motion.div>
            </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
