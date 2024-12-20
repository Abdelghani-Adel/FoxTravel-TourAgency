"use client";

import { encrypt } from "@/utils/Cryptojs";
import Image from "next/image";
import Link from "next/link";
import FoxCardBadges from "./FoxCard/FoxCardBadges";
import FoxCardPrice from "./FoxCard/FoxCardPrice";
import FoxCardRating from "./FoxCard/FoxCardRating";
import Navigate from "../ui/Navigate";

type props = {
  data: ITour;
};

const TourCard = (props: props) => {
  const {
    serviceId,
    title,
    address,
    img,
    rating,
    reviews,
    price,
    badges,
    duration,
    descrption,
    currency,
  } = props.data;

  const encryptedId = encrypt(serviceId.toString());
  const url = `/tours/${encryptedId}`;

  return (
    <Navigate href={url} className="foxCard">
      <div className="foxCard_img">
        <Image fill src={img} alt="" />
      </div>

      <FoxCardBadges badges={badges} />

      <h5 className="foxCard_title">{title}</h5>

      <p className="foxCard_desc">{address}</p>

      <p className="fw-normal txtGray">{duration}</p>

      <p className="foxCard_desc">{descrption}</p>

      <FoxCardRating rating={rating} reviews={reviews} />

      <FoxCardPrice price={price} curr={currency} />

      <button className="foxBtn secondBtn w-100">Discover More</button>
    </Navigate>
  );
};

export default TourCard;
