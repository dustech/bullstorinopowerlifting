import SocialGrids from "./SocialGrids";
import BullsServices from "./BullsServices";
import JarallaxHistory from "./JarallaxHistory";
import React from "react";
import jarallax from 'jarallax';
import bindHome from "../../scripts/scripts";
/*
const HomePage = () => {



  return (
    <div>
      <SocialGrids/>
      <BullsServices/>
      <JarallaxHistory/>
    </div>
  )
    ;
};*/

class HomePage extends React.Component {


  componentDidMount() {
    bindHome(jarallax.jarallax);
  }


  render() {
    return (
      <div>
        <SocialGrids/>
        <BullsServices/>
        <JarallaxHistory/>
      </div>
    );
  }
}


export default HomePage;
