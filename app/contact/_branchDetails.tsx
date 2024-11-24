import MyModal from "@/components/ui/MyModal";
import Link from "next/link";
import React, { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";

type props = {
  title: string;
  email: string;
  phone: string;
  workingHours: string;
  workingDays: string;
  address: string;
};

const BranchDetails = (props: props) => {
  const [mapShown, setMapShown] = useState(false);

  return (
    <div className="branchDetailsWrapper">
      <div className="locationIcon">
        <CiLocationOn />
      </div>

      <h3 className="fw-normal text-center mb-4">{props.title}</h3>

      <div className="fw-normal d-flex flex-column gap-2">
        <p>
          <span className="textSecondary">Phone: </span> {props.phone}
        </p>
        <p>
          <span className="textSecondary">Address: </span> {props.address}
        </p>
        <p>
          <span className="textSecondary">Working Days: </span>{" "}
          {props.workingDays}
        </p>
        <p>
          <span className="textSecondary">Working Hours: </span>{" "}
          {props.workingHours}
        </p>
        <button
          className="foxBtn mainBtn smBtn"
          onClick={() => setMapShown(true)}
        >
          show on map
        </button>
      </div>

      <MyModal show={mapShown} onClose={() => setMapShown(false)}>
        <div className="bg-white p-4 rounded-4">
          <h3 className="text-center mb-4">Branch Location</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14194.848047506724!2d33.8243366!3d27.1967868!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14528739189cdf03%3A0x316a7f9b75ed293e!2sFox%20Travel%20Egypt!5e0!3m2!1sen!2seg!4v1711527972683!5m2!1sen!2seg"
            referrerPolicy="no-referrer-when-downgrade"
            title="Branch Location"
            style={{
              height: "500px",
              width: "700px",
              border: "1px solid #38a636",
              padding: "5px",
              borderRadius: "10px",
            }}
          />
        </div>
      </MyModal>
    </div>
  );
};

export default BranchDetails;
