interface ITransfer {
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
}
