"use client";
import useHideLoadingLayer from "@/app/_hooks/loadingLayer";
import OurTeam from "./_ourTeam";

// import { useRouter } from "next/router";
import { Suspense, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";

const Page = () => {
  useHideLoadingLayer();

  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-12">
          <div className="d-flex flex-column gap-3">
            <div>
              <h4 className="textSecondary">Company History</h4>
              <p className="fw-normal">
                Our first branch was established in Cairo by Sayed El Daly and Medhat Ammar in 1984.
                We expanded our reach into Egypt’s local market by 1993, in Hurghada and Sharm El
                Sheikh. In 1997, we started to expand into foreign markets. We opened our fourth
                branch in Germany, in Hanover then we moved to Düsseldorf.
              </p>
            </div>

            <div>
              <h4 className="textSecondary">OUR MISSION</h4>
              <p className="fw-normal">
                We strive to enhance our clients travel experience by providing them with quality
                service both locally and overseas. We continue to expand and build upon our
                reputation, adapt to the field’s constant changes and to become prominent in it. At
                Fox Travel Egypt, we aim to expand our reach into foreign markets.
              </p>
            </div>

            <div>
              <h4 className="textSecondary">OUR VISION</h4>
              <p className="fw-normal">
                For Fox Travel Egypt, to be among Egypt's top-tier companies within our field,
                through our highly qualified team we continue to meet our clients' travel needs. We
                aspire to provide our stakeholders, both B2B & B2C, with the best travel experience
                through our online platform by providing them with diverse options.
              </p>
            </div>

            <div>
              <h4 className="textSecondary">OUR GOALS</h4>
              <p className="fw-normal">To develop life-long relationships with our stakeholders.</p>
              <p className="fw-normal">
                To become our clients’ first choice for their travel needs.
              </p>
              <p className="fw-normal">
                To inspire our clients through our fast and efficient services.
              </p>
              <p className="fw-normal">
                To provide cost-effective packages tailored to our clients' needs.
              </p>
              <p className="fw-normal">
                To constantly innovate and keep up with today's modern era.
              </p>
            </div>
          </div>
        </div>

        {/* <div className="col-12 col-md-6 d-none d-md-block">
          <div className="mainTeamImage">
            <Image src="/img/team.webp" fill alt="" />
          </div>
        </div> */}
      </div>
      <Suspense>
        <OurTeam />
      </Suspense>
    </div>
  );
};

export default Page;
