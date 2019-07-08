import setErrorAction from './setErrorAction';

const mockedStore = {};

describe('setErrorAction', () => {
  const action = setErrorAction;
  it('add this value to the state', () => {
    const result = action.reducer(mockedStore);
    expect(result.errorLoadingProducts).toEqual(true);
  });
  it('the type is "SET_ERROR"', () => {
    expect(action.type).toEqual('SET_ERROR');
  });
});
