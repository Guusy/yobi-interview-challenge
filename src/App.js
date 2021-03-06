import React, { Component } from 'react';
import './App.css';

import { Provider } from 'react-redux';
import {
  HashRouter,
  Route,
} from 'react-router-dom';
import rootSaga from './sagas';
import configureStore from './store';

import Products from './pages/products/ProductsPageContainer';


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
