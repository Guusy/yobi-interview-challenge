
const INITIAL_STATE = {
    products: [],
    isFetching: false,
    searchValue: ''
}

export default (state = INITIAL_STATE, { reducer = defaultState => defaultState }) => reducer(state);
