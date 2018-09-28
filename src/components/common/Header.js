import React from "react";
import MainMenu from "../common/MainMenu";
import PropTypes from "prop-types";
import {NavLink} from "react-router-dom";


const Header = ({activeStyle,title}) => {

  return (
    <div>
      <div className="banner bg-about">
        <div className="header-top about-header-top">
          <div className="container banner-drop">
            <div className="agile-logo">
              <h1><NavLink exact to="/">Bulls<span>Torino Powerlifting</span></NavLink></h1>
            </div>
            <div className="header-right">
              <MainMenu activeStyle={activeStyle} />
              <div className="menu-icon"><span></span></div>
            </div>
            <div className="clearfix"></div>

          </div>
        </div>
        <div className="w3ls-heading">
          <h2>{title.value}</h2>
        </div>
      </div>
    </div>

  );
};

Header.propTypes = {
  activeStyle: PropTypes.object.isRequired,
  title: PropTypes.object.isRequired
};



export default Header;
