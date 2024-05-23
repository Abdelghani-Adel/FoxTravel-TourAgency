interface ITour {
  id: number;
  img: string;
  title: string;
  address: string;
  rating: number;
  reviews: number;
  price: number;
  badges: ICardBadge[];
  duration: string;
}
