interface IPackageDetails {
  id: number;
  title: string;
  price: number;
  currency: string;
  images: string[];
  startDate: string;
  endDate: string;
  startingPoints: StartingPoint[];
  description: string;
  duration: string;
  transportation: Transportation[][];
  cityPlans: CityPlan[];
}

interface StartingPoint {
  id: number;
  address: string;
}

interface Transportation {
  id: number;
  from: string;
  to: string;
  transportationType: string;
}

interface CityPlan {
  id: number;
  cityName: string;
  duration: string;
  accommodation: Accommodation;
  activities: Activity[];
}

interface Accommodation {
  hotelName: string;
  address: string;
  hotelId: string;
}

interface Activity {
  id: number;
  title: string;
  duration: string;
  date: string;
  startTime: string;
  endTime: string;
  includes: string[];
}
