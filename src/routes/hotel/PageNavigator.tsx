import React from "react";

const PageNavigator = () => {
  return (
    <ul className="pageNavigator">
      <li className="active">
        <a href="#hotelOverview">Overview</a>
      </li>
      <li>
        <a href="#hotelPrices">Prices</a>
      </li>
      <li>
        <a href="#hotelPrices">Facilities</a>
      </li>
      <li>
        <a href="#hotelPrices">Reviews</a>
      </li>
      <li>
        <a href="#hotelPrices">Info</a>
      </li>
    </ul>
  );
};

export default PageNavigator;
