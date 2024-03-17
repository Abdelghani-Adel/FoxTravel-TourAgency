import Image from "next/image";
import React from "react";
import icon from "./person.webp";

const PersonIcon = () => {
  return <Image src={icon} width={20} height={20} alt="" />;
};

export default PersonIcon;
