import React from 'react';

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
                    <a href="about.html">Scopri di più</a>
                  </div>
                </li>
                <li>
                  <div className="w3ls-text">
                    <p>Allenati con noi sulle alzate fondamentali del powerlifting</p>
                    <a href="about.html">Scopri di più</a>
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
