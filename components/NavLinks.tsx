import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type IProps = {
  activeClass: string;
  hoverClass: string;
  defaultClass?: string;
  onNavClick?: () => void;
};

const NavLinks = (props: IProps) => {
  const pathname = usePathname();
  const { activeClass, hoverClass, defaultClass, onNavClick } = props;

  const activeLink = (name: string) => {
    return pathname === name ? activeClass : "";
  };

  return (
    <>
      <Link
        href="/"
        className={`no-underline text-inherit ${hoverClass} ${defaultClass} transition ${activeLink(
          "/"
        )}`}
        onClick={onNavClick}
      >
        Home
      </Link>

      <Link
        href="/hotels"
        className={`no-underline text-inherit ${hoverClass} ${defaultClass} transition ${activeLink(
          "/hotels"
        )}`}
        onClick={onNavClick}
      >
        Hotels
      </Link>

      <Link
        href="/packages"
        className={`no-underline text-inherit ${hoverClass} ${defaultClass} transition ${activeLink(
          "/packages"
        )}`}
        onClick={onNavClick}
      >
        Packages
      </Link>

      <Link
        href="/tours"
        className={`no-underline text-inherit ${hoverClass} ${defaultClass} transition ${activeLink(
          "/tours"
        )}`}
        onClick={onNavClick}
      >
        Tours
      </Link>

      <Link
        href="/contact"
        className={`no-underline text-inherit ${hoverClass} ${defaultClass} transition ${activeLink(
          "/contact"
        )}`}
        onClick={onNavClick}
      >
        Contact
      </Link>
    </>
  );
};

export default NavLinks;
