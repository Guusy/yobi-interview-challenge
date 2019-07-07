import { fork, take, call, takeEvery, put } from 'redux-saga/effects';
import axios from 'axios'
// This is an example function of how we use our sagas to
// make HTTP requests and handle actions.

function fetchProductsApi() {
    return axios.get('https://yobi-interview-api.herokuapp.com/products')
        .then(response => ({ response }))
        .catch(error => ({ error }))
}
export function* exampleSaga() {
    const { response, error } = yield call(fetchProductsApi);

    if (response) {
        console.log(response.data)
        yield put({ type: "_" });
    } else {
        console.log("error", error)
        // yield put(someErrorResponseActionHere());
    }

}

export default function* rootSaga() {
    yield takeEvery("GET_PRODUCTS_REQUEST", exampleSaga);

}
