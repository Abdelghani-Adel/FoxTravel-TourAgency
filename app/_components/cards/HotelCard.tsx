import { encrypt } from "@/app/_utils/Cryptojs";
import Image from "next/image";
import Link from "next/link";
import FoxCardBadges from "./FoxCard/FoxCardBadges";
import FoxCardPrice from "./FoxCard/FoxCardPrice";
import FoxCardRating from "./FoxCard/FoxCardRating";

type props = {
  data: IHotelCard;
};

const HotelCard = (props: props) => {
  const { id, title, address, img, rating, reviews, price, badges } = props.data;
  const encryptedId = encrypt(`${id}`);
  const url = `/hotels/${encryptedId}`;

  return (
    <Link href={url} className="foxCard">
      <div className="foxCard_img">
        <Image fill src={img} alt="" />
      </div>

      <FoxCardBadges badges={badges} />
      <h5 className="foxCard_title">{title}</h5>
      <p className="foxCard_desc">{address}</p>
      <p className="foxCard_desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore placeat impedit dolorum
        repudiandae repellendus nesciunt aut praesentium consequatur abss.
      </p>

      <FoxCardRating rating={rating} reviews={reviews} />

      <FoxCardPrice price={price} curr="$" />

      <button className="foxBtn secondBtn w-100">Discover More</button>
    </Link>
  );
};

export default HotelCard;
