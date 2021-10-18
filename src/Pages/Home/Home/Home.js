import React from "react";
import Banner from "../Banner/Banner";
import Importance from "../Importance/Importance";
import Reviews from "../Reviews/Reviews";
import Services from "../Services/Services/Services";

const Home = () => {
  return (
    <div className="home">
      <Banner></Banner>
      <Services></Services>
      <Reviews></Reviews>
      <Importance></Importance>
    </div>
  );
};

export default Home;
