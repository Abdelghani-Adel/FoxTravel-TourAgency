import { searchActions } from "@/src/redux/slices/searchSlice";
import { useAppDispatch, useAppSelector } from "@/src/redux/store";
import React from "react";

const activities = [
  {
    id: 1,
    name: "Dive",
  },
  {
    id: 2,
    name: "Snorkling",
  },
  {
    id: 3,
    name: "Safari",
  },
];

const ActivityInput = () => {
  const dispatch = useAppDispatch();
  const searchState = useAppSelector((state) => state.search);

  const changeType = (newCategory: string) => {
    dispatch(searchActions.updateActivityType(newCategory));
  };

  return (
    <div className="serviceSearch_inputController">
      <h5 className="searchService_inputTitle">Activity</h5>
      <div className="dropdown">
        <button
          type="button"
          className="dropdownToggler"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {searchState.activityType.length < 1 ? "Choose the activity" : searchState.activityType}
        </button>

        <div className="dropdown-menu serviceSearch_inputDropdown">
          <ul className="serviceSearch_optionsList">
            {activities.map((activity) => (
              <li
                key={activity.id}
                className={`serviceSearch_option ${
                  searchState.activityType === activity.name ? "active" : ""
                }`}
                onClick={() => changeType(activity.name)}
              >
                <div className="d-flex flex-column">
                  <span>{activity.name}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ActivityInput;
