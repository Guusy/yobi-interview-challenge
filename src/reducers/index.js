import { combineReducers } from 'redux';
import productsReducer from './products';

export const appReducer = combineReducers({
    products: productsReducer,
});

export default (state, action) => {
    return appReducer(state, action);
};
