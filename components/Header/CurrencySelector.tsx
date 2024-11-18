import React from "react";

function CurrencySelector() {
  return (
    <div className="relative text-gray-400 font-normal hover:text-white transition-all">
      <select className="bg-transparent focus:outline-none">
        <option>USD</option>
        <option>EUR</option>
        <option>EGP</option>
      </select>
    </div>
  );
}

export default CurrencySelector;
