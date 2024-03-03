type IFlightSearchRoundReqBody = {
  from: string;
  to: string;
  departure: Date;
  return: Date;
  travellers: IFlightSeachTravellers;
  class: string;
};

type IFlightSearchOnewayReqBody = {
  from: string;
  to: string;
  departure: Date;
  travellers: IFlightSeachTravellers;
  class: string;
};

type IFlightSearchMultipleReqBody = {
  travellers: IFlightSeachTravellers;
  class: string;
  destinations: {
    from: string;
    to: string;
    departure: Date;
  }[];
};

type IFlightSeachTravellers = {
  adults: number;
  children: number;
  infants: number;
};

type IFlightSearchType = "round" | "one" | "multi";
