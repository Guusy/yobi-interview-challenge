import { mapStateToProps } from './Products'

describe('Products container', () => {

    describe('mapStateToProps', () => {
        const basicProducts = [
            {
                name: "Battery"
            },
            {
                name: "Iphone 9 plus"
            }
        ]
        describe('when has errorLoadingProducts', () => {
            const state = {
                searchValue: "",
                products: basicProducts,
                errorLoadingProducts: true
            }
            const { message } = mapStateToProps(state);

            it('return a message like "Sorry, an error occurred while trying to recover the products"', () => {
                expect(message).toEqual({ value: 'Sorry, an error occurred while trying to recover the products' })
            })
        })
        describe('when has a searchValue', () => {
            describe('and the value is in one of the names of the products', () => {
                const state = {
                    searchValue: "iphone",
                    products: basicProducts
                }
                it('filter the products with this value', () => {
                    const { products } = mapStateToProps(state);
                    expect(products).toEqual([{ name: "Iphone 9 plus" }])
                })
            })
            describe('and the value is not found in any of the names of the products', () => {
                const state = {
                    searchValue: "2-12,.,o",
                    products: basicProducts
                }
                const { products, message } = mapStateToProps(state);

                it('returns a empty array', () => {
                    expect(products).toEqual([])
                })
                it('return a message like "Sorry there are no products with the name {value}"', () => {
                    expect(message).toEqual({ value: `Sorry there are no products with the name ${state.searchValue}` })
                })
            })

        })
        describe('when hasnt a searchValue', () => {
            const state = {
                searchValue: "",
                products: basicProducts
            }
            it('return all the products', () => {
                const { products } = mapStateToProps(state);
                expect(products).toEqual(state.products)
            })
        })

    })
})

