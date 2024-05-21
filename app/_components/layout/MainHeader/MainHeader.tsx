"use client";
import { useEffect, useState } from "react";
import BtnTogglerArrowLeft from "@/app/_components/ui/BtnTogglerArrowLeft";
import HeaderActions from "./HeaderActions";
import LogoWhite from "./LogoWhite";
import MobileMenu from "./MobileMenu";
import Navigation from "./Navigation";
import { usePathname } from "next/navigation";
// import useBackButtonDetect from "@/app/_hooks/useBackButtonDetect";

const MainHeader = () => {
  // useBackButtonDetect();

  const pathRoute = usePathname();
  const [mobileMenuShown, setMobileMenuShown] = useState(false);
  const [isHeaderSticky, setIsHeaderSticky] = useState(false);

  const toggleMobileMenu = () => setMobileMenuShown((prev) => !prev);
  const closeMobileMenu = () => setMobileMenuShown(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const isScrollingDown = scrollPosition > window.innerHeight * 0.06;
      setIsHeaderSticky(isScrollingDown);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`mainHeader ${isHeaderSticky ? "sticky" : ""} ${
        pathRoute === "/" ? "absoluteHeader" : ""
      }`}
    >
      <div className="mainHeader_inner fw-light">
        <LogoWhite />

        <div className="d-none d-lg-block">
          <Navigation />
        </div>

        <div className="d-none d-lg-block ms-auto">
          <HeaderActions />
        </div>

        <div className="d-lg-none ms-auto">
          <MobileMenu isShown={mobileMenuShown} closeMenu={closeMobileMenu} />
          <BtnTogglerArrowLeft onClick={toggleMobileMenu} />
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
