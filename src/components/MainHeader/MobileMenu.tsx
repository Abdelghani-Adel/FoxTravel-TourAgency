import React from "react";
import Logo from "./Logo";
import BtnMenuCloseX from "../ui/BtnMenuCloseX";

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

      <div className="mobileMenu_footer">footer</div>
    </div>
  );
};

export default MobileMenu;
