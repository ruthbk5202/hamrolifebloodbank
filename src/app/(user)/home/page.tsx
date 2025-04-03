"use client";
import React from "react";

import HeroSection from "../../../components/user/herosection/HeroSection";
// import HeroSectionMission from '../components/herosectionsecondcomponent/HerosectionMission.jsx';
import WhyHlb from "../../../components/user/whyHlh/WhyHlb";
import Team from "../../../components/user/team/Team";
import Events from "../../../components/user/events/Events";


import Partners from "../../../components/user/partners/Partner";
 


function Home() {
  return (
    <div>

      <HeroSection />

      <WhyHlb />
      <Team />
      <Partners />
      <Events />

    </div>
  );
}
export default Home;
