import Image from "next/image";
import Link from "next/link";
import React from "react";
import Navigate from "../../ui/MyLink";

const LogoWhite = () => {
  return (
    <Navigate href="/" className="logo">
      <Image src="/img/logo-white.png" alt="logo" width={150} height={57} />
    </Navigate>
  );
};

export default LogoWhite;
