import { getProducts } from './sagas';
import ProductsService from './services/ProductsService';
import { startFetching } from './actions';
import { fork, take, call, takeEvery, put } from 'redux-saga/effects';

describe('getProducts', () => {
    describe('when the service of get products responses ok', () => {
        beforeAll(() => {
            ProductsService.getProducts = () => ({ response: { data: [{ id: 0 }] } })
        })
        it('call the action START_PROCESSING', () => {
            const gen = getProducts();
            expect(gen.next().value).toEqual(put(startFetching))
        });
    })

})