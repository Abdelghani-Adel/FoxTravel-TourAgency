"use client";

import PackageCard from "@/app/_components/cards/PackageCard";
import SectionHeaderWithBtn from "@/app/_components/ui/SectionHeaderWithBtn";
import packages from "@/public/data/Cards_Packages.json";
import SwiperScroll from "../../_components/ui/SwiperScroll";

const Packages = () => {
  return (
    <div>
      <SectionHeaderWithBtn
        title="Our Packages"
        desc="Find your next package"
        target="/packages"
        btnTitle="View all packages"
      />

      <SwiperScroll>
        {packages.map((pkg) => (
          <PackageCard
            key={pkg.id}
            id={pkg.id}
            img={pkg.image}
            title={pkg.title}
            rating={pkg.rating}
            reviews={pkg.reviews}
            price={pkg.price}
            desc={pkg.desc}
            currency={pkg.currency}
            startDate={pkg.startDate}
            endDate={pkg.endDate}
            activitiesCount={pkg.activitiesCount}
            startingPoints={pkg.startingPoints}
            duration={pkg.duration}
          />
        ))}
      </SwiperScroll>
    </div>
  );
};

export default Packages;
