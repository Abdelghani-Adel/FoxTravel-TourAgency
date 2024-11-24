import React from "react";

const PolicySelectors = () => {
  return (
    <nav className="border rounded p-4">
      <div className="policySelectorList" role="tablist">
        <button
          className="policySelector active"
          data-bs-toggle="tab"
          data-bs-target="#generalPolicy"
        >
          General Terms of use
        </button>

        <button className="policySelector" data-bs-toggle="tab" data-bs-target="#privacyPolicy">
          Privacy policy
        </button>

        <button className="policySelector" data-bs-toggle="tab" data-bs-target="#cookiesPolicy">
          Cookie policy
        </button>

        <button className="policySelector" data-bs-toggle="tab" data-bs-target="#bestPrice">
          Best price guarantee
        </button>
      </div>
    </nav>
  );
};

export default PolicySelectors;
