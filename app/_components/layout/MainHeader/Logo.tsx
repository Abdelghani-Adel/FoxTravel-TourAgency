import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/" className="logo">
      <Image src="/img/logo.png" alt="logo" width={150} height={57} />
    </Link>
  );
};

export default Logo;
