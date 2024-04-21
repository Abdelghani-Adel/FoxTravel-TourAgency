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

const HotelCard = (props: IHotelCardProps) => {
  const { id, title, address, image, rating, reviewers, price, currency, badges } = props;
  const encryptedId = encrypt(`${id}`);
  const url = `/hotels/${encryptedId}`;

  return (
    <Link href={url} className="foxCard">
      <div className="foxCard_img">
        <Image fill src={image} alt="" />
      </div>

      <FoxCardBadges badges={badges} />
      <h5 className="cardTitle">{title}</h5>
      <p className="foxCard_desc">{address}</p>
      <p className="foxCard_desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore placeat impedit dolorum
        repudiandae repellendus nesciunt aut praesentium consequatur abss.
      </p>

      <p>
        <FoxCardRating rating={rating} reviews={reviewers} />
      </p>

      <h5>
        <FoxCardPrice price={price} curr={currency} />
      </h5>

      <button className="foxBtn secondBtn w-100">Discover More</button>
    </Link>
  );
};

export default HotelCard;
