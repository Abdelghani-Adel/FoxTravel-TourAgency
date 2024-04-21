type ICardBadge = {
  id: number;
  badgeType: string;
  badgeTitle: string;
};

type IDestinationCard = {
  id: number;
  img: string;
  title: string;
  hotels: string;
  cars: string;
  trips: string;
  activities: string;
};

type IPackageCard = {
  id: number;
  img: string;
  title: string;
  desc: string;
  startDate: string;
  endDate: string;
  activitiesCount: number;
  rating: number;
  reviews: number;
  price: number;
  duration: string;
};

type IHotelCard = {
  id: number;
  img: string;
  title: string;
  address: string;
  rating: number;
  reviews: number;
  price: number;
  currency: string;
  badges: ICardBadge[];
};

type ITourCard = {
  id: number;
  img: string;
  title: string;
  address: string;
  rating: number;
  reviews: number;
  price: number;
  currency: string;
  badges: ICardBadge[];
  duration: string;
};

// ================== TransferCard ================= //
type ITransferCard = {
  id: string;
  title: string;
  img: string;
  luggages: number;
  bags: number;
  bagDimensions: {
    width: number;
    height: number;
    length: number;
  };
  price: number;
  currency: string;
  duration: string;
  badges: ICardBadge[];
  includes: string[];
  excludes: string[];
  notes: string[];
};
