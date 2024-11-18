import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

function DesktopNav() {
  return (
    <nav className="hidden xl:flex space-x-6 text-lg">
      <DesktopNavItem href="/" label="home" />
      <DesktopNavItem href="/hotels" label="hotels" />
      <DesktopNavItem href="/packages" label="packages" />
      <DesktopNavItem href="/tours" label="tours" />
      <DesktopNavItem href="/contact" label="contact" />
    </nav>
  );
}

type INavItemProps = {
  href: string;
  label: string;
};

function DesktopNavItem(props: Readonly<INavItemProps>) {
  const pathName = usePathname();
  const isActive = pathName === props.href;

  return (
    <Link
      href={props.href}
      className={`no-underline text-gray-400 font-normal hover:text-white transition-all capitalize ${
        isActive ? "text-white" : ""
      }`}
    >
      {props.label}
    </Link>
  );
}

export default DesktopNav;
