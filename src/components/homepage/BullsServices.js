import React from 'react';

const BullsServices = () => {
  return (
    <div>
      <div className="services">
        <div className="container">
          <div className="w3layouts-services-heading">
            <h2>Cosa facciamo</h2>
          </div>
          <div className="w3-services-grids">
            <div className="row">
              <div className="col-md-4 w3l-services-grid">
                <div className="w3ls-services-img">
                  <img src="images/squat.png" className="img-responsive center-block"></img>
                </div>
                <div className="agileits-services-info">
                  <h4>Squat</h4>
                  <p>Ti verrà insegnata la tecnica principale di ogni alzata. Partendo da squat sarai in grado di
                    aumentare la forza in una delle alzate più difficili del powerlifting. Da posizione eretta, con
                    un peso sulle spalle si dovrà scendere fino ad arrivare al parallelo e risalire. </p>
                </div>
              </div>
              <div className="col-md-4 w3l-services-grid">
                <div className="w3ls-services-img">
                  <img src="images/bench.png" className="img-responsive center-block"></img>
                </div>
                <div className="agileits-services-info">
                  <h4>Bench press</h4>
                  <p>La seconda alzata sarà la panca piana. In posizione sdraiata, si effetturà un movimento di
                    spinta. Verrà curata la tecnica, estremamente importante, la respirazione, la posizione dei
                    piedi, gomiti, polsi e molto altro per avere sempre di più un&#39;alzata perfetta sotto ogni punto
                    di vista. </p>
                </div>
              </div>
              <div className="col-md-4 w3l-services-grid">
                <div className="w3ls-services-img">
                  <img src="images/deadlift.png" className="img-responsive center-block"></img>
                </div>
                <div className="agileits-services-info">
                  <h4>Deadlift</h4>
                  <p>Stacco sumo o stacco tradizional a seconda della posizione delle gambe. Anche in questa alzata
                    verrà curata la tecnica in tutti i suoi particolari, dalla posizione dei piedi, alla
                    respirazione alla schiena. Il tutto in tutta sicurezza ovviamente migliorando la
                    performance.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="clearfix"></div>
        </div>
      </div>


    </div>
  );
};

export default BullsServices;
