import { useAppSelector } from "@/src/redux/store";
import React from "react";
import ProgressBar from "../../common/ProgressBar";

const ReviewStatistics = () => {
  const hotelDetails = useAppSelector((state) => state.hotelDetails);
  const statistics = hotelDetails?.reviewsStatistics;
  const rating = hotelDetails?.rating;
  const totalReviews = hotelDetails?.totalReviews;

  return (
    <div>
      <h4 className="fw-normal mb-4">Guest Reviews</h4>

      <div className="row g-4">
        <div className="col-12 col-md-6 col-lg-3">
          <div className="bg-light fw-normal hotelReview_box">
            <h2 className="number">{rating}</h2>
            <h6 className="fw-light">{totalReviews} reviews</h6>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-9">
          <div className="row g-4">
            {statistics?.map((state, i) => (
              <div key={i} className="col-6 col-lg-4">
                <div className="d-flex justify-content-between">
                  <h6>{state.title}</h6>
                  <h6 className="fw-light">{state.rating}</h6>
                </div>
                <ProgressBar max={10} value={state.rating} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewStatistics;
