import React from 'react';
import {NavLink} from "react-router-dom";

const JarallaxHistory = () => {
  return (
    <div>

      <div className="jarallax history">
        <div className="container">
          <div className="agileinfo-history-grids">
            <div className="slider">
              <div className="callbacks_container">
                <ul className="rslides" id="slider3">
                  <li>
                    <div className="wthree-history-info">
                      <h4>Aumenta la tua forza allenandoti con noi!</h4>
                      <p>Vuoi diventare più forte e migliorare la tua forza nelle tre alzate del powerlifting? Allenati
                        con
                        noi. Coach esperti a tua dispozione per migliorare la tecnica di ogni alzata.</p>
                      <NavLink exact to="/about">Allenati con noi!</NavLink>
                    </div>
                  </li>
                  <li>
                    <div className="wthree-history-info">
                      <h4>Classi di powerlifting ti aspettano!</h4>
                      <p>Allenamenti specifici per ogni atleta in base alle proprie esigenze. Allenamenti effettuati
                        singoli o
                        in gruppo con l&rsquo;allenatore che spiegherà la tecnica di ogni alzata.</p>
                      <NavLink exact to="/about">Allenati con noi!</NavLink>
                    </div>
                  </li>
                  <li>
                    <div className="wthree-history-info">
                      <h4>Vieni a trovarci al CUS Torino</h4>
                      <p>Sede del CUS in Via Quarello 15/A. Che aspetti?</p>
                      <NavLink exact to="/about">Allenati con noi!</NavLink>
                    </div>
                  </li>
                </ul>
              </div>
            </div>


          </div>
        </div>

      </div>

    </div>

  );

};
export default JarallaxHistory;

