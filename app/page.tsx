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

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const pizzaImage = new Image();
    pizzaImage.src = "/images/veggiexcheese.png";
    pizzaImage.onload = () => setImageLoaded(true);
  }, []);

  useEffect(() => {
    // Only hide splash when image is loaded
    if (imageLoaded) {
      const timer = setTimeout(() => setShowSplash(false), 1000); // optional extra delay
      return () => clearTimeout(timer);
    }
  }, [imageLoaded]);

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
