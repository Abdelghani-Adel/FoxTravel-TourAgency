// Search Feature
type ISearchCategory =
  | "Hotel"
  | "Car Hire"
  | "Car Rental"
  | "Activity"
  | "Tour"
  | "Flights"
  | "Packages";

type ISearchHotelGuests = {
  adults: number;
  childs: { age: number }[] | [];
  rooms: number;
};

type ISearchState = {
  category: ISearchCategory;
  startDate: Date | undefined | null;
  endDate: Date | undefined | null;
  hotelGuests: ISearchHotelGuests;
  city: string;
  carRiders: number;
  carModel: string;
  activityType: string;
};
