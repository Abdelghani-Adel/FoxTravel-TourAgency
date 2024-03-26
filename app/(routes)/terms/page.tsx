"use client";
import PageStripe from "@/app/_components/ui/PageStripe";
import React, { useState } from "react";
import PolicySelectors from "./_policySelectors";
import GeneralPolicy from "./_generalPolicy";
import PrivacyPolicy from "./_privacyPolicy";
import CookiesPolicy from "./_cookiesPolicy";
import BestPricePolicy from "./_bestPricePolicy";

const Page = () => {
  return (
    <div className="termsPage">
      <PageStripe title="Terms & conditions" />

      <div className="container">
        <div className="section">
          <div className="row">
            <div className="col-3">
              <PolicySelectors />
            </div>

            <div className="col-9">
              <div className="tab-content" id="nav-tabContent">
                <GeneralPolicy />
                <PrivacyPolicy />
                <CookiesPolicy />
                <BestPricePolicy />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
