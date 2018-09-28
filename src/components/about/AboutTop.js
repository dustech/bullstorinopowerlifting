import React from "react";

const AboutTop = () => {

  return (
  <div className="agileits-about-top">
    <div className="container">
      <div className="agileits-about-top-heading">
        <h3>Cos'è il powerlifting?</h3>
      </div>
      <div className="agileinfo-top-grids row">
        <div className="col-sm-6 wthree-top-grid">
          <img src="images/r1.jpg" alt=""/>
          <h4>Powerlifting Gear</h4>
          <p>Il powerlifting si suddivide in 2 parti: Gear e Raw. Rispettivamente attrezzato e senza attrezzatura. In
            foto
            l'atleta indossa un corpetto da gara. Dunque per la pratica del gear sono necessarie delle attrezzature per
            squat, panca piana e stacco da terra.</p>
        </div>
        <div className="col-sm-6 wthree-top-grid">
          <img src="images/r3.jpg" alt=""/>
          <h4>Powerlifting Raw</h4>
          <p>Il powerlifing è come una medaglia. Di conseguenza il raw è l'altra faccia della medaglia: senza
            attrezzatura. Di norma per gareggiare serve solo un singlet da gara approvato IPF. In conclusione nel raw
            non
            serve nessuna attrezzatura come la maglia da panca piana gear o corpetti da stacco e squat.</p>
        </div>
        <div className="clearfix"></div>
      </div>
    </div>
  </div>);

};

export default AboutTop;
