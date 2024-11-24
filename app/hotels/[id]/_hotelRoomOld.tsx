import React from "react";
import ImageGallerySwiperCards from "@/components/ImageGallerySwiperCards/ImageGallerySwiperCards";
import { FcAdvance } from "react-icons/fc";
import RtsRating from "@/components/ui/RtsRating";

type props = {
  room: any;
};

const HotelRoomOld = (props: props) => {
  const { room } = props;

  return (
    <div className="hotelRoom">
      <div className="roomHeader">
        <h5 className="mb-0">{room.roomType}</h5>
        <h6 className="roomRating mb-0">
          <RtsRating readonly={true} rating={room.reviews.averageRating} />{" "}
          <span className="fw-light">( {room.reviews.totalReviews} )</span>
        </h6>
      </div>

      <div className="container">
        <div className="row gy-3">
          <div className="col-12 col-md-6 col-lg-6 col-xl-4 col-xxl-3">
            <div className="hotelRoom_gallery">
              <div className="hotelRoom_imgWrapper">
                {/* <ImageGallerySwiperCards /> */}
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-xl-5 col-xxl-6 fw-light">
            <h5 className="fw-normal">Features</h5>
            <div className="row g-2 mb-4">
              {room.benefits.map((benefit: any, i: number) => (
                <div key={i} className="col-6">
                  <FcAdvance /> {benefit.title}
                </div>
              ))}
            </div>

            <h5 className="fw-normal">Additional Info</h5>
            <div className="row g-2 mb-4">
              {room.additionalInfo.map((info: any, i: number) => (
                <div key={i} className="col-12">
                  <h6 className="fw-light">
                    <span className="fw-normal">{info.title} : </span>
                    <span>{info.info}</span>
                  </h6>
                </div>
              ))}
            </div>
          </div>

          <div className="col-12 col-xl-3 bg-light p-3">
            <div className="d-flex justify-content-around">
              <h4 className="fw-light">{room.beds} beds for</h4>
              <h4>
                {room.price.currency} {room.price.amount}
              </h4>
            </div>
            <button className="btnAction w-100">Reserve Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelRoomOld;
