"use client";
import PageStripe from "@/app/_components/ui/PageStripe";
import useHideLoadingLayer from "@/app/_hooks/loadingLayer";
import BranchList from "./_branchList";
import ContactForm from "./_contactForm";
import SocialMediaLinks from "@/app/_components/layout/MainFooter/SocialMediaLinks";

const Page = () => {
  useHideLoadingLayer();

  return (
    <div className="contactUs">
      <PageStripe title="contact us" />
      <div className="bg-light section boxShadow">
        <div className="container">
          <BranchList />
        </div>
      </div>

      <div className="section">
        <div className="container">
          <SocialMediaLinks />

          <h2 className="text-center mt-4 mb-2">We provide tours, packages and more ...</h2>

          <div className="row">
            <div className="col-12 col-md-6 m-auto text-center textGray fw-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptatem quisquam
              vero aliquid alias ipsam sunt. Minima id distinctio quod dignissimos corporis eligendi
              mollitia ratione at maxime? Corporis temporibus voluptatem qui eveniet suscipit.
            </div>
          </div>
        </div>
      </div>

      <div className="section bg-light boxShadow">
        <div className="container pb-4 pt-4">
          <div className="row">
            <div className="col-md-6 m-auto">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
