import { getProducts } from './sagas';
import ProductsService from './services/ProductsService';
import { startFetching, finishFetching } from './actions';
import { fork, take, call, takeEvery, put } from 'redux-saga/effects';

describe('getProducts', () => {
    describe('when the service of get products responses ok', () => {
        const gen = getProducts();
        it('call the action START_FETCHING', () => {
            expect(gen.next().value).toEqual(put(startFetching))
        });
        it('start api calls', () => {
            expect(gen.next().value).toEqual(call(ProductsService.getProducts))
        })
        it('call the action FINISH_FETCHING', () => {
            expect(gen.next().value).toEqual(put(finishFetching))
        });
    })

})