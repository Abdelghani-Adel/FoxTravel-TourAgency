import Image from "next/image";
import React from "react";
import personIcon from "../common/icons/person.webp";

const PersonIcon = () => {
  return <Image src={personIcon} width={20} height={20} alt="" />;
};

export default PersonIcon;
