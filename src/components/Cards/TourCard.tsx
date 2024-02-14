"use client";

import { encrypt } from "@/src/utils/Cryptojs";
import FoxCard from "./FoxCard/FoxCard";
import FoxCardBadges from "./FoxCard/FoxCardBadges";
import FoxCardImage from "./FoxCard/FoxCardImage";
import FoxCardPrice from "./FoxCard/FoxCardPrice";
import FoxCardRating from "./FoxCard/FoxCardRating";
import FoxCardTitle from "./FoxCard/FoxCardTitle";

const TourCard = (props: ITripCardProps) => {
  const { id, title, address, image, rating, reviews, price, currency, badges, duration } = props;

  const encryptedId = encrypt(id.toString());
  const url = `tours/${encryptedId}`;

  return (
    <FoxCard url={url}>
      <FoxCardImage image={image} />
      <FoxCardBadges badges={badges} />

      <p className="fw-normal txtGray mb-0">{duration} . Private and Luxury</p>

      <FoxCardTitle title={title} />

      <p className="txtGray fw-normal">{address}</p>

      <div className="d-flex justify-content-between align-items-center">
        <FoxCardRating rating={rating} reviews={reviews} />

        <FoxCardPrice price={price} curr={currency} />
      </div>
    </FoxCard>
  );
};

export default TourCard;
