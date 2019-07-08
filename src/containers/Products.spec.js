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
                it('returns a empty array', () => {
                    const { products } = mapStateToProps(state);
                    expect(products).toEqual([])
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

