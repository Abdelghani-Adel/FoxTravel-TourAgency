import Image from "next/image";
import Link from "next/link";
import React from "react";

const TripCard = (props: ITripCardProps) => {
  const { id, title, address, image, rating, reviewers, price, currency, badges, duration } = props;

  return (
    <Link href={`#`} className="hotelCard">
      <div className="hotelCard_img">
        <Image fill src={image} alt="" />
      </div>

      <div className="hotelCard_badges">
        {badges &&
          badges.length > 0 &&
          badges.map((badge) => (
            <p key={badge.id} className={`hotelBadge ${badge.badgeType}`}>
              {badge.badgeTitle}
            </p>
          ))}
      </div>

      <p className="fw-light mb-0">{duration}</p>

      <h5 className="hotelCard_name">{title}</h5>
      <p className="hotelCard_address">{address}</p>

      <div className="d-flex justify-content-between align-items-center">
        <div>
          <p className="rating mb-0">
            <span className="fw-normal">{rating}</span>{" "}
            <span className="fw-light">({reviewers}) reviews</span>
          </p>
          <p className="reviewers mb-0"></p>
        </div>

        <p className="hotelCard_bottomPrice mb-0">
          <strong>Starting From</strong> <span className="currency">{currency}</span>
          <span className="price">{price}</span>
        </p>
      </div>

      {/* <div className="hotelCard_rating">
        <p className="rating">{rating}</p>
        <p className="reviewers">{reviewers} reviews</p>
      </div>

      <p className="hotelCard_bottomPrice">
        <strong>Starting From</strong> <span className="currency">{currency}</span>
        <span className="price">{price}</span>
      </p> */}
    </Link>
  );
};

export default TripCard;
