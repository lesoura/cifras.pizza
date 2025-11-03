"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const links = [
  { name: "HOME", href: "#hero" },
  { name: "MENU", href: "#menu" },
  { name: "CONTACT", href: "#contact" },
];

export default function Header() {
  const [active, setActive] = useState("#hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      if (scrollPos >= docHeight - 5) {
        setActive("#contact");
        return;
      }

      let found = false;
      links.forEach((link) => {
        const el = document.querySelector(link.href);
        if (el) {
          const offsetTop = (el as HTMLElement).offsetTop;
          const offsetBottom = offsetTop + (el as HTMLElement).offsetHeight;
          if (
            window.scrollY + window.innerHeight / 2 >= offsetTop &&
            window.scrollY + window.innerHeight / 2 < offsetBottom
          ) {
            setActive(link.href);
            found = true;
          }
        }
      });
      if (!found) setActive("");
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-8 left-0 w-full z-50 flex justify-center">
      <nav className="flex items-center gap-6 border border-[#2E2E2E] rounded-full overflow-hidden bg-[#1B1B1B]/90 backdrop-blur-md px-6">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/images/cifras-icon-inverted.png"
            alt="Cifra's Pizza Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>

        {/* Links */}
        <div className="flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`px-8 py-4 transition-colors text-sm font-bold ${
                active === link.href ? "text-[#CEAE7B]" : "text-white"
              } hover:text-[#CEAE7B]`}
            >
              {link.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
