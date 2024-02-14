import CompanyFeatures from "@/src/routes/home/CompanyFeatures";
import EmailSubscriber from "@/src/routes/home/EmailSubscriber";
import HeroSection from "@/src/routes/home/HeroSection";
import Packages from "@/src/routes/home/Packages";
import Destinations from "@/src/routes/home/Destinations";
import Hotels from "@/src/routes/home/Hotels";
import Tours from "@/src/routes/home/Tours";
import Cars from "@/src/routes/home/Cars";

export default function Home() {
  return (
    <main className="homePage">
      <HeroSection />
      <div className="container">
        <Cars />
        <Packages />
        <Destinations />
        <Tours />
        <Hotels />
        <CompanyFeatures />
      </div>

      <EmailSubscriber />
    </main>
  );
}
