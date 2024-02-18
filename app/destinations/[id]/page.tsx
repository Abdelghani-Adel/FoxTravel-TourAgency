"use client";
import HotelCard from "@/src/components/Cards/HotelCard";
import TourCard from "@/src/components/Cards/TourCard";
import ImageGallerySwiperCards from "@/src/components/ImageGallerySwiperCards/ImageGallerySwiperCards";
import SwiperScroll from "@/src/components/ui/SwiperScroll";
import useHideLoadingLayer from "@/src/hooks/loadingLayer";
import { useAppSelector } from "@/src/redux/store";
import Cars from "@/src/routes/home/Cars";
import Hotels from "@/src/routes/home/Hotels";
import Tours from "@/src/routes/home/Tours";
import parse from "html-react-parser";
import { GoArrowUpRight } from "react-icons/go";

const Page = ({ params }: { params: { id: string } }) => {
  useHideLoadingLayer();
  const details = useAppSelector((state) => state.destinationDetails);

  return (
    <div className="container mt-4 mb-5">
      <div className="row">
        <div className="col-12 col-lg-8 order-2 order-lg-1">
          <div className="destinationDetails_header">
            <h1>
              <span className="fw-light">Explore</span> {details.destinationName}
            </h1>
            <p className="mb-0 fw-light">Explore deals, travel guides and things to do in London</p>
          </div>

          <h4>What to know before visiting {details.destinationName}</h4>
          <div className="row mt-2">
            {details.generalInfo.map((info, i) => (
              <div key={i} className="col-6 col-md-3">
                <p className="mb-0 fw-light">{info.title}</p>
                <p className="mb-0 fw-normal">{info.info}</p>
                <p className="mb-0 fw-light">{info.desc}</p>
              </div>
            ))}
          </div>

          <div className="fw-light">
            {parse(details.description ? details.description : "<p></p>")}
          </div>
        </div>

        <div className="col-12 col-lg-4 order-1">
          <div className="hotelImageWrapper">
            <ImageGallerySwiperCards />
          </div>
        </div>
      </div>

      <Hotels />
      <Cars />
      <Tours />
    </div>
  );
};

export default Page;
