import React from "react";
import FeaturedProducts from "../components/FeaturedProducts";
import Herosection from "../components/Herosection";
import Services from "../components/Services";
const Home = () => {
  const data = {
    name: "E-Doko",
  };

  return (
    <>
      <Herosection myData={data} />;
      <FeaturedProducts />
      <Services />;
    </>
  );
};

export default Home;
