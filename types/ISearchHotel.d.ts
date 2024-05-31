interface ISearchHotel {
  city: string;
  startDate: Date | null;
  endDate: Date | null;
  adults: number;
  children: number[];
  rooms: number;
}
