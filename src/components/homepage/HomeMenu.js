
import MainMenu from "../common/MainMenu";
import Slider from "./Slider";
import React from "react";
import PropTypes from "prop-types";


const HomeMenu = ({activeStyle}) => {

  return (
    <div>
      <div className="banner">
        <div className="w3ls-slider">
          <div className="header-top">
            <div className="container banner-drop">
              <div className="agile-logo">
                <img src="images/logo-bulls.png" alt="bull-powerlifting-torino"/>
              </div>
              <div className="header-right">
                <MainMenu activeStyle={activeStyle}/>
                <div className="menu-icon"><span></span></div>
              </div>
              <div className="clearfix"></div>

            </div>
          </div>
          <Slider/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
        </div>

      </div>
    </div>
  );

};

HomeMenu.propTypes = {
  activeStyle: PropTypes.object.isRequired
};

export default HomeMenu;
