import { createAction } from 'redux-actions';

export const GET_PRODUCTS_REQUEST = 'GET_PRODUCTS_REQUEST';
export const GET_PRODUCTS_REQUEST_SUCCESS = 'GET_PRODUCTS_REQUEST_SUCCESS';
export const GET_PRODUCTS_REQUEST_FAILURE = 'GET_PRODUCTS_REQUEST_FAILURE';

export const getProductsRequest = createAction(GET_PRODUCTS_REQUEST);
export const getProductsRequestSuccess = createAction(GET_PRODUCTS_REQUEST_SUCCESS);
export const getProductsRequestFailure = createAction(GET_PRODUCTS_REQUEST_FAILURE);
