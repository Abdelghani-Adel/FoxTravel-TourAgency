import React from "react";
import Employees from "@/public/data/Employees.json";
import EmployeeCard from "@/app/_components/cards/EmployeeCard";
import { v4 } from "uuid";

const list: FoxEmployeeList = Employees;

type Props = {
  department: FoxDepartment;
};

const EmployeeList = (props: Props) => {
  const { department } = props;

  return (
    <div className="row gap-3">
      {list[department] !== null &&
        list[department].map((emp) => (
          <div className="col-12 col-md-3" key={v4()}>
            <EmployeeCard employee={emp} />
          </div>
        ))}
    </div>
  );
};

export default EmployeeList;
