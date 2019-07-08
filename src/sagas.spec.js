import { getProducts } from './sagas';
import ProductsService from './services/ProductsService';
import { startFetching, finishFetching, setProducts, setError } from './actions';
import { call, put } from 'redux-saga/effects';

describe('getProducts', () => {
    describe('when the service of get products responses ok', () => {
        let gen = getProducts();
        const responseProducts = { data: [{ id: 0 }] }

        it('call the action START_FETCHING', () => {
            expect(gen.next().value).toEqual(put(startFetching))
        });
        it('and start api calls', () => {
            expect(gen.next().value).toEqual(call(ProductsService.getProducts))
        })
        it('call the action FINISH_FETCHING', () => {
            expect(gen.next({ response: responseProducts }).value).toEqual(put(finishFetching))
        });
        it('call the action SET_PRODUCTS with data', () => {
            const genb = gen.next({ response: responseProducts })
            expect(genb.value.PUT.action.type).toEqual("SET_PRODUCTS")
        });
    })
    describe('when the service of get products with error', () => {
        let gen = getProducts();
        const responseProducts = { data: [{ id: 0 }] }

        it('call the action START_FETCHING', () => {
            expect(gen.next().value).toEqual(put(startFetching))
        });
        it('and start api calls', () => {
            expect(gen.next().value).toEqual(call(ProductsService.getProducts))
        })
        it('call the action FINISH_FETCHING', () => {
            expect(gen.next({ error: responseProducts }).value).toEqual(put(finishFetching))
        });
        it('call the action SET_ERROR', () => {
            expect(gen.next().value).toEqual(put(setError))
        });
    })

})