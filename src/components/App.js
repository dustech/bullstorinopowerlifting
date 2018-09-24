/* eslint-disable import/no-named-as-default */
import {Route, Switch} from "react-router-dom";

import PropTypes from "prop-types";
import React from "react";
import {hot} from "react-hot-loader";
import HomePage from "./homepage/HomePage";
import AboutPage from "./about/AboutPage";
import Footer from "./common/Footer";
import Copyrights from "./common/Copyrights";
import HomeMenu from "./homepage/HomeMenu";

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.


class App extends React.Component {
  render() {
    const activeStyle = {color: '#B6D941'};
    return (
      <div>
        <Switch>
          <Route exact path="/" render={() => <HomeMenu activeStyle={activeStyle}/>}/>
        </Switch>

        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/about" component={AboutPage}/>
        </Switch>

        <div className="clearfix"></div>
        <Footer activeStyle={activeStyle}/>

        <Copyrights/>



      </div>
    );
  }
}


App.propTypes = {
  children: PropTypes.element
};

export default hot(module)(App);
