import { encrypt } from "@/app/_utils/Cryptojs";
import Image from "next/image";
import Link from "next/link";

type props = {
  data: IDestination;
};

const DestinationCard = (props: props) => {
  const { id, img, title, hotels, cars, trips, activities } = props.data;
  const encryptedId = encrypt(`${id}`);
  const url = `/destinations/${encryptedId}`;

  return (
    <Link className="destinationCard" href={url}>
      <div className="destinationCard_bg">
        <Image fill src={img} alt="" />
      </div>

      <p className="destinationCard_header">
        {hotels ? `${hotels} Hotels - ` : ""}
        {cars ? `${cars} Cars - ` : ""}
        {trips ? `${trips} Trips - ` : ""}
        {activities ? `${activities} Activities` : ""}
      </p>

      <div className="destinationCard_footer">
        <h3 className="destinationCard_name">{title}</h3>
        <button className="destinationCard_btn">Discover</button>
      </div>
    </Link>
  );
};

export default DestinationCard;
