import { Suspense, lazy } from "react";

const HeroSection = lazy(() => import("./_heroSection"));
const Packages = lazy(() => import("./_packages"));
const Destinations = lazy(() => import("./_destinations"));
const Tours = lazy(() => import("./_tours"));
const Hotels = lazy(() => import("./_hotels"));
const CompanyFeatures = lazy(() => import("./_companyFeatures"));

export default function Home() {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <HeroSection />
      </Suspense>
      <div className="container">
        <Suspense fallback={<div>Loading...</div>}>
          <Packages />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <Destinations />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <Tours />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <Hotels />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <CompanyFeatures />
        </Suspense>
      </div>
    </main>
  );
}
