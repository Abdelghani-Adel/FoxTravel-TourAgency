import React from "react";
import { MdOutlineMarkEmailRead } from "react-icons/md";

const EmailSubscriber = () => {
  return (
    <div className="section">
      <div className="emailSubscriber">
        <div className="container">
          <div className="row g-3 align-items-center">
            <div className="col-12 col-md-6">
              <div className="d-flex align-items-center gap-4">
                <MdOutlineMarkEmailRead className="emailSubscriber_emailIcon" />
                <div>
                  <h3 className="fs-3 fw-bold">Your Travel Journey Starts Here</h3>
                  <p className="mb-0">Sign up and we will send the best deals to you</p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="d-flex alitn-items-stretch gap-3">
                <input type="email" placeholder="Enter your email" className="form-control" />
                <button type="submit" className="foxBtn secondBtn">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailSubscriber;
