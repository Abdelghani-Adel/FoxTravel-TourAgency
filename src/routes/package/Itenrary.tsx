import Link from "next/link";
import React from "react";
import BusTransport from "./BusTransport";

const Itenrary = () => {
  return (
    <div className="mb-2">
      <div className="bg_secondary text_white rounded-3 p-2 mb-2">
        <h5 className="mb-0">Day 1 : Drive to El-Gouna Resort</h5>
      </div>

      <p className="fw-light">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti impedit id fugit
        reprehenderit alias nihil eos doloribus, dicta quas quaerat, dolore deserunt earum a amet ad
        rerum aspernatur quam exercitationem laborum sunt similique. Et, consectetur eum architecto
        ex corporis perspiciatis! A, deserunt totam nostrum temporibus reprehenderit atque voluptas
        illum nemo dolor commodi explicabo! Provident at dolorum accusamus animi debitis.
      </p>

      <div className="d-flex gap-3">
        <div className="d-flex align-items-center gap-2">
          <h6 className="mb-0">Accommodation: </h6>
          <Link href="/hotels/1" className="fw-light">
            <span>SunRise Makadi</span>
          </Link>
        </div>
        <div className="d-flex align-items-center gap-2">
          <h6 className="mb-0">Transportation: By Bus</h6>
        </div>
      </div>

      {/* {plan.activities.map((activity: any, i: any) => (
          <div key={activity.id}>
            <h6 className="mb-0">
              {activity.title} <span className="fw-light">({activity.duration})</span>
            </h6>
            <p className="fw-normal txtGray mb-0">
              On {activity.date} from {activity.startTime} to {activity.endTime}
            </p>

            <div className="d-flex gap-2">
              {activity.includes?.map((item: any, i: any) => (
                <p key={i} className="fw-normal txtGray">
                  <IoMdCheckmarkCircle className="txtSecondary" />
                  {item}
                </p>
              ))}
            </div>
          </div>
        ))} */}
    </div>
  );
};

export default Itenrary;
