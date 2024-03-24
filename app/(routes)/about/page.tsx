"use client";
import useHideLoadingLayer from "@/app/_hooks/loadingLayer";
import OurTeam from "./_ourTeam";

// import { useRouter } from "next/router";
import { Suspense, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import PageStripe from "@/app/_components/ui/PageStripe";
import { RiPriceTag2Line } from "react-icons/ri";
import { MdDateRange } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import Image from "next/image";
import WhyChooseUs from "./_whyChooseUs";
import MissionVision from "./_missionVision";
import TeamImage from "./_teamImage";
import CompanyRecords from "./_companyRecords";

const Page = () => {
  useHideLoadingLayer();

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
