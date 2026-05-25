"use client";

import SubscribeSection from "../component/SubscribeSection";
import AboutSection from "./AboutSection";
import FeatureSection from "./FeatureSection";
import PartnerSection from "./PartnerSection";
import ServicesSection from "./ServicesSection";
import WorkSection from "./WorkSection";

const HomePage = () => {
  return (
    <>
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
