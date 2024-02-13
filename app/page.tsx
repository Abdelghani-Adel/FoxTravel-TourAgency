import CompanyFeatures from "@/src/routes/home/CompanyFeatures";
import EmailSubscriber from "@/src/routes/home/EmailSubscriber";
import HeroSection from "@/src/routes/home/HeroSection";
import PackagesList from "@/src/routes/home/PackagesList";
import PopularDestinations from "@/src/routes/home/PopularDestinations";
import RecommendedHotels from "@/src/routes/home/RecommendedHotels";
import TripInspiration from "@/src/routes/home/TripInspiration";

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
