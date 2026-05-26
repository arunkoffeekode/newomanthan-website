"use client";
import CinematicBanner from "../component/CinematicBanner";
import SubscribeSection from "../component/SubscribeSection";
import AboutSection from "./AboutSection";
import FeatureSection from "./FeatureSection";
import PartnerSection from "./PartnerSection";
import ServicesSection from "./ServicesSection";
import WorkSection from "./WorkSection";

const HomePage = () => {
  return (
    <>
      <CinematicBanner />
      <ServicesSection />
      <AboutSection />
      <FeatureSection />
      <WorkSection />
      <PartnerSection />
      <SubscribeSection />
    </>
  );
};

export default HomePage;
