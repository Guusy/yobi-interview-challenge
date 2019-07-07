import React from 'react';
import setProductsAction from './setProductsAction';

const mockedStore = {

}

describe('setProductsAction', () => {
    describe('when pass products', () => {
        const products = [{ id: 0 }]
        const action = setProductsAction(products)
        it('add this products to the state', () => {
            const result = action.reducer(mockedStore);
            expect(result.products).toEqual(products)
        })
        it('the type is "SET_PRODUCTS"', () => {
            expect(action.type).toEqual("SET_PRODUCTS")
        })
    })
})

