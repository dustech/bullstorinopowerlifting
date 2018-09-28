import React from "react";
import jarallax from 'jarallax';
import bindJarallax from "../../scripts/bindJarallax";

class AboutChoose extends React.Component {

  componentDidMount() {
    bindJarallax(jarallax.jarallax);
  }

  render() {
    return (
    <div>
      <div className="jarallax w3-agileits-choose">
        <div className="container">
          <div className="agileits-about-top-heading agileits-w3layouts-choose-heading">
            <h3>Perché sceglierci?</h3>
          </div>
          <div className="agile-choose-grids row">
            <div className="col-sm-4 agile-choose-grid">
              <div className="choose-icon">
                <i className="fa fa-user" aria-hidden="true"></i>
              </div>
              <div className="choose-info">
                <h4>Qualità in ogni allenamento</h4>
                <p>Attenzione estrema nella tecnica di ogni alzata del powerlifting. Partendo da zero fino ad ottenere
                  il
                  massimo.</p>
              </div>
            </div>
            <div className="col-sm-4 agile-choose-grid">
              <div className="choose-icon">
                <i className="fa fa-cogs" aria-hidden="true"></i>
              </div>
              <div className="choose-info">
                <h4>Tecnica in ogni alzata</h4>
                <p>Curiamo la tecnica in tutte le alzate del powerlifting. Attenzione ai particolari di ogni alzata per
                  rendere efficace ogni allenamento.</p>
              </div>
            </div>
            <div className="col-sm-4 agile-choose-grid">
              <div className="choose-icon">
                <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
              </div>
              <div className="choose-info">
                <h4>Allenamenti personalizzati per ogni atleta</h4>
                <p>Protocolli di allenamento personalizzati per ogni atleta in base alle esigenze dello stesso e al
                  periodo di
                  allenamento.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )}

}

export default AboutChoose;
