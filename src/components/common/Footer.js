import FbIFrame from "../homepage/FbIFrame";
import React from "react";
import {string as stringa} from 'prop-types';
import {NavLink} from "react-router-dom";

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
    </div>

  );

};

Footer.propTypes = {
  activeStyle: stringa.isRequired
};


export default Footer;
