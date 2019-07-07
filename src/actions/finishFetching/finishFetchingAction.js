export default ({
    type: "FINISH_FETCHING",
    reducer: (state) => ({
        ...state,
        isFetching: false
    })
})