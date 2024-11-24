import Facilities from "@/app/hotels/[id]/_facilities";
import Header from "@/app/hotels/[id]/_header";
import HelpfulFacts from "@/app/hotels/[id]/_helpfulFacts";
import Highlights from "@/app/hotels/[id]/_highlights";
import HotelRoomsTable from "@/app/hotels/[id]/_hotelRoomsTable";
import Overview from "@/app/hotels/[id]/_overview";
import PageNavigator from "@/app/hotels/[id]/_pageNavigator";
import ReviewStatistics from "@/app/hotels/[id]/_reviewStatistics";
import ImageGallerySwiperCards from "@/components/ImageGallerySwiperCards/ImageGallerySwiperCards";
import HotelSearch from "@/components/ServiceSearch/HotelSearch/HotelSearch";
import { getHotelDetails } from "@/services/hotelServices";
import { decrypt } from "@/utils/Cryptojs";

const Page = async ({ params }: { params: { id: string } }) => {
  const hotelId = decrypt(params.id);
  const { data, error } = await getHotelDetails(hotelId);
  const details: IHotelDetails = data;

  if (error) {
    return <h3 className="text-center text-danger">{`${error}`}</h3>;
  }

  return (
    <div className="container mt-4 mb-5">
      <Header name={details.name} location={details.location} />
      <PageNavigator />

      <div className="row hotelDetails_secion">
        <div className="col-12 col-lg-8 order-2 order-lg-1">
          <Overview overview={details.description} />
          <Facilities facilities={details.facilities} />
          <Highlights highlights={details.highlights} />
        </div>

        <div className="col-12 col-lg-4 order-1">
          <div className="hotelImageWrapper">
            <ImageGallerySwiperCards images={details.images} />
          </div>
        </div>
      </div>

      <div className="row mb-2">
        <div className="col-12">
          <div className="p-3 bgSecondary rounded-4">
            <HotelSearch />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <HotelRoomsTable rooms={details.rooms} />
        </div>
      </div>

      <div className="row hotelDetails_secion" id="hotelReviews">
        <div className="col-12">
          <ReviewStatistics
            statistics={details.reviewsStatistics}
            rating={details.rating}
            totalReviews={details.totalReviews}
          />
        </div>
      </div>

      <div className="row hotelDetails_secion" id="hotelGeneralInfo">
        <div className="col-12">
          <HelpfulFacts facts={details.helpfulFacts} />
        </div>
      </div>
    </div>
  );
};

export default Page;
