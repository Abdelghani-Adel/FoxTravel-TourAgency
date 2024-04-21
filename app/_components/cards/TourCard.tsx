"use client";

import { encrypt } from "@/app/_utils/Cryptojs";
import FoxCard from "./FoxCard/FoxCard";
import FoxCardBadges from "./FoxCard/FoxCardBadges";
import FoxCardImage from "./FoxCard/FoxCardImage";
import FoxCardPrice from "./FoxCard/FoxCardPrice";
import FoxCardRating from "./FoxCard/FoxCardRating";
import FoxCardTitle from "./FoxCard/FoxCardTitle";
import Link from "next/link";
import Image from "next/image";

const TourCard = (props: ITripCardProps) => {
  const { id, title, address, image, rating, reviews, price, currency, badges, duration } = props;

  const encryptedId = encrypt(id.toString());
  const url = `/tours/${encryptedId}`;

  return (
    <Link href={url} className="foxCard">
      <div className="foxCard_img">
        <Image fill src={image} alt="" />
      </div>

      <FoxCardBadges badges={badges} />

      <h5 className="foxCard_title">{title}</h5>

      <p className="foxCard_desc">{address}</p>

      <p className="fw-normal txtGray">{duration} . Private and Luxury</p>

      <p className="foxCard_desc">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit veritatis vero ipsum illum,
        porro fugiat dolorum molestiae distinctio quaerat aperiam.
      </p>

      <p>
        <FoxCardRating rating={rating} reviews={reviews} />
      </p>

      <p>
        <FoxCardPrice price={price} curr={currency} />
      </p>

      <button className="foxBtn secondBtn w-100">Discover More</button>
    </Link>
  );
};

export default TourCard;
