import React, { useState } from "react";
import data from "@/public/data/TransferCards.json";
import { LuBaggageClaim } from "react-icons/lu";
import { FaCheck, FaSuitcase } from "react-icons/fa6";
import Image from "next/image";
import FoxCardBadges from "./FoxCard/FoxCardBadges";
import MyModal from "../ui/MyModal";
import { v4 } from "uuid";
import { MdNotListedLocation } from "react-icons/md";

const TransferCard = () => {
  const carInfo = data[0];
  const [moreInfoShown, setMoreInfoShown] = useState(false);

  return (
    <div className="transferCard">
      <div className="carImage">
        <Image src={carInfo.img} alt="CAR" fill />
      </div>
      <FoxCardBadges badges={carInfo.badges} />

      <div className="carInfo">
        <div>
          <h2>{carInfo.title}</h2>
          <p>Duration : {carInfo.duration}</p>

          <p className="d-flex gap-5">
            <span className="d-flex gap-2 align-items-center">
              <LuBaggageClaim /> {carInfo.luggages}
            </span>
            <span className="d-flex gap-2 align-items-center">
              <FaSuitcase /> {carInfo.bags}
            </span>
          </p>
        </div>

        <button className="foxBtn mainBtn smBtn" onClick={() => setMoreInfoShown(true)}>
          More Info
        </button>
        <MyModal show={moreInfoShown} onClose={() => setMoreInfoShown(false)}>
          <div className="p-3 d-flex flex-column gap-3">
            <div className="d-flex flex-column gap-2">
              {carInfo.includes.map((item) => (
                <p key={v4()} className="fw-normal">
                  <FaCheck className="text-success me-2" />
                  {item}
                </p>
              ))}
            </div>

            <div className="d-flex flex-column gap-2">
              {carInfo.notes.map((item) => (
                <p key={v4()} className="fw-light">
                  <MdNotListedLocation className="text-secondary me-2" />
                  {item}
                </p>
              ))}
            </div>
          </div>
        </MyModal>
      </div>

      <div className="carPrice">
        <h2 className="fw-bolder">
          {carInfo.currency}
          {carInfo.price}
        </h2>
        <button className="foxBtn thirdBtn">Choose</button>
      </div>
    </div>
  );
};

export default TransferCard;
