import React from "react";

type Props = {
  children: React.ReactNode;
};

const DropdownWrapper = (props: Props) => {
  return <div className="dropdown">{props.children}</div>;
};

export default DropdownWrapper;
