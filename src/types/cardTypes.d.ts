type IFoxCardBadge = {
  id: number;
  badgeType: string;
  badgeTitle: string;
};

type IHotelCardProps = {
  id: number;
  title: string;
  address: string;
  image: string;
  rating: number;
  reviewers: number;
  price: number;
  currency: string;
  badges: IFoxCardBadge[];
};

type ITripCardProps = {
  id: number;
  title: string;
  address: string;
  image: string;
  rating: number;
  reviewers: number;
  price: number;
  currency: string;
  badges: IFoxCardBadge[];
  duration: string;
};

type IDestinationCardProps = {
  id: number;
  img: string;
  title: string;
  hotels?: string;
  cars?: string;
  trips?: string;
  activities?: string;
};

type IPackageCardProps = {
  id: number;
  img: string;
  title: string;
  startDate: string;
  endDate: string;
  activitiesCount: number;
  desc: string;
  startingPoints: {
    id: number;
    address: string;
  }[];
  rating: number;
  price: number;
  reviews: number;
  currency: string;
  duration: string;
};
