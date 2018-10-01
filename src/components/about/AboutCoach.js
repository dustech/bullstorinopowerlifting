import React from "react";

const AboutCoach = ({image, name, facebookLink, instagramLink}) => {

  return (
    <div>
      <div className="ih-item circle effect10 bottom_to_top">
        <div className="img"><img src={image} alt="img"/></div>
        <div className="info">
          <h3>{name}</h3>
          <div className="icons">
            <ul>
              <li><a href={facebookLink}><i className="fa fa-facebook"></i></a></li>
              <li><a href={instagramLink}><i className="fa fa-instagram"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>);
};

export default AboutCoach;
