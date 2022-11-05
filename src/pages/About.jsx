import React from 'react';
import HeroSection from '../components/Herosection';

const About = () => {
    const data = {
      name: "E-Doko",
    };
  
    return <HeroSection myData={data} />;
  };
  
  export default About;