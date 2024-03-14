import React from "react";
import Category from "./Category";
import { v4 } from "uuid";

const categories: IServiceSearchCategory[] = ["Hotel", "Flight", "Transport"];

const CategorySelectors = () => {
  return (
    <ul className="d-flex gap-4 justify-content-center">
      {categories.map((category) => (
        <Category key={v4()} categoryName={category} />
      ))}
    </ul>
  );
};

export default CategorySelectors;
