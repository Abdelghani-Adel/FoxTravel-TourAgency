import React from "react";
import Logo from "./Logo";
import BtnMenuCloseX from "@/components/ui/BtnMenuCloseX";
import Navigation from "./Navigation";

type props = {
  isShown: boolean;
  closeMenu: () => void;
};

const MobileMenu = (props: props) => {
  const { isShown, closeMenu } = props;
  return (
    <div className={`mobileMenu ${isShown ? "shown" : ""}`}>
      <div className="mobileMenu_header">
        <Logo />
        <BtnMenuCloseX onClick={closeMenu} />
      </div>

      <Navigation onItemClick={closeMenu} />

      <div className="mobileMenu_footer"></div>
    </div>
  );
};

export default MobileMenu;
