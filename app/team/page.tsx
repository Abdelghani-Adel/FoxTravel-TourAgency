"use client";
import React, { useState } from "react";
import { IoPersonCircleOutline } from "react-icons/io5";

const Team = () => {
  const [showOwners, setShowOwners] = useState(true);

  return (
    <div className="container">
      <div className="row mt-5 mb-5">
        <h2 className="text_third fw-bolder text-center mb-3">MEET OUR TEAM</h2>

        <div className="d-flex gap-4 mb-4">
          <button
            className={`foxBtn ${showOwners ? "thirdBtn" : ""}`}
            onClick={() => setShowOwners(true)}
          >
            Owners
          </button>
          <button
            className={`foxBtn ${showOwners ? "" : "thirdBtn"}`}
            onClick={() => setShowOwners(false)}
          >
            Management
          </button>
        </div>

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
    </div>
  );
};

export default Team;
