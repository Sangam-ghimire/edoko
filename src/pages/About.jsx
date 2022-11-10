import React from "react";
import HeroSection from "../components/Herosection";
import { AppContext, useProductContext } from "../context/Productcontext";

const About = () => {
  const { myName } = useProductContext();

  const data = {
    name: "E-Doko",
  };

  return (
    <>
      {myName}
      <HeroSection myData={data} />
    </>
  );
};

export default About;
