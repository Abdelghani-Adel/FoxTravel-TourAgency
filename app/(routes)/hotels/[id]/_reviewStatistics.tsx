import React from "react";
import ProgressBar from "@/app/_components/ui/ProgressBar";
import { v4 } from "uuid";

type IProps = {
  statistics: ReviewStatistic[];
  rating: number;
  totalReviews: number;
};

const ReviewStatistics = (props: IProps) => {
  const { statistics, rating, totalReviews } = props;

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
            {statistics?.map((state) => (
              <div key={v4()} className="col-6 col-lg-4">
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
