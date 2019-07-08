import React, { Component } from 'react';
import './App.css';

import { Provider } from 'react-redux';
import rootSaga from './sagas';
import configureStore from './store';

import Products from './containers/Products';

import {
  HashRouter,
  Route,
} from 'react-router-dom';

const { store } = configureStore(
  window.__INITIAL_STATE__,
  rootSaga,
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <div>
            <Route exact path="/" component={Products} />
          </div>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
