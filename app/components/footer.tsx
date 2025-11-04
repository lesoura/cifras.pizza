"use client";

export default function Footer() {
  return (
    <footer className="w-full py-6 bg-black/95 text-center text-gray-400 text-sm">
      © {new Date().getFullYear()} Cifra’s Pizza. All rights reserved.
    </footer>
  );
}
