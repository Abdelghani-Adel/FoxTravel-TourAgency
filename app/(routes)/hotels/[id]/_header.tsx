import { useAppSelector } from "@/app/_redux/store";
import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { GrShareOption } from "react-icons/gr";
import { IoIosHeartEmpty } from "react-icons/io";

const Header = () => {
  const hotelDetails = useAppSelector((state) => state.hotelDetails);

  return (
    <div className="row justify-content-between">
      <div className="col-12 col-md-8">
        <h2 className="mb-1 fw-bolder">{hotelDetails.name}</h2>
        <p>
          <span className="textGray fw-light me-3">
            <CiLocationOn className="me-1" />
            {hotelDetails?.location?.address}
          </span>
          <a href="/">Show on map</a>
        </p>
      </div>

      <div className="col-12 col-md-4">
        <div className="d-flex flex-column flex-lg-row justify-content-end align-items-lg-center gap-3">
          <IoIosHeartEmpty className="fs-4" />
          <GrShareOption className="fs-4" />
          <button className="foxBtn mainBtn">
            <a href="#hotelPrices">Select Room</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
