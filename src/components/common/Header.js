import React from "react";
import MainMenu from "../common/MainMenu";
import PropTypes from "prop-types";


const Header = ({activeStyle},{title}) => {
  return (
    <div>
      <div className="banner bg-about">
        <div className="header-top about-header-top">
          <div className="container banner-drop">
            <div className="agile-logo">
              <h1><a href="index.html">Bulls<span>Torino Powerlifting</span></a></h1>
            </div>
            <div className="header-right">
              <MainMenu activeStyle={activeStyle} />
              <div className="menu-icon"><span></span></div>
            </div>
            <div className="clearfix"></div>

          </div>
        </div>
        <div className="w3ls-heading">
          <h2>{title}</h2>
        </div>
      </div>
    </div>

  );
};

Header.propTypes = {
  activeStyle: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired
};



export default Header;
