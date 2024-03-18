import Image from "next/image";
import React from "react";
import arrowDown from "./arrow.png";

const ArrowIcon = () => {
  return <Image src={arrowDown} width={18} height={18} alt="" />;
};

export default ArrowIcon;
