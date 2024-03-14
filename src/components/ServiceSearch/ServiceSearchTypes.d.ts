type IServiceSearchReqBody = {
  category: string;
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
