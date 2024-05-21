"use client";

import { encrypt } from "@/app/_utils/Cryptojs";
import Image from "next/image";
import Link from "next/link";
import FoxCardBadges from "./FoxCard/FoxCardBadges";
import FoxCardPrice from "./FoxCard/FoxCardPrice";
import FoxCardRating from "./FoxCard/FoxCardRating";

type props = {
  data: ITourCard;
};

const TourCard = (props: props) => {
  const { id, title, address, img, rating, reviews, price, badges, duration } = props.data;

  const encryptedId = encrypt(id.toString());
  const url = `/tours/${encryptedId}`;

  return (
    <Link href={url} className="foxCard">
      <div className="foxCard_img">
        <Image fill src={img} alt="" />
      </div>

      <FoxCardBadges badges={badges} />

      <h5 className="foxCard_title">{title}</h5>

      <p className="foxCard_desc">{address}</p>

      <p className="fw-normal txtGray">{duration} . Private and Luxury</p>

      <p className="foxCard_desc">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit veritatis vero ipsum illum,
        porro fugiat dolorum molestiae distinctio quaerat aperiam.
      </p>

      <FoxCardRating rating={rating} reviews={reviews} />

      <FoxCardPrice price={price} curr="$" />

      <button className="foxBtn secondBtn w-100">Discover More</button>
    </Link>
  );
};

export default TourCard;
