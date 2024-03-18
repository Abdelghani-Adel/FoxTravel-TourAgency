"use client";
import Logo from "@/app/_components/MainHeader/Logo";
import useHideLoadingLayer from "@/app/_hooks/loadingLayer";
import React from "react";
import { MdOutlineMail, MdOutlineLocationOn } from "react-icons/md";
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { FaWhatsapp, FaFacebook } from "react-icons/fa";

const Page = () => {
  useHideLoadingLayer();

  return (
    <div className="bg-light pb-4 pt-4">
      <div className="container">
        <div className="text-center mb-3">
          <Logo />
        </div>
        <h1 className="text-center">CONTACT US</h1>

        <div className="row gy-5">
          <div className="col-12 col-md-6">
            <div className="d-flex flex-column gap-3">
              <h3 className="text-center txtThird">Send us a message</h3>
              <input className="form-control" type="text" placeholder="Name" />
              <input className="form-control" type="email" placeholder="Email" />
              <input className="form-control" type="text" placeholder="Phone" />
              <textarea className="form-control" placeholder="Message" rows={3} />
              <button className="foxBtn mainBtn">SEND</button>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="d-flex flex-column gap-3">
              <h3 className="text-center txtThird">Contact details</h3>

              <h5 className="fw-light txtMain">
                <MdOutlineMail /> info@foxtraveleg.com
              </h5>
              <h5 className="fw-light txtMain">
                <FaPhone /> +2 0102 888 6661
              </h5>
              <h5 className="fw-light txtMain">
                <FaWhatsapp /> +2 0102 888 6661
              </h5>
              <h5 className="fw-light txtMain">
                <FaFacebook /> foxtravelegypt
              </h5>
              <h5 className="fw-light txtMain">
                <FaLocationDot /> Egypt, Hurghada
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
