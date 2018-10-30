import React from "react";
import {NavLink} from "react-router-dom";
//import PropTypes from "prop-types";

const TrainingPage = () => {
  return (
    <div>
      <div className="training">
        <div className="w3l-training-grids">
          <div className="container">
            <div className="w3-training-heading">
              <h3>Scopri il vero powerlifting a Torino</h3>
            </div>
            <div className="w3ls-training-grids row">
              <div className="col-md-8 agileits-training-left">
                <h4>Bulls powerlifing Torino</h4>
                <p>Siamo da più di 10 anni nel campo del powerlifing e gareggiamo nelle principali federazioni tra cui
                  FIPL, FIPE, WDPF, WEC. Scopri, inoltre, i nostri allenamenti al femminile. Classi di powerlifing per
                  sole donne con le atlete più forti della squadra.</p>
                <NavLink exact to="/mail" ><span>Scrivici</span></NavLink>
              </div>
              <div className="col-md-4 agileits-training-right">
                <img src="images/girlpl.jpg" alt=""/>
              </div>
              <div className="clearfix"></div>
            </div>
          </div>
        </div>
        <div className="w3layouts-training-top">
          <div className="container">
            <div className="w3-training-heading schedule-heading">
              <h3>Prezzi</h3>

            <table className="tg">
              <tbody>
              <tr>
                <th className="tg-yj2n" colSpan="4">ESTERNI</th>
                <th className="tg-35ul" colSpan="4">UNIVERSITARI/CONVENZIONATI</th>
              </tr>
              <tr>
                <td className="tg-q3eh">1 MESE / 10 INGRESSI</td>
                <td className="tg-q3eh">3 MESI</td>
                <td className="tg-q3eh">6 MESI</td>
                <td className="tg-q3eh">12 MESI</td>
                <td className="tg-q3eh">1 MESE/ 10 INGRESSI</td>
                <td className="tg-q3eh">3 MESI</td>
                <td className="tg-q3eh">6 MESI</td>
                <td className="tg-q3eh">12 MESI</td>
              </tr>
              <tr>
                <td className="tg-baqh">50€</td>
                <td className="tg-baqh">100€</td>
                <td className="tg-baqh">200€</td>
                <td className="tg-baqh">300€</td>
                <td className="tg-baqh">45€</td>
                <td className="tg-baqh">90€</td>
                <td className="tg-baqh">180€</td>
                <td className="tg-baqh">280€</td>
              </tr>
              </tbody>
            </table>
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
                  Torino e potrai richiedere la tessera gratuitamente. Che aspetti? Powerlifing con il CUS conviene. Approfitta dello sconto per studenti!</p>
              </div>
              <div className="col-md-12 wthree-training-bottom">
                <img src="images/gear.jpg" alt=""/>
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
