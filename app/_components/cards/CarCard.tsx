"use client";
import { encrypt } from "@/app/_utils/Cryptojs";
import { IoPerson } from "react-icons/io5";
import { LuBaggageClaim } from "react-icons/lu";
import { SiYamahamotorcorporation } from "react-icons/si";
import FoxCard from "./FoxCard/FoxCard";
import FoxCardBadges from "./FoxCard/FoxCardBadges";
import FoxCardImage from "./FoxCard/FoxCardImage";
import FoxCardPrice from "./FoxCard/FoxCardPrice";
import FoxCardRating from "./FoxCard/FoxCardRating";
import FoxCardTitle from "./FoxCard/FoxCardTitle";

const CarCard = (props: ICarCardProps) => {
  const { id, model, img, passengers, bags, transmission } = props;
  const { rating, reviews, badges, price, currency, duration } = props;

  const encryptedId = encrypt(id.toString());
  const url = `/cars/${encryptedId}`;

  return (
    <FoxCard url={url}>
      <FoxCardImage image={img} className="carCard_image" />

      <FoxCardBadges badges={badges} />

      <FoxCardTitle title={model} />
      <div className="d-flex justify-content-between px-2 mb-2 fw-light">
        <p className="mb-0">
          <IoPerson /> {passengers}
        </p>

        <p className="mb-0">
          <LuBaggageClaim /> {bags}
        </p>

        <p className="mb-0">
          <SiYamahamotorcorporation /> {transmission}
        </p>
      </div>

      <div className="mb-2">
        <FoxCardRating rating={rating} reviews={reviews} />
      </div>

      <div className="mb-2">
        <FoxCardPrice price={price} curr={currency} />
      </div>

      <p className="txtGray fw-normal">
        The duration for this price is <strong>{duration}</strong>
      </p>
    </FoxCard>
  );
};

export default CarCard;
