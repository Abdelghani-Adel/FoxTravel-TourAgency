"use client";
import Facilities from "@/app/(routes)/hotels/[id]/_facilities";
import Header from "@/app/(routes)/hotels/[id]/_header";
import HelpfulFacts from "@/app/(routes)/hotels/[id]/_helpfulFacts";
import Highlights from "@/app/(routes)/hotels/[id]/_highlights";
import HotelRoomsTable from "@/app/(routes)/hotels/[id]/_hotelRoomsTable";
import Overview from "@/app/(routes)/hotels/[id]/_overview";
import PageNavigator from "@/app/(routes)/hotels/[id]/_pageNavigator";
import ReviewStatistics from "@/app/(routes)/hotels/[id]/_reviewStatistics";
import ImageGallerySwiperCards from "@/app/_components/ImageGallerySwiperCards/ImageGallerySwiperCards";
import HotelFormWrapper from "@/app/_components/ServiceSearch/HotelForm/HotelFormWrapper";
import useHideLoadingLayer from "@/app/_hooks/loadingLayer";

const Page = ({ params }: { params: { id: string } }) => {
  useHideLoadingLayer();
  return (
    <div className="container mt-4 mb-5">
      <Header />
      <PageNavigator />

      <div className="row hotelDetails_secion">
        <div className="col-12 col-lg-8 order-2 order-lg-1">
          <Overview />
          <Facilities />
          <Highlights />
        </div>

        <div className="col-12 col-lg-4 order-1">
          <div className="hotelImageWrapper">
            <ImageGallerySwiperCards />
          </div>
        </div>
      </div>

      <div className="row mb-2">
        <div className="col-12">
          <HotelFormWrapper />
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <HotelRoomsTable />
        </div>
      </div>

      <div className="row hotelDetails_secion" id="hotelReviews">
        <div className="col-12">
          <ReviewStatistics />
        </div>
      </div>

      <div className="row hotelDetails_secion" id="hotelGeneralInfo">
        <div className="col-12">
          <HelpfulFacts />
        </div>
      </div>
    </div>
  );
};

export default Page;
