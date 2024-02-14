import Image from "next/image";
import React from "react";

const FoxCardImage = ({ image, className }: { image: string; className?: string }) => {
  return (
    <div className={`foxCard_img ${className ? className : ""}`}>
      <Image fill src={image} alt="" />
    </div>
  );
};

export default FoxCardImage;
