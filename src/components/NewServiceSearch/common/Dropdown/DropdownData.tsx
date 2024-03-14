import React from "react";

type Props = {
  children: React.ReactNode;
};

const DropdownData = (props: Props) => {
  return <div className="dropdown-menu serviceSearch_dropdownWraper">{props.children}</div>;
};

export default DropdownData;
