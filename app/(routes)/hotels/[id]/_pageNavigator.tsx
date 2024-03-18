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
      {/* <li>
        <a href="#hotelPrices">Facilities</a>
      </li> */}
      <li>
        <a href="#hotelReviews">Reviews</a>
      </li>
      <li>
        <a href="#hotelGeneralInfo">Info</a>
      </li>
    </ul>
  );
};

export default PageNavigator;
