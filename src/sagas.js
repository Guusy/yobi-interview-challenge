import { fork, take, call, takeEvery, put } from 'redux-saga/effects';
import ProductsService from './services/ProductsService';
import { setProducts, startFetching } from './actions'
export function* getProducts() {
    yield put(startFetching);

    const { response, error } = yield call(ProductsService.getProducts);
    if (response) {
        yield put(setProducts(response.data));
    } else {
        console.log("error", error)
        // yield put(someErrorResponseActionHere());
    }

}

export default function* rootSaga() {
    yield takeEvery("GET_PRODUCTS_REQUEST", getProducts);

}
