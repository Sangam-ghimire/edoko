import React from "react";
import Herosection from "../components/Herosection";
import Services from "../components/Services";
const Home = () => {
  const data = {
    name: "E-Doko",
  };

  return (
    <>
      <Herosection myData={data} />;
      <Services />;
    </>
  );
};

export default Home;
