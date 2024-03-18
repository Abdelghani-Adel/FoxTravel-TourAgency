import React from "react";

type props = {
  toggle: () => void;
};

const NavToggler = (props: props) => {
  const { toggle } = props;
  return (
    <button className="menu_toggler" onClick={toggle}>
      <span />
      <span />
      <span />
    </button>
  );
};

export default NavToggler;
