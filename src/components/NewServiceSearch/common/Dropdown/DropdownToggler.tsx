import React from "react";

type Props = {
  children: React.ReactNode;
};

const DropdownToggler = (props: Props) => {
  return (
    <button
      type="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
      className="serviceSearch_dropdownToggler"
      data-bs-auto-close="outside"
    >
      {props.children}
    </button>
  );
};

export default DropdownToggler;
