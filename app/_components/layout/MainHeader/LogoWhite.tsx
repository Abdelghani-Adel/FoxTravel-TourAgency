import Image from "next/image";
import Link from "next/link";
import React from "react";

const LogoWhite = () => {
  return (
    <Link href="/" className="logo">
      <Image src="/img/logo-white.png" alt="logo" width={150} height={57} />
    </Link>
  );
};

export default LogoWhite;
