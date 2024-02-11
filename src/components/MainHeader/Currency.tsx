import React from "react";

const Currency = () => {
  return (
    <div className="dropdown">
      <button
        className="nav-link dropdown-toggle"
        id="language"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        USD
      </button>
      <ul className="dropdown-menu" aria-labelledby="language">
        <li className="dropdown-item">EGP</li>
        <li className="dropdown-item">AUD</li>
        <li className="dropdown-item">CAD</li>
        <li className="dropdown-item">JPY</li>
      </ul>
    </div>
  );
};

export default Currency;
