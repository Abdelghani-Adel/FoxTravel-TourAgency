"use client";
import OurTeam from "./_ourTeam";

import PageStripe from "@/components/ui/PageStripe";
import { Suspense } from "react";
import CompanyRecords from "./_companyRecords";
import MissionVision from "./_missionVision";
import TeamImage from "./_teamImage";
import WhyChooseUs from "./_whyChooseUs";

const Page = () => {
  return (
    <div>
      <PageStripe title="About Fox Travel" />
      <div className="container">
        <div className="section">
          <WhyChooseUs />
        </div>

        <div className="row section">
          <div className="col-12 col-md-7">
            <MissionVision />
          </div>

          <div className="col-12 col-md-5">
            <TeamImage />
          </div>
        </div>

        <div className="section">
          <CompanyRecords />
        </div>

        <hr />

        <div className="section">
          <Suspense>
            <OurTeam />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Page;
