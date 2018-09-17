/* eslint-disable import/no-named-as-default */
import {NavLink/*, Route, Switch*/} from "react-router-dom";

//import AboutPage from "./AboutPage";
//import FuelSavingsPage from "./containers/FuelSavingsPage";
//import HomePage from "./HomePage";
//import NotFoundPage from "./NotFoundPage";
import PropTypes from "prop-types";
import React from "react";
import {hot} from "react-hot-loader";
import BullsServices from "./HomePage/BullsServices";
import Slider from "./HomePage/Slider";
import BullsText from "./HomePage/BullsText";
import SocialGrids from "./HomePage/SocialGrids";
import JarallaxHistory from "./HomePage/JarallaxHistory";
import FbIFrame from "./HomePage/FbIFrame";
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
        <div className="footer">
          <div className="container">
            <div className="row agile-footer-grids">

              <div className="col-md-3 w3-agile-footer-grid">
                <h3>Chi siamo</h3>
                <p>Siamo una squadra di powerlifting attiva da oltre 10 anni e mettiamo sempre passione in ciò che
                  facciamo per assicurare la massima qualità d&rsquo;allenamento ai nostri atleti</p>
              </div>
              <div className="col-md-3 w3-agile-footer-grid">
                <h3>Menù</h3>
                <ul>
                  <li className="text"><a href="index.html">Home</a></li>
                  <li className="text"><a href="about.html">Chi siamo</a></li>
                  <li className="text"><a href="gallery.html">Gallery</a></li>
                  <li className="text"><a href="training.html">Allenamento</a></li>
                  <li className="text"><a href="mail.html">Scrivici</a></li>

                </ul>
              </div>
              <div className="col-md-3 w3-agile-footer-grid">
                <h3>Seguici sui nostri social</h3>
                <FbIFrame/>
              </div>


            </div>
          </div>
        </div>


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