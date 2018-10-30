import React from "react";


const GalleryPage = () => {
  return (
    <div>
      <div className="container gallery-style">
        <div className="row">

          <div className="col-md-4">
            <a href="images/g2.jpg" className="big"><img src="images/g2.jpg" alt=""/></a>
          </div>
          <div className="col-md-4">
            <a href="images/g6.jpg" className="big"><img src="images/g6.jpg" alt=""/></a>
          </div>
          <div className="col-md-4">
            <a href="images/g4.jpg" className="big"><img src="images/g4.jpg" alt=""/></a>
          </div>

        </div>
          <div className="row gallery-style">
            <div className="col-md-4">
              <a href="images/g7.jpg" className="big"><img src="images/g7.jpg" alt=""/></a>
            </div>
            <div className="col-md-4">
              <a href="images/g8.jpg" className="big"><img src="images/g8.jpg" alt=""/></a>
            </div>
            <div className="col-md-4">
              <a href="images/g10.jpg" className="big"><img src="images/g10.jpg" alt=""/></a>
            </div>
          </div>

            <div className="row gallery-style">
              <div className="col-md-4">
                <a href="images/g11.jpg" className="big"><img src="images/g11.jpg" alt=""/></a>
              </div>
              <div className="col-md-4">
                <a href="images/g12.jpg" className="big"><img src="images/g12.jpg" alt=""/></a>
              </div>
              <div className="col-md-4">
                <a href="images/g13.jpg" className="big"><img src="images/g13.jpg" alt=""/></a>
              </div>
            </div>

              <div className="row gallery-style margin-bottom">
                <div className="col-md-4">
                  <a href="images/g14.jpg" className="big"><img src="images/g14.jpg" alt=""/></a>
                </div>
                <div className="col-md-4">
                  <a href="images/g15.jpg" className="big"><img src="images/g15.jpg" alt=""/></a>
                </div>
                <div className="col-md-4">
                  <a href="images/g16.jpg" className="big"><img src="images/g16.jpg" alt=""/></a>
                </div>
              </div>
      </div>
    </div>
  );
};

GalleryPage.propTypes = {
  /*  activeStyle: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired*/
};


export default GalleryPage;
