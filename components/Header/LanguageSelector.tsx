import React from "react";

function LanguageSelector() {
  return (
    <div className="relative text-gray-400 font-normal hover:text-white transition-all">
      <select className="bg-transparent focus:outline-none">
        <option>EN</option>
        <option>AR</option>
      </select>
    </div>
  );
}

export default LanguageSelector;
