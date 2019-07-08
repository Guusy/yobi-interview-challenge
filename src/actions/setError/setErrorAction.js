export default ({
    type: "SET_ERROR",
    reducer: (state) => ({ ...state, errorLoadingProducts: true })
})