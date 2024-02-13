import React from "react";
import { RiPriceTag2Line } from "react-icons/ri";
import { MdDateRange } from "react-icons/md";
import { BiSupport } from "react-icons/bi";

const CompanyFeatures = () => {
  return (
    <div className="section">
      <div className="companyFeatures">
        <div className="row g-3">
          <div className="col-12 col-md-4">
            <div className="companyFeature" data-aos="fade-up" data-aos-delay={100}>
              <RiPriceTag2Line />
              <h3 className="title">Best Price Guarantee</h3>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="companyFeature" data-aos="fade-up" data-aos-delay={200}>
              <MdDateRange />
              <h3 className="title">Easy & Quick Booking</h3>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="companyFeature" data-aos="fade-up" data-aos-delay={300}>
              <BiSupport />
              <h3 className="title">Customer Care 24/7</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyFeatures;
