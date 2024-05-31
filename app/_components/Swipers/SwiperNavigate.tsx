"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import styles from "./SwiperNavigate.module.css";
import Image from "next/image";
import { v4 } from "uuid";

const SwiperNavigate = ({ images }: { images: string[] }) => {
  return (
    <Swiper navigation={true} modules={[Navigation]} className={styles.wrapper}>
      {images.map((image) => (
        <SwiperSlide className={styles.imageWrapper} key={v4()}>
          <Image src={image} fill alt="" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperNavigate;
