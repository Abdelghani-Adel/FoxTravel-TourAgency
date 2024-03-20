"use client";
import { Suspense, useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";

import DepartementButtons from "./_departementButtons";
import EmployeeList from "./_employeeList";

const OurTeam = () => {
  const params = useSearchParams();
  const sectionRef = useRef(null);
  const [department, setDepartment] = useState<FoxDepartment>("owners");

  const changeDepartment = (newDepartment: FoxDepartment) => {
    setDepartment(newDepartment);
  };

  useEffect(() => {
    if (params) {
      params.forEach((param) => {
        const sectionElement = document.getElementById(param);
        if (sectionElement) {
          sectionElement.scrollIntoView({ behavior: "smooth" });
        }
      });
    }
  }, [params]);

  return (
    <div className="row mt-5 mb-5" id="ourTeam" ref={sectionRef}>
      <h2 className="textSecondary fw-bolder text-center mb-3">MEET OUR TEAM</h2>
      <DepartementButtons curDepartment={department} changeDepartment={changeDepartment} />
      <EmployeeList department={department} />
    </div>
  );
};

export default OurTeam;
