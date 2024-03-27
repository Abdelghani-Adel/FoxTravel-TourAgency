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

      <div className="section boxShadow position-relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14194.848047506724!2d33.8243366!3d27.1967868!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14528739189cdf03%3A0x316a7f9b75ed293e!2sFox%20Travel%20Egypt!5e0!3m2!1sen!2seg!4v1711527972683!5m2!1sen!2seg"
          referrerPolicy="no-referrer-when-downgrade"
          title="Branch Location"
          className="contact_backgroundMap"
          // style={{
          //   height: "500px",
          //   width: "700px",
          //   border: "1px solid #38a636",
          //   padding: "5px",
          //   borderRadius: "10px",
          // }}
        />
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
