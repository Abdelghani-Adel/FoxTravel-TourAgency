import FoxCardRating from "@/app/_components/cards/FoxCard/FoxCardRating";
import ImageGallerySwiperCards from "@/app/_components/ImageGallerySwiperCards/ImageGallerySwiperCards";
import Modal from "@/app/_components/ui/Modal";
import ModalTrigger from "@/app/_components/ui/ModalTrigger";
import React, { useState } from "react";
import { IoIosCheckmark } from "react-icons/io";
import { v4 } from "uuid";
import Overview from "./_overview";

const HotelRoomInfo = ({ room }: { room: any }) => {
  return (
    <>
      <ModalTrigger modalId="hotelRoomDetails">
        <button className="foxBtn mainBtn smBtn w-100">More Info</button>
      </ModalTrigger>

      <Modal id="hotelRoomDetails">
        <div className="p-4">
          <div className="container">
            <div className="mb-3 bgSecondary p-2 txtWhite rounded-3">
              <h3>Twin Room with sea view</h3>
            </div>

            <div className="row text-start">
              <div className="col-4">
                <div style={{ height: "40vh" }}>
                  <ImageGallerySwiperCards />
                </div>
              </div>

              <div className="col-1"></div>

              <div className="col-7">
                <h5>Room Description</h5>
                <p className="fw-light mb-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis consequatur
                  sapiente sunt saepe ab. Quam quis ipsum et reiciendis vitae.
                </p>

                <h5>Room Includes</h5>
                <div className="d-flex gap-1 flex-wrap fw-light mb-3">
                  {room.includes?.map((item: any) => (
                    <span key={v4()}>
                      <IoIosCheckmark /> {item}
                    </span>
                  ))}
                </div>

                <div className="d-flex justify-content-between">
                  <FoxCardRating rating={4.5} reviews={12} />
                  <button className="foxBtn secondBtn">Reserve Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default HotelRoomInfo;
