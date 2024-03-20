import React from "react";
import BranchDetails from "./_branchDetails";

const BranchList = () => {
  return (
    <div className="row mb-5">
      <div className="col-4">
        <BranchDetails
          title="Hurghada"
          email="Hrg.office@foxtraveleg.com"
          phone="+201028886667"
          address="147 El-Kawther , Airport Section / Hurghada – Red Sea , Egypt"
          workingDays="Saturday - Thursday"
          workingHours="10:00 - 16:00"
        />
      </div>

      <div className="col-4">
        <BranchDetails
          title="Cairo"
          email="Hrg.office@foxtraveleg.com"
          phone="+201028886667"
          address="147 El-Kawther , Airport Section / Hurghada – Red Sea , Egypt"
          workingDays="Saturday - Thursday"
          workingHours="10:00 - 16:00"
        />
      </div>

      <div className="col-4">
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
  );
};

export default BranchList;
