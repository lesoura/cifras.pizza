"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "./components/header";
import Hero from "./components/hero";
import Menu from "./components/menu";
import Specials from "./components/specials";
import About from "./components/about";
import Testimonials from "./components/testimonials";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2500); // 2.5s splash
    return () => clearTimeout(timer);
  }, []);

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
      {/* <Specials /> */}
      <About />

      {/* bg starts here */}
      <div className="bg-[url('/images/cifras-bg.png')] bg-cover bg-center bg-scroll bg-[length:auto_300%]">
        <Testimonials />
        <Contact />
        <Footer />
      </div>

      {/* bg ends here */}
    </>
  )}
</main>

  );
}
