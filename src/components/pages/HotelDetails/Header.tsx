import { useAppSelector } from "@/src/redux/store";
import React from "react";
import { CiLocationOn } from "react-icons/ci";

const Header = () => {
  const hotelDetails = useAppSelector((state) => state.hotelDetails);

  return (
    <div className="row justify-content-between mb-3">
      <div className="col-12 col-md-8">
        <h2 className="mb-1">{hotelDetails.name}</h2>
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
          <h6 className="mb-0">
            <span className="textGray">From </span>
            <span className="fw-bold">
              {hotelDetails?.price?.currency} {hotelDetails?.price?.amount}
            </span>
          </h6>

          <button className="btnAction">Select Room</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
