import React from "react";
//import PropTypes from "prop-types";
import AboutTop from "./AboutTop";
import AboutChoose from "./AboutChoose";
import AboutTeam from "./AboutTeam";

const AboutPage = () => {
  return (
    <div>
      <AboutTop/>
      <AboutChoose/>
      <AboutTeam />
    </div>
  );
};

AboutPage.propTypes = {
/*  activeStyle: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired*/
};



export default AboutPage;
