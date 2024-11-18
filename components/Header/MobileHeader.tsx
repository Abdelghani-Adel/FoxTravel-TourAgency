import useHeaderStyle from "@/hooks/useHeaderStyle";
import Image from "next/image";
import { useState } from "react";
import MenuBtn from "../MenuBtn";
import MobileMenu from "./MobileMenu";

const MobileHeader = () => {
  const headerClass = useHeaderStyle();
  const [isShown, setIsShown] = useState(false);
  const toggleMenu = () => setIsShown(!isShown);

  return (
    <header className={headerClass}>
      <div className="w-1/3">
        <Image src="/img/logo-white.png" alt="Fox Travel Egypt" width={3608} height={1275} />
      </div>
      <MenuBtn onClick={toggleMenu} />

      <MobileMenu onClose={() => setIsShown(false)} isShown={isShown} />
    </header>
  );
};

export default MobileHeader;
