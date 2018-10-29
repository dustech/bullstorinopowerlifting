import React from 'react';
import {NavLink} from "react-router-dom";


const Slider = () => {
  return (

    <div>

      <div className="w3l-banner-grids">
        <div className="container">
          <div className="slider">
            <div className="callbacks_container">
              <ul className="rslides" id="slider4">
                <li>
                  <div className="w3ls-text">
                    <p>Torino Powerlifting</p>
                    <NavLink exact to="/about">Scopri di più</NavLink>
                  </div>
                </li>
                <li>
                  <div className="w3ls-text">
                    <p>Allenati con noi sulle alzate fondamentali del powerlifting</p>
                    <NavLink exact to="/about">Scopri di più</NavLink>
                  </div>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </div>
      <div className="clearfix"></div>
    </div>

  );
};

export default Slider;
