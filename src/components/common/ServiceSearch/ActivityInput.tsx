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

type props = {
  requestBody: IServiceSearchReqBody;
  updateRequestBody: IServiceSearchUpdateReqBody;
};

const ActivityInput = (props: props) => {
  const { requestBody, updateRequestBody } = props;

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
          {requestBody.activityType.length < 1 ? "Choose the activity" : requestBody.activityType}
        </button>

        <div className="dropdown-menu serviceSearch_inputDropdown">
          <ul className="serviceSearch_optionsList">
            {activities.map((activity) => (
              <li
                key={activity.id}
                className={`serviceSearch_option ${
                  requestBody.activityType === activity.name ? "active" : ""
                }`}
                onClick={() => updateRequestBody("activityType", activity.name)}
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
