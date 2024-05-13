import PackageCard from "@/app/_components/cards/PackageCard";
import SectionHeaderWithBtn from "@/app/_components/ui/SectionHeaderWithBtn";
import packages from "@/public/data/Cards_Packages.json";
import SwiperScroll from "../../_components/ui/SwiperScroll";
import { promises as fs } from "fs";

const Packages = async () => {
  const file = await fs.readFile(process.cwd() + "/public/data/Cards_Packages.json", "utf8");
  const packages: IPackageCard[] = JSON.parse(file);

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

export default Packages;
