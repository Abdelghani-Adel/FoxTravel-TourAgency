import React from "react";

const categories: IServiceSearchCategory[] = [
  "Hotel",
  "Car Hire",
  "Car Rental",
  "Activity",
  "Flights",
];

type props = {
  requestBody: IServiceSearchReqBody;
  updateRequestBody: IServiceSearchUpdateReqBody;
};

const CategoryList = (props: props) => {
  const { requestBody, updateRequestBody } = props;

  return (
    <div className="serviceSearch_catogryList">
      {categories.map((category: IServiceSearchCategory, i) => (
        <p
          key={i}
          className={`serviceSearch_category ${requestBody.category === category ? "active" : ""}`}
          onClick={() => updateRequestBody("category", category)}
        >
          {category}
        </p>
      ))}
    </div>
  );
};

export default CategoryList;
