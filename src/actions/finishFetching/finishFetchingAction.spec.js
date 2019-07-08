import finishFetchingAction from './finishFetchingAction';

const mockedStore = {
  isFetching: false
};
describe('finishFetchingAction', () => {
  it('set isFetching as false', () => {
    const result = finishFetchingAction.reducer(mockedStore);
    expect(result.isFetching).toBe(false);
  });
  it('the type is "FINISH_FETCHING"', () => {
    expect(finishFetchingAction.type).toEqual('FINISH_FETCHING');
  });
});
