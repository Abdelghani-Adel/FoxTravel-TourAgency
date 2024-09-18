import { searchConfigActions } from "@/app/_redux/slices/searchConfig";
import { useAppDispatch, useAppSelector } from "@/app/_redux/store";
import React from "react";

const SearchTypeSelectors = () => {
  const dispatch = useAppDispatch();
  const type = useAppSelector((state) => state.searchConfig.searchType);

  const onClickHandler = (category: ISearchType) => {
    dispatch(searchConfigActions.changeType(category));
  };

  return (
    <ul className="ss_searchTypeSelectorList">
      <li className={`ss_searchTypeSelector ${type === "Hotel" ? "active" : ""}`}>
        <button className="btnClick" onClick={() => onClickHandler("Hotel")}>
          Hotel
        </button>
      </li>

      {/* <li className={`ss_searchTypeSelector ${type === "Flight" ? "active" : ""}`}>
        <button className="btnClick" onClick={() => onClickHandler("Flight")}>
          Flight
        </button>
      </li> */}

      <li className={`ss_searchTypeSelector ${type === "Transport" ? "active" : ""}`}>
        <button className="btnClick" onClick={() => onClickHandler("Transport")}>
          Transport
        </button>
      </li>
    </ul>
  );
};

export default SearchTypeSelectors;
