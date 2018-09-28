import React from "react";
//import PropTypes from "prop-types";
import AboutTop from "./AboutTop";
import AboutChoose from "./AboutChoose";


const AboutPage = () => {
  return (
    <div>
      <AboutTop/>
      <AboutChoose/>
    </div>
  );
};

AboutPage.propTypes = {
/*  activeStyle: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired*/
};



export default AboutPage;
