import BestHotels from "@/app/(routes)/(home)/_bestHotels";
import BestTours from "@/app/(routes)/(home)/_bestTours";
import ImageGallerySwiperCards from "@/app/_components/ImageGallerySwiperCards/ImageGallerySwiperCards";
import { getDestinationDetails } from "@/services/destinationServices";
import { decrypt } from "@/app/_utils/Cryptojs";
import parse from "html-react-parser";
import { v4 } from "uuid";

const Page = async ({ params }: { params: { id: string } }) => {
  const hotelId = decrypt(params.id);
  const { data, error } = await getDestinationDetails(hotelId);
  const details: IDestinationDetails = data;

  if (error) {
    return <h3 className="text-center text-danger">{`${error}`}</h3>;
  }

  return (
    <div className="container mt-4 mb-5">
      <div className="row">
        <div className="col-12 col-lg-8 order-2 order-lg-1">
          <div className="destinationDetails_header">
            <h1>
              <span className="fw-light">Explore</span>{" "}
              {details.destinationName}
            </h1>
            <p className="mb-0 fw-light">
              Explore deals, travel guides and things to do in London
            </p>
          </div>

          <h4>What to know before visiting {details.destinationName}</h4>
          <div className="row mt-2">
            {details.generalInfo.map((info) => (
              <div key={v4()} className="col-6 col-md-3">
                <p className="mb-0 fw-light">{info.title}</p>
                <p className="mb-0 fw-normal">{info.info}</p>
                <p className="mb-0 fw-light">{info.desc}</p>
              </div>
            ))}
          </div>

          <div className="fw-light">
            {parse(details.description ? details.description : "<p></p>")}
          </div>
        </div>

        <div className="col-12 col-lg-4 order-1">
          <div className="hotelImageWrapper">
            <ImageGallerySwiperCards images={details.images} />
          </div>
        </div>
      </div>

      <BestHotels />
      <BestTours />
    </div>
  );
};

export default Page;
