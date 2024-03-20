import Link from "next/link";
import React from "react";
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
          <span className="textSecondary">Working Days: </span> {props.workingDays}
        </p>
        <p>
          <span className="textSecondary">Working Hours: </span> {props.workingHours}
        </p>
        <p>
          <span className="textSecondary">Working Hours: </span> <Link href="#">Show on map</Link>
        </p>
      </div>
    </div>
  );
};

export default BranchDetails;
