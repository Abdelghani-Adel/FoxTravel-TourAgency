"use client";

import { loaderActions } from "@/src/redux/slices/loaderSlice";
import { useAppDispatch } from "@/src/redux/store";
import { encrypt } from "@/src/utils/Cryptojs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import FoxCard from "./components/FoxCard";
import FoxCardImage from "./components/FoxCardImage";
import FoxCardBadges from "./components/FoxCardBadges";
import FoxCardTitle from "./components/FoxCardTitle";
import FoxCardRating from "./components/FoxCardRating";
import FoxCardPrice from "./components/FoxCardPrice";

const HotelCard = (props: IHotelCardProps) => {
  const dispatch = useAppDispatch();
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
