import sortProductsDESCAction from './sortProductsDESCAction';

const mockedStore = {
    products: [
        {
            name: "Abuo"
        },
        {
            name: "Azeo"
        },
        {
            name: "Abeo"
        },
        {
            name: "bEeo"
        },
        {
            name: "bzeo"
        }
    ]
}
const productsSortedDESC = [
    {
        name: "bzeo"
    },
    {
        name: "bEeo"
    },
    {
        name: "Azeo"
    },
    {
        name: "Abuo"
    },
    {

        name: "Abeo"
    },


]
describe('sortProductsDESCAction', () => {
    const action = sortProductsDESCAction
    it('sort the items as it', () => {
        const { products } = action.reducer(mockedStore)
        expect(products).toEqual(productsSortedDESC)
    })
    it('the type is "SORT_PRODUCTS_DESC"', () => {
        expect(action.type).toEqual("SORT_PRODUCTS_DESC")
    })
})

