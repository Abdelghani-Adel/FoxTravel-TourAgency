"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

export default function useHeaderStyle() {
  const pathName = usePathname();
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const threshold = viewportHeight * 0.1; // 10vh

      // Update the scrolled state based on the threshold
      setScrolled(scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isHomeRoute = pathName === "/";
  const position = "fixed top-0 z-10";
  const bg = scrolled ? "bg-black" : "bg-transparent";
  const className = isHomeRoute && `${bg} ${position}`;

  return `h-[10vh] flex items-center border border-red justify-between px-6 py-4 duration-300 bg-black w-screen ${className} `;
}
