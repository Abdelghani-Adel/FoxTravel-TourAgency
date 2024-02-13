import CompanyFeatures from "@/src/routes/Home/CompanyFeatures";
import EmailSubscriber from "@/src/routes/Home/EmailSubscriber";
import HeroSection from "@/src/routes/Home/HeroSection";
import PackagesList from "@/src/routes/Home/PackagesList";
import PopularDestinations from "@/src/routes/Home/PopularDestinations";
import RecommendedHotels from "@/src/routes/Home/RecommendedHotels";
import TripInspiration from "@/src/routes/Home/TripInspiration";

export default function Home() {
  return (
    <main className="homePage">
      <HeroSection />
      <div className="container">
        <PackagesList />
        <PopularDestinations />
        <TripInspiration />
        <RecommendedHotels />
        <CompanyFeatures />
      </div>

      <EmailSubscriber />
    </main>
  );
}
