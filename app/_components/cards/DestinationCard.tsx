import { loaderActions } from "@/app/_redux/slices/loaderSlice";
import { useAppDispatch } from "@/app/_redux/store";
import { encrypt } from "@/app/_utils/Cryptojs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const DestinationCard = (props: IDestinationCardProps) => {
  const dispatch = useAppDispatch();
  const { id, img, title, hotels, cars, trips, activities } = props;
  const encryptedId = encrypt(`${id}`);
  const url = `/destinations/${encryptedId}`;

  const onNavigate = () => dispatch(loaderActions.showLoadingOverlay());

  return (
    <div className="destinationCard">
      <Link href={url} onClick={onNavigate}>
        <div className="destinationCard_bg">
          <Image fill src={img} alt="" />
        </div>

        <div className="destinationCard_header">
          <p className="destinationCard_desc">
            {hotels ? `${hotels} Hotels - ` : ""}
            {cars ? `${cars} Cars - ` : ""}
            {trips ? `${trips} Trips - ` : ""}
            {activities ? `${activities} Activities` : ""}
          </p>
        </div>

        <div className="destinationCard_footer">
          <h3 className="destinationCard_name">{title}</h3>
          <button className="destinationCard_btn">Discover</button>
        </div>
      </Link>
    </div>
  );
};

export default DestinationCard;
