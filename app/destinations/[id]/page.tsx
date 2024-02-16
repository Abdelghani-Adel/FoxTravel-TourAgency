"use client";
import HotelCard from "@/src/components/Cards/HotelCard";
import TourCard from "@/src/components/Cards/TourCard";
import ImageGallerySwiperCards from "@/src/components/ImageGallerySwiperCards/ImageGallerySwiperCards";
import SwiperScroll from "@/src/components/ui/SwiperScroll";
import useHideLoadingLayer from "@/src/hooks/loadingLayer";
import { useAppSelector } from "@/src/redux/store";
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

      <div className="row mt-5">
        <div className="recommendedHotels_header">
          <div>
            <h3 className="fw-bold">Recommended Hotels</h3>
            <p className="mb-0">Our recommended hotels in {details.destinationName}</p>
          </div>

          <div>
            <button className="btn btn-warning">
              View All Hotels <GoArrowUpRight className="fs-3" />
            </button>
          </div>
        </div>

        <SwiperScroll>
          {details.hotels.map((hotel) => (
            <HotelCard
              key={hotel.id}
              id={hotel.id}
              title={hotel.title}
              image={hotel.image}
              address={hotel.address}
              rating={hotel.rating}
              reviewers={hotel.reviews}
              price={hotel.price}
              currency={hotel.currency}
              badges={hotel.badges}
            />
          ))}
        </SwiperScroll>
      </div>

      <div className="row mt-5">
        <div className="recommendedHotels_header">
          <div>
            <h3 className="fw-bold">Most popular tours</h3>
            <p className="mb-0">Our recommended tours in {details.destinationName}</p>
          </div>

          <div>
            <button className="btn btn-warning">
              View All Hotels <GoArrowUpRight className="fs-3" />
            </button>
          </div>
        </div>

        <SwiperScroll>
          {details.tours.map((tour) => (
            <TourCard
              key={tour.id}
              id={tour.id}
              title={tour.title}
              image={tour.image}
              address={tour.address}
              rating={tour.rating}
              reviews={tour.reviews}
              price={tour.price}
              currency={tour.currency}
              badges={tour.badges}
              duration={tour.duration}
            />
          ))}
        </SwiperScroll>
      </div>
    </div>
  );
};

export default Page;
