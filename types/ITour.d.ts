interface ITour {
  serviceId: number;
  img: string;
  title: string;
  address: string;
  rating: number;
  reviews: number;
  price: number;
  badges: ICardBadge[];
  duration: string;
  descrption: string;
  currency: string;
}
