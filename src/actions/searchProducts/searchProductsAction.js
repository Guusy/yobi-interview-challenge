export default (searchValue) => ({
    type: "SEARCH_PRODUCTS",
    reducer: (state) => ({ ...state,  searchValue })
})