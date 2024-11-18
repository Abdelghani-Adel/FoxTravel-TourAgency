import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

const MobileMenu = ({ isShown, onClose }: { isShown: boolean; onClose: () => void }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen bg-white z-10 transform transition-transform duration-300 ${
        isShown ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center h-[10vh] px-3">
        <div className="w-1/3">
          <Image src="/img/logo.png" alt="Fox Travel Egypt" width={3608} height={1275} />
        </div>

        <CloseBtn onClick={onClose} />
      </div>

      <nav className="flex flex-col text-lg" onClick={onClose} role="presentation">
        <MobileNavItem href="/" label="home" />
        <MobileNavItem href="/hotels" label="hotels" />
        <MobileNavItem href="/packages" label="packages" />
        <MobileNavItem href="/tours" label="tours" />
        <MobileNavItem href="/contact" label="contact" />
      </nav>
    </div>
  );
};

function CloseBtn({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="relative flex items-center justify-center w-10 h-10 bg-gray-200 border-2 border-[#f36c24] rounded-lg transition duration-300 ease-in-out"
    >
      <span className="absolute bg-[#f36c24] w-5 h-[3px] rounded-sm rotate-45" />
      <span className="absolute bg-[#f36c24] w-5 h-[3px] rounded-sm -rotate-45" />
    </button>
  );
}

type INavItemProps = {
  href: string;
  label: string;
};

function MobileNavItem(props: Readonly<INavItemProps>) {
  const pathName = usePathname();
  const isActive = pathName === props.href;

  return (
    <Link
      href={props.href}
      className={`no-underline text-gray-400 font-normal hover:bg-black hover:text-white transition-all capitalize px-4 py-2 ${
        isActive ? "bg-black text-white" : ""
      }`}
    >
      {props.label}
    </Link>
  );
}

export default MobileMenu;
