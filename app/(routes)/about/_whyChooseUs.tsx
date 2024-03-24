import React from "react";
import { BiSupport } from "react-icons/bi";
import { MdDateRange } from "react-icons/md";
import { RiPriceTag2Line } from "react-icons/ri";

const WhyChooseUs = () => {
  return (
    <>
      <div className="mb-3" data-aos="fade-up">
        <h2 className="text-center mb-2">Why choose us ?</h2>
        <h6 className="fw-normal text-center">These popular destinations have a lot to offer</h6>
      </div>
      <div className="companyFeatures">
        <div className="row g-3">
          <div className="col-12 col-md-4">
            <div className="companyFeature" data-aos="fade-up" data-aos-delay={100}>
              <RiPriceTag2Line />
              <h3 className="fw-normal">Best Price Guarantee</h3>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="companyFeature" data-aos="fade-up" data-aos-delay={200}>
              <MdDateRange />
              <h3 className="fw-normal">Easy & Quick Booking</h3>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="companyFeature" data-aos="fade-up" data-aos-delay={300}>
              <BiSupport />
              <h3 className="fw-normal">Customer Care 24/7</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
