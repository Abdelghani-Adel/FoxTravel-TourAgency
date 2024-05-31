interface IDestinationDetails {
  destinationName: string;
  images: string[];
  description: string;
  generalInfo: GeneralInfo[];
  hotels: IHotel[];
  tours: ITour[];
}

interface GeneralInfo {
  title: string;
  info: string;
  desc: string;
}

interface Hotel {
  id: number;
  image: string;
  title: string;
  address: string;
  rating: number;
  reviews: number;
  price: number;
  currency: string;
  badges: Badge[];
}

interface Tour {
  id: number;
  image: string;
  title: string;
  address: string;
  rating: number;
  reviews: number;
  price: number;
  currency: string;
  badges: Badge[];
  duration: string;
}

interface Badge {
  id: number;
  badgeType: string;
  badgeTitle: string;
}
