interface ISearchHotel {
  city: ILocation;
  startDate: Date | null;
  endDate: Date | null;
  adults: number;
  children: number[];
  rooms: number;
}
