import { Suspense, lazy } from "react";

const HeroSection = lazy(() => import("./_heroSection"));
const BestPackages = lazy(() => import("./_bestPackages"));
const BestDestinations = lazy(() => import("./_bestDestinations"));
const BestTours = lazy(() => import("./_bestTours"));
const BestHotels = lazy(() => import("./_bestHotels"));
const CompanyFeatures = lazy(() => import("./_companyFeatures"));

export default function Home() {
  return (
    <main>
      <HeroSection />

      <div className="container">
        <Suspense fallback={<div>Loading...</div>}>
          <BestPackages />
        </Suspense>

        <Suspense fallback={<div>Loading...</div>}>
          <BestDestinations />
        </Suspense>

        <Suspense fallback={<div>Loading...</div>}>
          <BestTours />
        </Suspense>

        <Suspense fallback={<div>Loading...</div>}>
          <BestHotels />
        </Suspense>

        <Suspense fallback={<div>Loading...</div>}>
          <CompanyFeatures />
        </Suspense>
      </div>
    </main>
  );
}
