import React from "react";
import {NavLink} from "react-router-dom";
//import PropTypes from "prop-types";

const TrainingPage = () => {
  return (
    <div>
      <div className="training">
        <div className="w3l-training-grids">
          <div className="container">

            <div className="w3ls-training-grids row">
              <div className="col-md-8 agileits-training-left">
                <div className="w3-training-heading">
                  <h2 className="text">Scopri il vero powerlifting a Torino</h2>
                </div>
                <h4>Bulls powerlifting Torino</h4>
                <p>Siamo da più di 10 anni nel campo del powerlifing e gareggiamo nelle principali federazioni tra cui
                  FIPL, FIPE, WDPF, WEC. Scopri, inoltre, i nostri allenamenti al femminile. Classi di powerlifing per
                  sole donne con le atlete più forti della squadra. Diffida da chi dice &quote;una donna che si allena con i pesi diventa muscolosa come un uomo.&quote;
                  Inizia ad allenarti con noi. Non te ne pentirai!</p>
                <NavLink exact to="/mail" ><span>Scrivici</span></NavLink>
              </div>
              <div className="col-md-4 agileits-training-right">
                <img src="images/girlpl.jpg" alt="atleta plurimedagliata di powerlifting" title="atleta plurimedagliata di powerlifting"/>
              </div>
              <div className="clearfix"></div>
            </div>
          </div>
        </div>
        <div className="agileinfo-training-bottom">
          <div className="container">
            <div className="w3-training-heading">
              <h3>CUS card Torino</h3>
            </div>
            <div className="wthree-training-bottom-grids">
              <div className="col-md-12 wthree-training-bottom">
                <h4>Richiedi la tua CUS card</h4>
                <p>Richiedi la tua CUS card per avere delle promozioni in segreteria oppure tramite il sito ufficiale CUS
                  Torino e potrai richiedere la tessera gratuitamente. Che aspetti? Powerlifing con il CUS conviene. Approfitta dello sconto per studenti!
                  Per informazioni, visita il sito del CUS Torino</p>
              </div>
              <div className="col-md-12 wthree-training-bottom">
                <img src="images/cuscard.jpg" alt="cus card torino powerlifting" title="cus card torino powerlifting"/>
              </div>
              <div className="clearfix"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

TrainingPage.propTypes = {
/*  activeStyle: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired*/
};



export default TrainingPage;
