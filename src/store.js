import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import {
  applyMiddleware,
  createStore,
} from 'redux';

import reducers from './reducers';

export default function configureStore(initialState, mainSaga) {
  const sagaMiddleware = createSagaMiddleware();

  const middleware = applyMiddleware(
    sagaMiddleware,

  );

  const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(middleware),
  );

  sagaMiddleware.run(mainSaga);

  return { store };
}
