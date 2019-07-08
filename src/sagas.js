import { fork, take, call, takeEvery, put } from 'redux-saga/effects';
import ProductsService from './services/ProductsService';
import { setProducts, startFetching, finishFetching, setError } from './actions'
export function* getProducts() {
    yield put(startFetching);

    const { response, error } = yield call(ProductsService.getProducts);

    yield put(finishFetching);

    if (response) {
        yield put(setProducts(response.data));
    } else {
        yield put(setError);
    }

}

export default function* rootSaga() {
    yield takeEvery("GET_PRODUCTS_REQUEST", getProducts);

}
