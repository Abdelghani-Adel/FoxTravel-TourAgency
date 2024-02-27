import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import styles from "./ImageGalleryImageCards.module.css";
import Image from "next/image";
import Modal from "../ui/Modal";
import ModalTrigger from "../ui/ModalTrigger";

const images = [
  "/img/hotelDetails/1.png",
  "/img/hotelDetails/2.png",
  "/img/hotelDetails/4.png",
  "/img/hotelDetails/5.png",
  "/img/hotelDetails/1.png",
  "/img/hotelDetails/2.png",
  "/img/hotelDetails/4.png",
  "/img/hotelDetails/5.png",
  "/img/hotelDetails/1.png",
  "/img/hotelDetails/2.png",
  "/img/hotelDetails/4.png",
  "/img/hotelDetails/5.png",
];

const ImageGallerySwiperCards = () => {
  const [clickedImage, setClickedImage] = useState("");

  return (
    <>
      <Swiper effect={"cards"} grabCursor={true} modules={[EffectCards]} className={styles.swiper}>
        {images.map((image, i) => (
          <SwiperSlide key={i} className={styles.swiperSlide}>
            <div className={styles.imgWrapper} onClick={() => setClickedImage(image)}>
              <ModalTrigger modalId="PhotoGallery">
                <Image fill src={image} alt="" />
              </ModalTrigger>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Modal id="PhotoGallery">
        <div className={styles.modalWrapper}>
          <div className={styles.modalImageWrapper}>
            <Image fill src={clickedImage ? clickedImage : ""} alt="" />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ImageGallerySwiperCards;
