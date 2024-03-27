type PackageDetails = {
  id: number;
  title: string;
  images: string[];
  price: number;
  startDate: string;
  endDate: string;
  duration: string;
  packageType: string;
  location: string;
  description: string;
  includes: string[];
  excludes: string[];
  itenrary: IPackageItenrary[];
  transporation: IPackageTransportation[];
};

type IPackageTransportation = {
  from: string;
  to: string;
  transferType: "flight" | "bus" | "buggy";
};

type IPackageItenrary = {
  title: string;
  image: string;
  description: string;
  accommodation: null | {
    type: string;
    hotelId: number;
  };
  transportation: string;
};
