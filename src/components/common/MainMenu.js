import {NavLink} from "react-router-dom";
import React from "react";
import PropTypes from 'prop-types';
import bindMenu from '../../scripts/bindMenu';


class MainMenu extends React.Component {

  componentDidMount(){
   bindMenu();
  }

  render() {

    return (
      <nav>
        <ul>
          <li className={this.props.liClass}>
            <NavLink exact to="/" activeStyle={this.props.activeStyle}><span>Home</span></NavLink>
          </li>
          <li className={this.props.liClass}>
            <NavLink exact to="/about" activeStyle={this.props.activeStyle}><span>Chi siamo</span></NavLink>
          </li>
          <li className={this.props.liClass}>
            <NavLink exact to="/gallery" activeStyle={this.props.activeStyle}><span>Gallery</span></NavLink>
          </li>
          <li className={this.props.liClass}>
            <NavLink exact to="/training" activeStyle={this.props.activeStyle}><span>Allenamento</span></NavLink>
          </li>
          <li className={this.props.liClass}>
            <NavLink exact to="/mail" activeStyle={this.props.activeStyle}><span>Scrivici</span></NavLink>
          </li>
        </ul>
      </nav>

    );
  }

}
/*

const MainMenu = ({activeStyle,liClass}) => {


};
*/

MainMenu.propTypes = {
  activeStyle: PropTypes.object.isRequired,
  liClass: PropTypes.string
}

export default MainMenu;

