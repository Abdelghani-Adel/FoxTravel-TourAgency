import Image from "next/image";
import Link from "next/link";
import Navigate from "@/components/ui/Navigate";

export const metadata = {
  title: "404 || GoTrip - Travel & Tour React NextJS Template",
  description: "GoTrip - Travel & Tour React NextJS Template",
};

const NotFount = () => {
  return (
    <div className="notFoundPage">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 text-center">
            <div className="notFoundLogo">
              <Image src="/img/icon.png" fill alt="Logo" />
            </div>
          </div>

          <div className="col-12 col-md-6">
            <h1 className="_404">
              40<span className="textSecondary">4</span>
            </h1>

            <h2>Oops! It looks like you're lost.</h2>
            <p className="fw-normal mb-4">
              The page you're looking for isn't available.
            </p>

            <button className="foxBtn secondBtn">
              <Navigate href="/">Go Back To Homapage</Navigate>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFount;
