import React from "react";

type Props = {
  className?: string;
  children: React.ReactNode;
};

const DropdownMenuWrapper = (props: Props) => {
  const { className, children } = props;

  return <div className={`dropdown ${className ? className : ""}`}>{children}</div>;
};

export default DropdownMenuWrapper;
