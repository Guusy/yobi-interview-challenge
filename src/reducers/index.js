
const INITIAL_STATE = {
    products: [],
    isFetching: false,
    searchValue: '',
    errorLoadingProducts: false
}

export default (state = INITIAL_STATE, { reducer = defaultState => defaultState }) => reducer(state);
