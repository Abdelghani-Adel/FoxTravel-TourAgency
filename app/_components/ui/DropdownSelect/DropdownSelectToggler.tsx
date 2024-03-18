import React from "react";

type Props = {
  className?: string;
  children: React.ReactNode;
};

const DropdownSelectToggler = (props: Props) => {
  const { className } = props;
  return (
    <button
      type="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
      className={className ? className : ""}
    >
      {props.children}
    </button>
  );
};

export default DropdownSelectToggler;
