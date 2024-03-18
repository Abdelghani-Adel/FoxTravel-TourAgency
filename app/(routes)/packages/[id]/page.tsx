"use client";
import Itenrary from "./_itenrary";
import TransportaionLine from "./_transportaionLine";
import ImageGallerySwiperCards from "@/app/_components/ImageGallerySwiperCards/ImageGallerySwiperCards";
import RtsRating from "@/app/_components/ui/RtsRating";
import { useAppDispatch } from "@/app/_redux/store";
import packageDetails from "@/public/data/packageDetails.json";
import { FaXmark } from "react-icons/fa6";
import { GiCheckMark } from "react-icons/gi";
import { IoLocationOutline, IoTimeOutline } from "react-icons/io5";
import { SiYourtraveldottv } from "react-icons/si";

const Page = ({ params }: { params: { id: string } }) => {
  const dispatch = useAppDispatch();
  const packageId = params.id;

  return (
    <div className="container mt-4 mb-4">
      <div className="row mb-3">
        <div className="col-12 col-lg-8 order-2 order-lg-1">
          <div className="d-flex justify-content-between align-items-center flex-column gap-3 mb-2 flex-md-row">
            <h3 className="mb-0">{packageDetails.title}</h3>
            <button className="foxBtn secondBtn">Book this package</button>
          </div>

          <div className="d-flex justify-content-between align-item-center">
            <div>
              <span className="textGray fw-normal">
                <RtsRating readonly rating={4.5} /> (215)
              </span>
              <p className="mb-0 textGray fw-normal">
                {/* {packageDetails.duration} : {packageDetails.startDate} ~ {packageDetails.endDate} */}
              </p>
            </div>
            <p className="foxPrice">
              <span>{packageDetails.currency}</span>
              <span>{packageDetails.price}</span>
            </p>
          </div>

          <div className="d-flex gap-5 mb-4">
            <div className="d-flex align-items-center gap-3">
              <IoTimeOutline className="display-6 textSecondary" />
              <div>
                <h5 className="textSecondary">Duration</h5>
                <p className="textGray fw-normal">{packageDetails.duration}</p>
              </div>
            </div>

            <div className="d-flex align-items-center gap-3">
              <SiYourtraveldottv className="display-6 textSecondary" />
              <div>
                <h5 className="textSecondary">Package Type</h5>
                <p className="textGray fw-normal">Classical</p>
              </div>
            </div>

            <div className="d-flex align-items-center gap-3">
              <IoLocationOutline className="display-6 textSecondary" />
              <div>
                <h5 className="textSecondary">Location</h5>
                <p className="textGray fw-normal">Egypt</p>
              </div>
            </div>
          </div>

          <p className="textGray mb-2">{packageDetails.description}</p>

          <h5 className="textPrimary fw-bold mb-2">Transportation</h5>
          <div className="d-flex flex-md-column gap-2">
            {packageDetails?.transportation?.map((line: any, i: any) => (
              <TransportaionLine key={i} line={line} />
            ))}
          </div>

          {/* <PlaneTransport />
          <BusTransport /> */}
        </div>

        <div className="col-12 col-lg-4 order-1">
          <div className="hotelImageWrapper">
            <ImageGallerySwiperCards />
          </div>
        </div>
      </div>

      <div className="row mt-4 mb-4">
        <div className="col-12 col-md-6">
          <h5 className="textPrimary fw-bold mb-2">Included</h5>
          <div className="d-flex flex-column gap-2">
            <p>
              <GiCheckMark className="text-success me-2" />{" "}
              <span className="fw-light">Nights’ accommodation in Cairo with breakfast.</span>
            </p>
            <p>
              <GiCheckMark className="text-success me-2" />{" "}
              <span className="fw-light">
                Nights accommodation on board Nile Cruise on full board basis.
              </span>
            </p>
            <p>
              <GiCheckMark className="text-success me-2" />{" "}
              <span className="fw-light">
                Nights’ accommodation in Sleeping train on half board.
              </span>
            </p>
            <p>
              <GiCheckMark className="text-success me-2" />{" "}
              <span className="fw-light">Full days in Cairo with lunch.</span>
            </p>
            <p>
              <GiCheckMark className="text-success me-2" />{" "}
              <span className="fw-light">Meet and assist.</span>
            </p>
            <p>
              <GiCheckMark className="text-success me-2" />{" "}
              <span className="fw-light">All Meals Mentioned on the itinerary.</span>
            </p>
            <p>
              <GiCheckMark className="text-success me-2" />{" "}
              <span className="fw-light">All entrance fees for the above-mentioned tours.</span>
            </p>
          </div>
        </div>

        <div className="col-12 col-md-6">
          <h5 className="textPrimary fw-bold mb-2">Excluded</h5>
          <div className="d-flex flex-column gap-2">
            <p>
              <FaXmark className="text-danger me-2" />{" "}
              <span className="fw-light">Any items not mentioned in the above itinerary.</span>
            </p>
            <p>
              <FaXmark className="text-danger me-2" />{" "}
              <span className="fw-light">
                Any items of personal nature such as drinks, laundry etc.
              </span>
            </p>
            <p>
              <FaXmark className="text-danger me-2" />{" "}
              <span className="fw-light">
                Tips of any kind to those who serve you during your trip.
              </span>
            </p>
            <p>
              <FaXmark className="text-danger me-2" />{" "}
              <span className="fw-light">Egypt’s entry visa.</span>
            </p>
          </div>
        </div>
      </div>

      <Itenrary />
      <Itenrary />
      <Itenrary />
      <Itenrary />
    </div>
  );
};

export default Page;
