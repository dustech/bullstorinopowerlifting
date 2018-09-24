import {NavLink} from "react-router-dom";
import React from "react";
import PropTypes from 'prop-types';

const MainMenu = ({activeStyle,liClass}) => {

  return (
    <nav>
      <ul>
        <li className={liClass}>
          <NavLink exact to="/" activeStyle={activeStyle}><span>Home</span></NavLink>
        </li>
        <li>
          <a href="/about"><span>Chi siamo</span></a>
        </li>
        <li>
          <a href="gallery.html"><span>Gallery</span></a>
        </li>
        <li>
          <a href="training.html"><span>Allenamento</span></a>
        </li>
        <li>
          <a href="mail.html"><span>Scrivici</span></a>
        </li>
      </ul>
    </nav>

  );

};

MainMenu.propTypes = {
  activeStyle: PropTypes.object.isRequired
}

export default MainMenu;

