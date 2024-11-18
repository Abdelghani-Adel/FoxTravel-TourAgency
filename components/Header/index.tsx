"use client";
import useScreenWidth from "@/hooks/useScreenWidth";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";

const Header = () => {
  const screenSize = useScreenWidth();
  const isMobileView = screenSize < 1024;

  return isMobileView ? <MobileHeader /> : <DesktopHeader />;
};

export default Header;
