import React from "react";
import AboutCoach from "./AboutCoach";

const AboutTeam = () => {

  return (
    <div>
      <div className="team">
        <div className="container">
          <div className="agileits-about-top-heading">
            <h3>I nostri allenatori</h3>
          </div>
          <div className="team-grids row">
            <div className="col-sm-1 team-grid">
            </div>
            <div className="col-sm-5 team-grid">
              <AboutCoach image="images/t2.jpg"
                          name="Andrea Mirabelli"
                          facebookLink="https://www.facebook.com/amirabelli2"
              instagramLink="https://www.instagram.com/andre_doc_bulls/?hl=it" />
            </div>
            <div className="col-sm-5 team-grid">
              <AboutCoach image="images/t3.jpg"
                          name="Stefano Masiello"
                          facebookLink="https://www.facebook.com/stefano.masiello.3"
                          instagramLink="https://www.instagram.com/ste_duca/" />
            </div>
            <div className="col-sm-1 team-grid">
            </div>
          </div>
          <div className="clearfix"></div>
        </div>
      </div>
    </div>);

};

  export default AboutTeam;
