"use client";

import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaClock, FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="w-full py-32 px-6 sm:px-16 flex flex-col items-center text-center text-white bg-zinc-950"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ amount: 0.2 }}
    >

      <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-[#CEAE7B] uppercase tracking-wide">
        Get in Touch
      </h2>
     <p className="text-gray-400 mb-10 max-w-3xl">
        We'd love to hear from you! Reach out anytime. Order from us — Open Daily: 10AM – 3AM
     </p>

      {/* Icon Buttons */}
      <div className="flex flex-wrap justify-center gap-8 mb-12 text-3xl">
        <a
          href="tel:09498976361"
          className="text-[#CEAE7B] hover:text-white transition"
        >
          <FaPhoneAlt />
        </a>
        <a
          href="mailto:cifraspizza@gmail.com"
          className="text-[#CEAE7B] hover:text-white transition"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://www.facebook.com/cifraspizza"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#CEAE7B] hover:text-white transition"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.instagram.com/cifraspizza"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#CEAE7B] hover:text-white transition"
        >
          <FaInstagram />
        </a>
      </div>

      {/* Branch Maps */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-6xl">
        {/* Pasay Branch */}
        <div className="rounded-xl overflow-hidden border border-zinc-800">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3862.0264025864944!2d120.99965650000001!3d14.540482500000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c9439cb4558b%3A0xd3d804639c5aecbd!2sCifra&#39;s%20Pizza!5e0!3m2!1sen!2sjp!4v1762155351577!5m2!1sen!2sjp"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
          <p className="text-center text-[#CEAE7B] font-semibold mt-2">📍Pasay Branch</p>
        </div>

        {/* Diokno Blvd */}
        <div className="rounded-xl overflow-hidden border border-zinc-800">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d287.041859617921!2d120.98207894017042!3d14.54430688120788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397cb006b060b0d%3A0xd3d954b0425ad62d!2sOn%20The%20Road%20Drinks!5e0!3m2!1sen!2sjp!4v1762155453850!5m2!1sen!2sjp"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
          <p className="text-center text-[#CEAE7B] font-semibold mt-2">📍Diokno Blvd Branch</p>
        </div>

        {/* Marikina Branch */}
        <div className="rounded-xl overflow-hidden border border-zinc-800">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d965.0360316761465!2d121.0981347828105!3d14.64775883295897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b999566b10b7%3A0x8ebc1866cefcf8fa!2sCifra&#39;s%20Pizza%20Restaurant%20%26%20Bar!5e0!3m2!1sen!2sjp!4v1762155517482!5m2!1sen!2sjp"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
          <p className="text-center text-[#CEAE7B] font-semibold mt-2">📍Marikina Branch</p>
        </div>
      </div>
    </motion.section>
  );
}
