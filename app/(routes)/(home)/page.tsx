"use client";
import useHideLoadingLayer from "@/app/_hooks/loadingLayer";
import Cars from "./_cars";
import CompanyFeatures from "./_companyFeatures";
import Destinations from "./_destinations";
import HeroSection from "./_heroSection";
import Hotels from "./_hotels";
import Packages from "./_packages";
import Tours from "./_tours";

export default function Home() {
  useHideLoadingLayer();

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
    </main>
  );
}
