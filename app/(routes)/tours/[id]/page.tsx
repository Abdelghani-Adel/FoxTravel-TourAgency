"use client";
import tourDetails from "@/public/data/Details_tour.json";
import SwiperNavigate from "@/app/_components/Swipers/SwiperNavigate";
import RtsRating from "@/app/_components/ui/RtsRating";
import useHideLoadingLayer from "@/app/_hooks/loadingLayer";
import { formatNumber } from "@/app/_utils/Formatters";
import { CiLocationOn } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";
import { GrGroup } from "react-icons/gr";
import { v4 } from "uuid";

const Page = ({ params }: { params: { id: string } }) => {
  useHideLoadingLayer();

  return (
    <div className="container mt-4 mb-4">
      <div className="row">
        <h3 className="mb-0">{tourDetails.title}</h3>

        <div className="d-flex gap-3">
          <span>
            <RtsRating rating={tourDetails.rating} readonly />
            <span className="txtGray fw-light"> ({formatNumber(tourDetails.totalReviews)})</span>
          </span>

          <span className="textGray fw-light">
            <CiLocationOn className="me-1" />
            {tourDetails.location}
          </span>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-9">
          <SwiperNavigate images={tourDetails.images} />
        </div>

        <div className="col-3">
          <p className="fs-2">
            Price: {tourDetails.price}
            {tourDetails.currency}
          </p>

          <div className="d-flex gap-5 mt-3">
            <div className="d-flex gap-1 align-items-end">
              <div className="fs-1 txtSecondary me-1">
                <IoTimeOutline />
              </div>

              <div>
                <p className="mb-0">Duration</p>
                <p className="mb-0 fw-light">{tourDetails.snapshot.duration}</p>
              </div>
            </div>

            <div className="d-flex gap-1 align-items-end">
              <div className="fs-1 txtSecondary me-1">
                <GrGroup />
              </div>

              <div>
                <p className="mb-0">Group Size</p>
                <p className="mb-0 fw-light">{tourDetails.snapshot.groupSize}</p>
              </div>
            </div>
          </div>

          <button className="foxBtn secondBtn w-100 mt-4">Subscribe Now</button>
        </div>
      </div>

      <div className="row mt-4">
        <h5>Overview</h5>
        <p className="txtGray fw-normal">{tourDetails.overview}</p>
      </div>

      <hr />

      <div className="row mt-4">
        <div className="col-12">
          <h5>Available languages</h5>
          {tourDetails.languages.map((lang) => (
            <span key={v4()} className="txtGray fw-normal">
              {lang},{" "}
            </span>
          ))}
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-12">
          <h5>Highlights</h5>
          <ul className="txtGray fw-normal">
            {tourDetails.highlights.map((info) => (
              <li key={v4()}>{info}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="row mt-4 g-4">
        <h5>Important information</h5>

        <div className="col-4">
          <h6>Inclusions</h6>
          <ul className="txtGray fw-normal">
            {tourDetails.importantInfo.inclusions.map((info) => (
              <li key={v4()}>{info}</li>
            ))}
          </ul>
        </div>

        <div className="col-4">
          <h6>Exclusions</h6>
          <ul className="txtGray fw-normal">
            {tourDetails.importantInfo.exclusions.map((info) => (
              <li key={v4()}>{info}</li>
            ))}
          </ul>
        </div>

        <div className="col-4">
          <h6>Departure details</h6>
          <p className="txtGray fw-normal">{tourDetails.importantInfo.departureDetails}</p>
        </div>

        <div className="col-4">
          <h6>Additional information</h6>
          <ul className="txtGray fw-normal">
            {tourDetails.importantInfo.additionalInfo.map((info) => (
              <li key={v4()}>{info}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page;
