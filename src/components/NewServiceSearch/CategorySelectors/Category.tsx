import { serviceSearchActions } from "@/src/redux/slices/serviceSearch";
import { useAppDispatch, useAppSelector } from "@/src/redux/store";
import React, { useEffect, useState } from "react";

const Category = (props: Props) => {
  const { categoryName } = props;
  const dispatch = useAppDispatch();
  const [isActive, setIsActive] = useState(false);
  const reduxCategory = useAppSelector((state) => state.serviceSearch.category);

  useEffect(() => {
    setIsActive(reduxCategory === categoryName);
  }, [reduxCategory, categoryName]);

  const onClickHandler = () => {
    dispatch(serviceSearchActions.updateCategory(categoryName));
  };

  return (
    <li onClick={onClickHandler} className={`serviceSearch_category ${isActive ? "active" : ""}`}>
      {categoryName}
    </li>
  );
};

export default Category;

type Props = {
  categoryName: IServiceSearchCategory;
};
