"use client";

import { encrypt } from "@/src/utils/Cryptojs";
import FoxCard from "./FoxCard/FoxCard";
import FoxCardBadges from "./FoxCard/FoxCardBadges";
import FoxCardImage from "./FoxCard/FoxCardImage";
import FoxCardPrice from "./FoxCard/FoxCardPrice";
import FoxCardRating from "./FoxCard/FoxCardRating";
import FoxCardTitle from "./FoxCard/FoxCardTitle";

const HotelCard = (props: IHotelCardProps) => {
  const { id, title, address, image, rating, reviewers, price, currency, badges } = props;
  const encryptedId = encrypt(`${id}`);
  const url = `/hotels/${encryptedId}`;

  return (
    <FoxCard url={url}>
      <FoxCardImage image={image} />
      <FoxCardBadges badges={badges} />
      <FoxCardTitle title={title} />

      <p className="fw-light mb-2">{address}</p>

      <div className="mb-2">
        <FoxCardRating rating={rating} reviews={reviewers} />
      </div>
      <FoxCardPrice price={price} curr={currency} />
    </FoxCard>
  );
};

export default HotelCard;
