import React from "react";

type Props = {
  className?: string;
  children: React.ReactNode;
};

const DropdownMenuContent = (props: Props) => {
  const { className } = props;

  return <div className={`dropdown-menu ${className ? className : ""}`}>{props.children}</div>;
};

export default DropdownMenuContent;
