import addProductAction from './addProductAction';
const mockedStore = {
    products: [
        {
            idLot: 0,
            name: "hi",
            description: "Some description",
            hasBulk: true
        }
    ]
}
describe('addProductAction', () => {
    describe('when pass a product', () => {
        const newProduct = {
            idLot: 20,
            name: "new product",
            description: "another description",
            hasBulk: true,
            hasRetail: 30
        }
        const action = addProductAction(newProduct)
        it('add to the product list', () => {
            const { products } = action.reducer(mockedStore)
            expect(products[1]).toEqual(newProduct)
        })
        it('has the type ADD_PRODUCT', () => {
            expect(action.type).toEqual("ADD_PRODUCT")
        })
    })
})

