/* eslint-disable import/no-named-as-default */
import {NavLink/*, Route, Switch*/} from "react-router-dom";

//import AboutPage from "./AboutPage";
//import FuelSavingsPage from "./containers/FuelSavingsPage";
//import HomePage from "./HomePage";
//import NotFoundPage from "./NotFoundPage";
import PropTypes from "prop-types";
import React from "react";
import {hot} from "react-hot-loader";
import BullsServices from "./homepage/BullsServices";
import Slider from "./homepage/Slider";
import BullsText from "./homepage/BullsText";
import SocialGrids from "./homepage/SocialGrids";
import JarallaxHistory from "./homepage/JarallaxHistory";
import Footer from "./common/Footer";


// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.


class App extends React.Component {
  render() {
    const activeStyle = {color: '#B6D941'};
    return (
      <div>
        <div className="banner">
          <div className="w3ls-slider">
            <div className="header-top">
              <div className="container banner-drop">
                <div className="agile-logo">
                  <h1><NavLink exact to="/">Bulls<span>Torino Powerlifting</span></NavLink></h1>
                </div>
                <div className="header-right">
                  <nav>
                    <ul>
                      <li>
                        <NavLink exact to="/" activeStyle={activeStyle}><span>Home</span></NavLink>
                      </li>
                      <li>
                        <a href="about.html"><span>Chi siamo</span></a>
                      </li>
                      <li>
                        <a href="gallery.html"><span>Gallery</span></a>
                      </li>
                      <li>
                        <a href="training.html"><span>Allenamento</span></a>
                      </li>
                      <li>
                        <a href="mail.html"><span>Scrivici</span></a>
                      </li>
                    </ul>
                  </nav>
                  <div className="menu-icon"><span></span></div>
                </div>
                <div className="clearfix"></div>

              </div>
            </div>
            <BullsText/>
            <Slider/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>


          </div>

        </div>

        <SocialGrids/>
        <BullsServices/>

        <JarallaxHistory/>

        <div className="clearfix"></div>
        <Footer/>


        <div className="copyright">
          <div className="container">
            <p>© 2018 TORINO BULLS POWERLIFTING DI MIRABELLI ANDREA. P. Iva 11371840015 | All Rights Reserved | Design
              by </p>
          </div>
        </div>


      </div>
    );
  }
}


App.propTypes = {
  children: PropTypes.element
};

export default hot(module)(App);
