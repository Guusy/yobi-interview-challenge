import removeProductAction from './removeProductAction';

const mockedStore = {
  products: [
    {
      lotId: 0
    },
    {
      lotId: 50
    },
    {
      lotId: 60
    },
  ]
};

describe('removeProductAction', () => {
  describe('when pass the id of product', () => {
    const lotId = 50;
    const action = removeProductAction(lotId);
    it('add this products to the state', () => {
      const productsWithout = [{ lotId: 0 }, { lotId: 60 }];
      const result = action.reducer(mockedStore);
      expect(result.products).toEqual(productsWithout);
    });
    it('the type is "REMOVE_PRODUCT"', () => {
      expect(action.type).toEqual('REMOVE_PRODUCT');
    });
  });
});
