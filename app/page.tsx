import CompanyFeatures from "@/src/components/pages/Home/CompanyFeatures";
import EmailSubscriber from "@/src/components/pages/Home/EmailSubscriber";
import HeroSection from "@/src/components/pages/Home/HeroSection";
import PackagesList from "@/src/components/pages/Home/PackagesList";
import PopularDestinations from "@/src/components/pages/Home/PopularDestinations";
import RecommendedHotels from "@/src/components/pages/Home/RecommendedHotels";
import TripInspiration from "@/src/components/pages/Home/TripInspiration";

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
