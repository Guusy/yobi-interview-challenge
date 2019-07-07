import createSagaMiddleware from 'redux-saga';

import {
    applyMiddleware,
    createStore,
} from 'redux';

import reducers from './reducers/';

export default function configureStore(initialState, mainSaga) {
    const sagaMiddleware = createSagaMiddleware();

    const middleware = applyMiddleware(
        sagaMiddleware,
    );

    const store = createStore(
        reducers,
        initialState,
        middleware,
    );

    sagaMiddleware.run(mainSaga);

    return { store };
}
