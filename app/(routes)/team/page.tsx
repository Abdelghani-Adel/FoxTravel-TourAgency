"use client";
import { useState } from "react";

import DepartementButtons from "./_departementButtons";
import EmployeeList from "./_employeeList";

const Team = () => {
  const [department, setDepartment] = useState<FoxDepartment>("owners");

  const changeDepartment = (newDepartment: FoxDepartment) => {
    setDepartment(newDepartment);
  };

  return (
    <div className="container">
      <div className="row mt-5 mb-5">
        <h2 className="textSecondary fw-bolder text-center mb-3">MEET OUR TEAM</h2>
        <DepartementButtons curDepartment={department} changeDepartment={changeDepartment} />
        <EmployeeList department={department} />
      </div>
    </div>
  );
};

export default Team;
