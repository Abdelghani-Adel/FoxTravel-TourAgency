import React from "react";
import Language from "./Language";
import Currency from "./Currency";

const HeaderActions = () => {
  return (
    <div className="headerActions">
      <Language />
      <Currency />

      <button className="headerBtn">Sign In / Register</button>
    </div>
  );
};

export default HeaderActions;
