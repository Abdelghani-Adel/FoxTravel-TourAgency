import Image from "next/image";
import React from "react";
import DesktopNav from "./DesktopNav";
import LanguageSelector from "./LanguageSelector";
import CurrencySelector from "./CurrencySelector";
import useHeaderStyle from "@/hooks/useHeaderStyle";

const DesktopHeader = () => {
  const headerClass = useHeaderStyle();

  return (
    <header className={headerClass}>
      <div className="flex items-center space-x-4">
        <div className="w-24 xl:w-1/12">
          <Image src="/img/logo-white.png" alt="Fox Travel Egypt" width={3608} height={1275} />
        </div>
        <DesktopNav />
      </div>

      <div className="flex items-center space-x-4 text-sm">
        <LanguageSelector />
        <CurrencySelector />
      </div>
    </header>
  );
};

export default DesktopHeader;
