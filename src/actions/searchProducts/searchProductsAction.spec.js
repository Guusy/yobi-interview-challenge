import searchProductsAction from './searchProductsAction';

const mockedStore = {};

describe('searchProductsAction', () => {
  describe('when you pass a value', () => {
    const name = 'iphon';
    const action = searchProductsAction(name);
    it('add this value to the state', () => {
      const result = action.reducer(mockedStore);
      expect(result.searchValue).toEqual(name);
    });
    it('the type is "SEARCH_PRODUCTS"', () => {
      const action = searchProductsAction();
      expect(action.type).toEqual('SEARCH_PRODUCTS');
    });
  });
});
