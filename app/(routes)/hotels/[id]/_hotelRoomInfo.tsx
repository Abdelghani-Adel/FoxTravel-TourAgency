"use client";
import ImageGallerySwiperCards from "@/app/_components/ImageGallerySwiperCards/ImageGallerySwiperCards";
import FoxCardRating from "@/app/_components/cards/FoxCard/FoxCardRating";
import MyModal from "@/app/_components/ui/MyModal";
import { useState } from "react";
import { IoIosCheckmark } from "react-icons/io";
import { v4 } from "uuid";

const HotelRoomInfo = ({ room }: { room: any }) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <>
      <button className="foxBtn mainBtn smBtn w-100" onClick={() => setIsShown(true)}>
        More Info
      </button>

      <MyModal show={isShown} onClose={() => setIsShown(false)}>
        <div className="p-4 bg-white rounded-3">
          <div className="container">
            <div className="mb-3 bgSecondary p-2 rounded-3">
              <h3 className="text-white">Twin Room with sea view</h3>
            </div>

            <div className="row text-start">
              <div className="col-4">
                <div style={{ height: "40vh" }}>
                  <ImageGallerySwiperCards images={room.images} />
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
      </MyModal>
    </>
  );
};

export default HotelRoomInfo;
