import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaHeadphones } from "react-icons/fa6";

const MainFooter = () => {
  return (
    <div className="pt-2 mainFooter">
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

          <div className="col-12 col-md-2 fw-light">
            <h4 className="footer_title fw-normal">Company</h4>
            <Link href="/about" className="mainFooter_link">
              About Us
            </Link>
            <Link href="#" className="mainFooter_link">
              Our Team
            </Link>
            <Link href="/contact" className="mainFooter_link">
              Contact Us
            </Link>
          </div>

          <div className="col-12 col-md-2 fw-light">
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

          <div className="col-12 col-md-5 fw-light">
            <div className="d-flex flex-wrap align-items-center gap-3">
              <Image width={80} height={50} src="/img/Certificates/turkish.png" alt="" />
              <Image width={80} height={50} src="/img/Certificates/iata.png" alt="" />
              <Image width={220} height={30} src="/img/Certificates/aircairo.png" alt="" />
              <Image width={220} height={30} src="/img/Certificates/amadeus-logo.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainFooter;
