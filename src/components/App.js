/* eslint-disable import/no-named-as-default */
import {Route, Switch} from "react-router-dom";

import PropTypes from "prop-types";
import React from "react";
import {hot} from "react-hot-loader";
import HomePage from "./homepage/HomePage";
import Header from "./common/Header";
import Footer from "./common/Footer";
import Copyrights from "./common/Copyrights";
import HomeMenu from "./homepage/HomeMenu";
import AboutPage from "./about/AboutPage";
import TrainingPage from "./training/TrainingPage";
import ContactPage from "./contact/ContactPage";
import GalleryPage from "./gallery/GalleryPage";
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
          <Route path="/about" render={() => <Header activeStyle={activeStyle} title={{value: "Chi siamo"}}/>}/>
          <Route path="/gallery" render={() => <Header activeStyle={activeStyle} title={{value: "Galleria"}}/>}/>
          <Route path="/training" render={() => <Header activeStyle={activeStyle} title={{value: "Allenamento"}}/>}/>
          <Route path="/mail" render={() => <Header activeStyle={activeStyle} title={{value: "Scrivici"}}/>}/>
        </Switch>

        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/about" component={AboutPage}/>
          <Route exact path="/training" component={TrainingPage}/>
          <Route exact path="/mail" component={ContactPage}/>
          <Route exact path="/gallery" component={GalleryPage}/>
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
