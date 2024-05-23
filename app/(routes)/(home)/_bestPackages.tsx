import PackageCard from "@/app/_components/cards/PackageCard";
import SectionHeaderWithBtn from "@/app/_components/ui/SectionHeaderWithBtn";
import { getBestPackages } from "@/app/_services/packageServices";
import SwiperScroll from "../../_components/ui/SwiperScroll";

const BestPackages = async () => {
  const { data, error } = await getBestPackages();
  const packages: IPackage[] = data;

  if (error) {
    return <h3 className="text-center text-danger">{`${error}`}</h3>;
  }

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
          <PackageCard key={pkg.id} data={pkg} />
        ))}
      </SwiperScroll>
    </div>
  );
};

export default BestPackages;
