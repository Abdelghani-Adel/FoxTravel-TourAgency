"use client";
import useHideLoadingLayer from "@/src/hooks/loadingLayer";
import Image from "next/image";
import React from "react";
import { IoPersonCircleOutline } from "react-icons/io5";

const Page = () => {
  useHideLoadingLayer();

  return (
    <div className="container mt-5 mb-5">
      <div className="row mb-5">
        <h2 className="text_third fw-bolder text-center mb-3">Our Team</h2>

        <div className="d-flex justify-content-evenly gap-5 flex-wrap">
          <div className="teamMember">
            <IoPersonCircleOutline className="teamMember_picture" />
            <h5 className="teamMember_name">Sayed El Daly</h5>
            <h6 className="teamMember_position">Owner & Chairman</h6>
          </div>
          <div className="teamMember">
            <IoPersonCircleOutline className="teamMember_picture" />
            <h5 className="teamMember_name">Maged El-Kady</h5>
            <h6 className="teamMember_position">Owner & CEO</h6>
          </div>
          <div className="teamMember">
            <IoPersonCircleOutline className="teamMember_picture" />
            <h5 className="teamMember_name">Farag Ahmed</h5>
            <h6 className="teamMember_position">Financial Manager</h6>
          </div>
          <div className="teamMember">
            <IoPersonCircleOutline className="teamMember_picture" />
            <h5 className="teamMember_name">Samar Maged</h5>
            <h6 className="teamMember_position">Out Going Manager</h6>
          </div>
          <div className="teamMember">
            <IoPersonCircleOutline className="teamMember_picture" />
            <h5 className="teamMember_name">Ahmed Abdelzaher</h5>
            <h6 className="teamMember_position">Traffic Manager</h6>
          </div>
          <div className="teamMember">
            <IoPersonCircleOutline className="teamMember_picture" />
            <h5 className="teamMember_name">Omar Maged</h5>
            <h6 className="teamMember_position">Tour Operator Manager</h6>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-md-6">
          <div className="d-flex flex-column gap-2">
            <h4 className="text_third">How it started?</h4>
            <p className="fw-normal">
              Our first branch was established in Cairo by Sayed El Daly and Medhat Ammar in 1984.
              We expanded our reach into Egypt's local market by 1993, in Hurghada and Sharm El
              Sheikh. In 1997, we started to expand into foreign markets. We opened our fourth
              branch in Germany, in Hanover then we moved it to Düsseldorf.
            </p>
            <h4 className="text_third">What do we do?</h4>
            <p className="fw-normal">
              We strive to enhance our clients travel experience by providing them with quality
              service both locally and overseas. We continue to expand and build our reputation, ada
              pt to the fieldis constant changes and to become prominent. At Fox Travel Egypt, we
              aim to expand our reach into for eign markets.
            </p>
            <h4 className="text_third">What do we want to achieve?</h4>
            <p className="fw-normal">
              For Fox Travel Egypt, to be among Egypt's top-tier companies within our field, through
              our highly qualified team we continue to meet our clients' needs. We aspire to provide
              our stakeholders, both 82B & B2C, with the best travel experience through our online
              Services.
            </p>
          </div>
        </div>

        <div className="col-12 col-md-6 d-none d-md-block">
          <div className="mainTeamImage">
            <Image src="/img/team.webp" fill alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
