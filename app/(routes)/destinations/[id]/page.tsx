"use client";
import Hotels from "@/app/(routes)/(home)/_hotels";
import Tours from "@/app/(routes)/(home)/_tours";
import ImageGallerySwiperCards from "@/app/_components/ImageGallerySwiperCards/ImageGallerySwiperCards";
import { useAppSelector } from "@/app/_redux/store";
import parse from "html-react-parser";

const Page = ({ params }: { params: { id: string } }) => {
  const details = useAppSelector((state) => state.destinationDetails);

  return (
    <div className="container mt-4 mb-5">
      <div className="row">
        <div className="col-12 col-lg-8 order-2 order-lg-1">
          <div className="destinationDetails_header">
            <h1>
              <span className="fw-light">Explore</span> {details.destinationName}
            </h1>
            <p className="mb-0 fw-light">Explore deals, travel guides and things to do in London</p>
          </div>

          <h4>What to know before visiting {details.destinationName}</h4>
          <div className="row mt-2">
            {details.generalInfo.map((info, i) => (
              <div key={i} className="col-6 col-md-3">
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

      <Hotels />
      <Tours />
    </div>
  );
};

export default Page;
