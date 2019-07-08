export default (newProduct) => ({
    type: "ADD_PRODUCT",
    reducer: (state) => {
        const newProducts = [...state.products]
        newProducts.push(newProduct)
        return ({
            ...state,
            products: newProducts
        })
    }
})