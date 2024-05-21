"use client";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./ImageGalleryImageCards.module.css";
import { v4 } from "uuid";

type IProps = {
  images: string[];
};

const ImageGallerySwiperCards = (props: IProps) => {
  const { images } = props;

  if (!images) {
    return null;
  }

  return (
    <>
      <Swiper effect={"cards"} grabCursor={true} modules={[EffectCards]} className={styles.swiper}>
        {images.map((image) => (
          <SwiperSlide key={v4()} className={styles.swiperSlide}>
            <div className={styles.imgWrapper}>
              <Image fill src={image} alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* <Modal id="PhotoGallery">
        <div className={styles.modalWrapper}>
          <div className={styles.modalImageWrapper}>
            <Image fill src={clickedImage ? clickedImage : ""} alt="" />
          </div>
        </div>
      </Modal> */}
    </>
  );
};

export default ImageGallerySwiperCards;
