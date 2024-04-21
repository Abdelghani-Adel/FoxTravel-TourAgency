import RtsRating from "@/app/_components/ui/RtsRating";
import { encrypt } from "@/app/_utils/Cryptojs";
import { formatNumber } from "@/app/_utils/Formatters";
import Image from "next/image";
import Link from "next/link";
import { GiDuration } from "react-icons/gi";
import { MdOutlineDateRange, MdOutlineSportsHandball } from "react-icons/md";
import { RiMoneyDollarCircleLine } from "react-icons/ri";

type Props = {
  data: IPackageCard;
};

const PackageCard = (props: Props) => {
  const {
    id,
    img,
    title,
    rating,
    reviews,
    desc,
    price,
    startDate,
    endDate,
    activitiesCount,
    duration,
  } = props.data;

  const encryptedId = encrypt(id.toString());
  const url = `/packages/${encryptedId}`;

  return (
    <Link href={url} className="foxCard">
      <div className="foxCard_img">
        <Image src={img} fill alt="" />
      </div>

      <h5 className="foxCard_title">{title}</h5>

      <p className="foxCard_desc">{desc}</p>

      <p className="fw-normal">
        <MdOutlineDateRange className="cardIcon textSecondary" /> {startDate} ~ {endDate}
      </p>

      <p className="fw-normal">
        <GiDuration className="cardIcon textSecondary" /> Duration: {duration}
      </p>

      <p className="fw-normal">
        <MdOutlineSportsHandball className="cardIcon textSecondary" /> Enjoy {activitiesCount}+
        activities
      </p>

      <div className="d-flex justify-content-between align-items-center">
        <p className="fw-normal">
          <RtsRating rating={rating} readonly /> ({formatNumber(reviews)})
        </p>
        <h4 className="textSecondary">
          <RiMoneyDollarCircleLine className="cardIcon" /> {price} $
        </h4>
      </div>

      <button className="foxBtn mainBtn w-100">Find Out More</button>
    </Link>
  );
};

export default PackageCard;
