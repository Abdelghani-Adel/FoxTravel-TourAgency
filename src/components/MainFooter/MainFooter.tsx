import Link from "next/link";
import React from "react";
import { FaHeadphones } from "react-icons/fa6";

const MainFooter = () => {
  return (
    <div className="section mainFooter">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-3 fw-light">
            <h4 className="footer_title fw-normal">Contact Us</h4>
            <p className="mb-1">Free customer care</p>
            <p className="mainFooter_phone">
              <FaHeadphones /> +20 102 888 6661
            </p>

            <p className="mb-1">Need live support ?</p>
            <p className="mainFooter_email">samarelkady@foxtraveleg.com</p>
          </div>

          <div className="col-12 col-md-3 fw-light">
            <h4 className="footer_title fw-normal">Company</h4>
            <Link href="#" className="mainFooter_link">
              About Us
            </Link>
            <Link href="#" className="mainFooter_link">
              Careers
            </Link>
            <Link href="#" className="mainFooter_link">
              Contact
            </Link>
          </div>

          <div className="col-12 col-md-3 fw-light">
            <h4 className="footer_title fw-normal">Our Services</h4>
            <Link href="#" className="mainFooter_link">
              Car Hire
            </Link>
            <Link href="#" className="mainFooter_link">
              Activity Finder
            </Link>
            <Link href="#" className="mainFooter_link">
              Tour List
            </Link>
            <Link href="#" className="mainFooter_link">
              Flight Finder
            </Link>
            <Link href="#" className="mainFooter_link">
              Cruise Ticket
            </Link>
            <Link href="#" className="mainFooter_link">
              Holiday Rental
            </Link>
            <Link href="#" className="mainFooter_link">
              Travel Agents
            </Link>
          </div>

          <div className="col-12 col-md-3 fw-light">
            <h4 className="footer_title fw-normal">Contact Us</h4>
            <Link href="#" className="mainFooter_link">
              About Us
            </Link>
            <Link href="#" className="mainFooter_link">
              Careers
            </Link>
            <Link href="#" className="mainFooter_link">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainFooter;
