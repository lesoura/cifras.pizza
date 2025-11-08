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
      // add 2px tolerance for consistency
      setIsAtBottom(scrollY + windowHeight >= docHeight - 2);
    };

    // initialize immediately
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {!isAtBottom && (
        <motion.div
          className="fixed bottom-0 inset-x-0 z-50 flex justify-center pointer-events-none"
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
