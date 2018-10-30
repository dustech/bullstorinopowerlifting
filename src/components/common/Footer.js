import FbIFrame from "../homepage/FbIFrame";
import React from "react";
import PropTypes from 'prop-types';
import MainMenu from "./MainMenu";

const Footer = ({activeStyle}) => {
  return (
    <div>
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
              <MainMenu activeStyle={activeStyle} liClass="text"/>
            </div>
            <div className="col-md-3 w3-agile-footer-grid">
              <h3>Seguici sui nostri social</h3>
              <FbIFrame/>
            </div>
            <div className="col-md-3 w3-agile-footer-grid">
              <a href="https://www.iubenda.com/privacy-policy/92453946"
                 className="iubenda-black no-brand iubenda-embed " title="Privacy Policy">Privacy Policy</a>
              <br/>
              <a href="https://www.iubenda.com/privacy-policy/92453946/cookie-policy"
                 className="iubenda-black no-brand iubenda-embed " title="Cookie Policy">Cookie Policy</a>


            </div>
          </div>
        </div>
      </div>
    </div>

  );

};

Footer.propTypes = {
  activeStyle: PropTypes.object.isRequired
};


export default Footer;
