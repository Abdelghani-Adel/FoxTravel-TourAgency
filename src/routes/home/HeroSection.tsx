import Image from "next/image";
import React from "react";
import ServiceSearch from "../../components/ServiceSearch/ServiceSearch";
import FlightSearch from "@/src/components/ServiceSearch/FlightSearch/FlightSearch";
import NewServiceSearch from "@/src/components/NewServiceSearch/NewServiceSearch";

const HeroSection = () => {
  return (
    <div className="home_heroSection">
      <div className="home_heroSectionBg">
        <Image fill src="/img/hero-bg.webp" alt="" />
      </div>

      <div className="featuredHeroBox">
        <h1 className="home_heroSection--mainTitle" data-aos="fade-up">
          Find Next Place To Visit
        </h1>
        <p className="home_heroSection--caption" data-aos="fade-up" data-aos-delay={100}>
          Discover amazing places at execlusive deals.
        </p>

        <div data-aos="fade-up" data-aos-delay={200}>
          {/* <ServiceSearch /> */}
          <NewServiceSearch />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
