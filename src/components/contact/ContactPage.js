import React from "react";

import ContactMapsIFrame from "./ContactMapsIFrame";

const ContactPage = () => {
  return (
    <div>
      <div className="contact">
        <div className="container">
          <div className="agile-contact-form">
            <div className="row">
              <div className="col-md-5">
                <img src="images/come-contattarci.jpg" className="img-responsive center-block"/>
              </div>
            <div className="col-md-7 contact-form-left">
              <div className="w3layouts-contact-form-top">
                <h3>I nostri contatti</h3>
              </div>
              <div className="agileits-contact-address">
                <ul>
                  <li><i className="fa fa-phone" aria-hidden="true"></i> <span><a href="tel:+393939972877">Andrea Mirabelli +39 393 9972877</a></span>
                  </li>
                  <li><i className="fa fa-phone" aria-hidden="true"></i> <span><a href="tel:+393493582901">Stefano Masiello +39 349 3582901</a></span>
                  </li>
                  <li><i className="fa fa-phone fa-envelope" aria-hidden="true"></i> <span><a href="mailto:bullstorinopowerlifting@gmail.com">bullstorinopowerlifting@gmail.com</a></span>
                  </li>
                  <li><i className="fa fa-map-marker" aria-hidden="true"></i> <span>Via Gioachino Quarello 15/A - 10135 Torino c/o CUS TORINO</span>
                  </li>
                </ul>
              </div>
            </div>




            <div className="clearfix"></div>
          </div>
          </div>
          <div className="w3agile-map">
            <h3>Dove trovarci</h3>
            <p>
              La nostra tana si trova in Via Gioachino Quarello 15/A c/o CUS Torino. Usa la mappa sottostante per
              raggiungerci.
            </p>
            <ContactMapsIFrame></ContactMapsIFrame>
          </div>
        </div>
      </div>
    </div>
  );
};

ContactPage.propTypes = {
  /*  activeStyle: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired*/
};


export default ContactPage;
