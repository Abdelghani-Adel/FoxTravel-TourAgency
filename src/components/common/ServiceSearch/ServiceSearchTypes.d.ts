type IServiceSearchCategory = "Hotel" | "Car Hire" | "Car Rental" | "Activity" | "Tour" | "Flights";

type IServiceSearchReqBody = {
  category: IServiceSearchCategory;
  startDate: Date | undefined | null;
  endDate: Date | undefined | null;
  hotelGuests: {
    adults: number;
    childs: { age: number }[] | [];
    rooms: number;
  };
  city: string;
  carRiders: number;
  carModel: string;
  activityType: string;
};

type IServiceSearchUpdateReqBody = <K extends keyof IServiceSearchReqBody>(
  key: K,
  value: IServiceSearchReqBody[K]
) => void;
