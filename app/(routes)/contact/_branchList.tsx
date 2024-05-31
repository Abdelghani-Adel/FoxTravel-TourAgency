import React from "react";
import BranchDetails from "./_branchDetails";

const BranchList = () => {
  return (
    <>
      <div className="mb-4 col-12">
        <h2 className="text-center fw-normal mb-2 fs-1">Get in touch</h2>
        <p className="text-center fw-normal textGray">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      <div className="row row-cols-1 row-cols-lg-3 justify-content-evenly">
        <div className="col">
          <BranchDetails
            title="Hurghada"
            email="Hrg.office@foxtraveleg.com"
            phone="+201028886667"
            address="147 El-Kawther , Airport Section / Hurghada – Red Sea , Egypt"
            workingDays="Saturday - Thursday"
            workingHours="10:00 - 16:00"
          />
        </div>

        <div className="col">
          <BranchDetails
            title="Cairo"
            email="Hrg.office@foxtraveleg.com"
            phone="+201028886667"
            address="147 El-Kawther , Airport Section / Hurghada – Red Sea , Egypt"
            workingDays="Saturday - Thursday"
            workingHours="10:00 - 16:00"
          />
        </div>

        <div className="col">
          <BranchDetails
            title="Sharm"
            email="Hrg.office@foxtraveleg.com"
            phone="+201028886667"
            address="147 El-Kawther , Airport Section / Hurghada – Red Sea , Egypt"
            workingDays="Saturday - Thursday"
            workingHours="10:00 - 16:00"
          />
        </div>
      </div>
    </>
  );
};

export default BranchList;
