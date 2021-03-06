/* eslint-disable import/default */

import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';


import configureStore, { history } from './store/configureStore';
import Root from './components/Root';
import './styles/bootstrapImport.scss';
import './styles/fontAwesomeImport.scss';
import './styles/styles.scss';
import './styles/miFix.scss';

import './styles/table-style.scss';
import './styles/basictable.scss';
import './styles/lightbox2import.scss';

import './scripts/scripts';

 // Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.

require('./favicon.ico'); // Tell webpack to load favicon.ico
const store = configureStore();


render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./components/Root', () => {
    const NewRoot = require('./components/Root').default;
    render(
      <AppContainer>
        <NewRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById('app')
    );
  });
}



