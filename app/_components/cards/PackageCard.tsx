import { encrypt } from "@/app/_utils/Cryptojs";
import { formatNumber } from "@/app/_utils/Formatters";
import Image from "next/image";
import { GiDuration } from "react-icons/gi";
import { MdOutlineDateRange, MdOutlineSportsHandball } from "react-icons/md";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import FoxCard from "./FoxCard/FoxCard";
import RtsRating from "@/app/_components/ui/RtsRating";

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
    <FoxCard url={url}>
      <div className="packageCard_img">
        <Image src={img} fill alt="" />
      </div>

      <div className="packageCard_info">
        <h5 className="txtMain fw-bold">{title}</h5>
        <p className="fw-normal txtGray mb-1">{desc}</p>

        <p className="fw-normal mb-1">
          <span>
            <MdOutlineDateRange className="icon" />
          </span>{" "}
          <span>
            {startDate} ~ {endDate}
          </span>
        </p>

        <p className="fw-normal mb-1">
          <span>
            <GiDuration className="icon" /> Duration: {duration}
          </span>
        </p>

        <p className="fw-normal mb-1">
          <MdOutlineSportsHandball className="icon" /> Enjoy {activitiesCount}+ activities
        </p>

        <div className="d-flex justify-content-between align-items-center mb-2">
          <p className="mb-0">
            <RtsRating rating={rating} readonly />
            <span className="fw-light">({formatNumber(reviews)})</span>
          </p>
          <p className="fw-normal mb-0">
            <RiMoneyDollarCircleLine className="icon" /> {price} {currency}
          </p>
        </div>

        <button className="foxBtn mainBtn w-100">Find Out More</button>
      </div>
    </FoxCard>
  );
};

export default PackageCard;
