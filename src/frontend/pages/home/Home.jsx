import React from "react";

import "./Home.css";
import HeroSection from "../../components/heroSection/HeroSection";
import ExploreProducts from "../../components/exploreProducts/ExploreProducts";
import ReviewTalks from "../../components/reviewTalks/ReviewTalks";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <>
      <HeroSection />
      <ExploreProducts />
      <ReviewTalks />
      <Footer />
     
    </>
  );
};

export default Home;
