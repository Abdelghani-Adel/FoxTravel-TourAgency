import { searchActions } from "@/src/redux/slices/searchSlice";
import { useAppDispatch, useAppSelector } from "@/src/redux/store";
import React from "react";

const categories: ISearchCategory[] = [
  "Hotel",
  "Flights",
  "Car Hire",
  "Car Rental",
  "Activity",
  "Packages",
];

const CategoryList = () => {
  const dispatch = useAppDispatch();
  const searchState = useAppSelector((state) => state.search);

  const onChangeCategory = (newCategory: ISearchCategory) => {
    dispatch(searchActions.updateCategory(newCategory));
  };

  return (
    <div className="serviceSearch_catogryList">
      {categories.map((category, i) => (
        <p
          key={i}
          className={`serviceSearch_category ${searchState.category === category ? "active" : ""}`}
          onClick={() => onChangeCategory(category)}
        >
          {category}
        </p>
      ))}
    </div>
  );
};

export default CategoryList;
