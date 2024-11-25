"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { FaWindowClose } from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri";
import { usePathname } from "next/navigation";
import Image from "next/image";
import NavLinks from "./NavLinks";

const TailwindHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    if (isHomePage) {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [isHomePage]);

  const headerClass = () => {
    if (isHomePage) {
      return isScrolled
        ? "bg-black fixed top-0 left-0 w-full transition-all duration-300"
        : "bg-transparent absolute top-0 left-0 w-full";
    }
    return "bg-black static";
  };

  return (
    <header className={`${headerClass()} z-50`}>
      <div className="p-3 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          {/* Logo */}
          <Link href="/" className="w-24 xl:w-36">
            <Image
              src="/img/logo-white.png"
              alt="Fox Travel Egypt"
              width={3608}
              height={1275}
            />
          </Link>

          {/* Navbar */}
          <nav className="hidden md:flex space-x-4 text-xl text-gray-300">
            <NavLinks activeClass="text-white" hoverClass="hover:text-white" />
          </nav>
        </div>

        {/* Action Buttons */}
        <div className="hidden md:flex space-x-4">
          <button className="bg-white text-black px-4 py-2 rounded">
            Login
          </button>
          <button className="bg-white text-black px-4 py-2 rounded">
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Toggler */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <RiMenu3Fill className="h-6 w-6" />
        </button>
      </div>

      <MobileMenu onClose={() => setIsMenuOpen(false)} isOpened={isMenuOpen} />
    </header>
  );
};

type IMobileMenuProps = {
  onClose: () => void;
  isOpened: boolean;
};

const MobileMenu = (props: IMobileMenuProps) => {
  const { isOpened, onClose } = props;

  const wrapperClass =
    "fixed z-50 inset-0 bg-gray-100 text-black flex flex-col transition-all duration-500";
  const activeClass = isOpened ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <div className={`${wrapperClass} ${activeClass}`}>
      <div className="flex items-center justify-between p-3">
        <Link href="/" className="w-24">
          <Image
            src="/img/logo.png"
            alt="Fox Travel Egypt"
            width={3608}
            height={1275}
          />
        </Link>

        <button className="h-10 w-10" onClick={onClose}>
          <FaWindowClose className="h-8 w-8" />
        </button>
      </div>

      <nav className="flex flex-col  text-2xl text-black">
        <NavLinks
          activeClass="bg-black text-white"
          hoverClass="hover:bg-black hover:text-white"
          defaultClass="p-3"
          onNavClick={onClose}
        />
      </nav>
    </div>
  );
};

export default TailwindHeader;
