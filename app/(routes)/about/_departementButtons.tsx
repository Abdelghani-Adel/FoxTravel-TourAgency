import React from "react";

type Props = {
  curDepartment: FoxDepartment;
  changeDepartment: (newDepartment: FoxDepartment) => void;
};

const DepartementButtons = (props: Props) => {
  const { changeDepartment, curDepartment } = props;

  return (
    <div className="d-flex gap-4 mb-4">
      <button
        className={`foxBtn ${curDepartment === "owners" ? "secondBtn" : ""}`}
        onClick={() => changeDepartment("owners")}
      >
        Owners
      </button>
      <button
        className={`foxBtn ${curDepartment === "management" ? "secondBtn" : ""}`}
        onClick={() => changeDepartment("management")}
      >
        Management
      </button>
    </div>
  );
};

export default DepartementButtons;
