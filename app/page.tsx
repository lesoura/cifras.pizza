"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "./components/header";
import Hero from "./components/hero";
import Menu from "./components/menu";
import About from "./components/about";
import Testimonials from "./components/testimonials";
import Contact from "./components/contact";
import Footer from "./components/footer";
import BottomTicker from "./components/bottomticker";

const menuImages = [
  "/images/veggiexcheese.png",
  "/images/menu1.jpg",
  "/images/menu2.jpg",
  "/images/menu3.jpg",
  "/images/menu4.jpg",
  "/images/menu5.jpg",
  "/images/menu6.jpg",
  "/images/menu7.jpg",
  "/images/menu8.jpg",
  "/images/hand-model.png",
  "/images/hand-model-right.png",
];

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    let loadedCount = 0;
    menuImages.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === menuImages.length) setImagesLoaded(true);
      };
    });
  }, []);

  useEffect(() => {
    if (imagesLoaded) {
      const timer = setTimeout(() => setShowSplash(false), 500); // small extra delay
      return () => clearTimeout(timer);
    }
  }, [imagesLoaded]);

  return (
    <main className="relative flex flex-col">
      <AnimatePresence>
        {showSplash && (
          <motion.div
            key="splash"
            className="fixed inset-0 flex items-center justify-center bg-black z-50"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.img
              src="/images/cifras-icon-inverted.png"
              alt="Splash"
              className="w-64 h-64 object-cover rounded-lg"
              animate={{ filter: ["blur(4px)", "blur(0px)", "blur(4px)"] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {!showSplash && (
        <>
          <Header />
          <Hero />
          <div id="menu">
            <Menu />
          </div>
          <About />
          <div className="bg-[url('/images/cifras-bg.png')] bg-cover bg-center bg-scroll bg-[length:auto_300%]">
            <Testimonials />
            <Contact />
            <Footer />
          </div>
          <BottomTicker />
        </>
      )}
    </main>
  );
}
