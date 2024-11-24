"use client";
import Image from "next/image";
import Link from "next/link";

import React from "react";
import { FaHeadphones } from "react-icons/fa6";
import SocialMediaLinks from "./SocialMediaLinks";
import { HiOutlineMail } from "react-icons/hi";
import { useAppDispatch } from "@/redux/store";
import { useRouter } from "next/navigation";
import { searchConfigActions } from "@/redux/slices/searchConfig";
import Navigate from "../../ui/Navigate";

const MainFooter = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const updateSearchCategory = () => {
    dispatch(searchConfigActions.changeType("Flight"));
    router.push("/");
  };

  return (
    <div className="mainFooter">
      <div className="container-fluid">
        <div className="row g-4">
          <div className="col-12 col-md-2">
            <div className="footer_iconWrapper">
              <Image src="/img/icon.png" fill alt="" />
            </div>
          </div>

          <div className="col-12 col-md-2">
            <div className="mb-3">
              <h5 className="textSecondary text-center text-md-start mb-2">
                CUSTOMER SUPPORT
              </h5>
              <p className="fw-light">+201028880661</p>
              <p className="fw-light">info@toxtraveleg.com</p>
            </div>

            <div>
              <h5 className="textSecondary text-center text-md-start mb-2">
                JOIN OUR NEWS LETTER
              </h5>
              <p className="fw-light">
                Follow Fox Travel Egypt on social media to keep up to date with
                latest updates
              </p>
              <SocialMediaLinks />
            </div>
          </div>

          <div className="col-12 col-md-2">
            <h5 className="textSecondary text-center text-md-start mb-2">
              TRAVEL SERVICES
            </h5>
            <ul className="fotter_ul">
              <li>
                <Navigate href="/hotels" className="mainFooter_link">
                  Hotel Deals
                </Navigate>
              </li>
              <li>
                <Navigate href="/" className="mainFooter_link">
                  Nile Cruises
                </Navigate>
              </li>
              <li>
                <Navigate href="#" className="mainFooter_link">
                  Hajj & Umrah
                </Navigate>
              </li>
              <li>
                <Navigate href="/cars" className="mainFooter_link">
                  Transporation
                </Navigate>
              </li>
              <li>
                <span
                  className="mainFooter_link cursorPointer"
                  onClick={updateSearchCategory}
                >
                  Flight Booking
                </span>
              </li>
              {/* <li>
                <Navigate href="/destinations" className="mainFooter_link">
                  International Holidays
                </Navigate>
              </li> */}
              <li>
                <Navigate href="/packages" className="mainFooter_link">
                  Egypt Packages
                </Navigate>
              </li>
              <li>
                <Navigate href="/tours" className="mainFooter_link">
                  Excursions
                </Navigate>
              </li>
            </ul>
          </div>

          <div className="col-12 col-md-2">
            <h5 className="textSecondary text-center text-md-start mb-2">
              FOX TRAVEL EGYPT
            </h5>
            <ul className="fotter_ul">
              <li>
                <Navigate href="/about" className="mainFooter_link">
                  About Us
                </Navigate>
              </li>
              <li>
                <Navigate
                  href="/about?section=ourTeam"
                  className="mainFooter_link"
                >
                  Our Team
                </Navigate>
              </li>
              <li>
                <Navigate href="/contact" className="mainFooter_link">
                  Contact Us
                </Navigate>
              </li>
              <li>
                <Navigate href="/terms" className="mainFooter_link">
                  Booking Terms & Conditions
                </Navigate>
              </li>
            </ul>
          </div>

          <div className="col-12 col-md-4">
            <div className="d-flex align-items-center gap-2 mb-3">
              <HiOutlineMail className="display-2" />
              <div>
                <h5 className="textSecondary mb-2">
                  YOUR TRAVEL JOURNEY STARTS HERE!
                </h5>
                <p className="fw-light">
                  Sign up and we Will send the Lest deals to you
                </p>
              </div>
            </div>

            <div className="d-flex gap-3 mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="ENTER YOUR EMAIL"
              ></input>
              <button className="foxBtn secondBtn smBtn">SUBSCRIBE</button>
            </div>

            <div className="d-flex flex-wrap align-items-center gap-2">
              <Image src="/img/iata.png" width={80} height={50} alt="IATA" />
              <Image src="/img/etaa.png" width={90} height={60} alt="IATA" />
              <Image
                src="/img/minister.png"
                width={80}
                height={70}
                alt="IATA"
              />
              <Image src="/img/egypt.png" width={80} height={70} alt="IATA" />
              <Image
                src="/img/amadeus.png"
                width={100}
                height={60}
                alt="IATA"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainFooter;
