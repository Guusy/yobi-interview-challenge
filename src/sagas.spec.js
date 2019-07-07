import { getProducts } from './sagas';
import ProductsService from './services/ProductsService';
import { startFetching, finishFetching, setProducts } from './actions';
import { fork, take, call, takeEvery, put } from 'redux-saga/effects';

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
            expect(gen.next(responseProducts).value).toEqual(put(finishFetching))
        });
        /* it('call the action SET_PRODUCTS with data', () => {
            const value = gen.next(responseProducts.data).value;
            expect(value.PUT.action.type).toEqual("SET_PRODUCTS")
        }); */
    })

})