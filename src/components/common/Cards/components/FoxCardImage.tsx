import Image from "next/image";
import React from "react";

const FoxCardImage = ({ image }: { image: string }) => {
  return (
    <div className="foxCard_img">
      <Image fill src={image} alt="" />
    </div>
  );
};

export default FoxCardImage;
