import Image from "next/image";
import React from "react";

type props = {
  title: string;
};

const PageStripe = (props: props) => {
  return (
    <div className="relative h-64">
      <div className="absolute inset-0">
        <Image fill src="/img/hero-bg.webp" alt="" />
      </div>

      <h1 className="text-4xl font-bold text-center text-white">
        {props.title}
      </h1>
    </div>
  );
};

export default PageStripe;
