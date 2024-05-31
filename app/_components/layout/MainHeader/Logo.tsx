import Image from "next/image";
import Link from "next/link";
import React from "react";
import Navigate from "../../ui/MyLink";

const Logo = () => {
  return (
    <Navigate href="/" className="logo">
      <Image src="/img/logo.png" alt="logo" width={150} height={57} />
    </Navigate>
  );
};

export default Logo;
