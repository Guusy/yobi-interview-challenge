export default ({
    type: "START_FETCHING",
    reducer: (state) => ({
        ...state,
        isFetching: true
    })
})