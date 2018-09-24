/* eslint-disable import/no-named-as-default */
import {NavLink, Route, Switch} from "react-router-dom";

//import AboutPage from "./AboutPage";
//import FuelSavingsPage from "./containers/FuelSavingsPage";
//import HomePage from "./HomePage";
//import NotFoundPage from "./NotFoundPage";
import PropTypes from "prop-types";
import React from "react";
import {hot} from "react-hot-loader";
import HomePage from "./homepage/HomePage";
//import BullsServices from "./homepage/BullsServices";
import Slider from "./homepage/Slider";
//import BullsText from "./homepage/BullsText";
//import SocialGrids from "./homepage/SocialGrids";
//import JarallaxHistory from "./homepage/JarallaxHistory";
import Footer from "./common/Footer";
import Copyrights from "./common/Copyrights";
import MainMenu from "./common/MainMenu";
import HomeMenu from "./homepage/HomeMenu";

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.


class App extends React.Component {
  render() {
    const activeStyle = {color: '#B6D941'};
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomeMenu}/>
        </Switch>

        <Switch>
          <Route exact path="/" component={HomePage}/>
        </Switch>

        <div className="clearfix"></div>
        <Footer activeStyle={activeStyle}/>

        <Copyrights/>



      </div>
    );
  }
}


App.propTypes = {
  children: PropTypes.element
};

export default hot(module)(App);
