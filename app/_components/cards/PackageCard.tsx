import { encrypt } from "@/app/_utils/Cryptojs";
import { formatNumber } from "@/app/_utils/Formatters";
import Image from "next/image";
import { GiDuration } from "react-icons/gi";
import { MdOutlineDateRange, MdOutlineSportsHandball } from "react-icons/md";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import FoxCard from "./FoxCard/FoxCard";
import RtsRating from "@/app/_components/ui/RtsRating";
import Link from "next/link";

const PackageCard = (props: IPackageCardProps) => {
  const {
    id,
    img,
    title,
    rating,
    reviews,
    desc,
    price,
    currency,
    startDate,
    endDate,
    activitiesCount,
    duration,
  } = props;

  const encryptedId = encrypt(id.toString());
  const url = `/packages/${encryptedId}`;

  return (
    <Link href={url} className="packageCard">
      <div className="packageCard_img">
        <Image src={img} fill alt="" />
      </div>

      <h5 className="cardTitle">{title}</h5>

      <p className="cardDescription">{desc}</p>

      <p className="cardP">
        <MdOutlineDateRange className="icon" /> {startDate} ~ {endDate}
      </p>

      <p className="cardP">
        <GiDuration className="icon" /> Duration: {duration}
      </p>

      <p className="cardP">
        <MdOutlineSportsHandball className="icon" /> Enjoy {activitiesCount}+ activities
      </p>

      <div className="d-flex justify-content-between align-items-center mb-2">
        <p className="cardP">
          <RtsRating rating={rating} readonly /> ({formatNumber(reviews)})
        </p>
        <p className="cardP">
          <RiMoneyDollarCircleLine className="icon" /> {price} {currency}
        </p>
      </div>

      <button className="foxBtn mainBtn w-100">Find Out More</button>
    </Link>
  );
};

export default PackageCard;
