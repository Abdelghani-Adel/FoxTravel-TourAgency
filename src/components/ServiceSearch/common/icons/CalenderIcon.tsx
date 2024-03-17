import Image from "next/image";
import React from "react";
import icon from "./calendar.png";

const CalenderIcon = () => {
  return <Image src={icon} width={20} height={20} alt="" />;
};

export default CalenderIcon;
