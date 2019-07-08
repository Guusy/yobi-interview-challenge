import sortProductsAction from './sortProductsASCAction';

const mockedStore = {
  products: [
    {
      name: 'Abuo'
    },
    {
      name: 'Azeo'
    },
    {
      name: 'Abeo'
    },
    {
      name: 'bEeo'
    },
    {
      name: 'bzeo'
    }
  ]
};
const productsSortedASC = [
  {

    name: 'Abeo'
  },
  {
    name: 'Abuo'
  },
  {
    name: 'Azeo'
  },

  {
    name: 'bEeo'
  },
  {
    name: 'bzeo'
  },


];
describe('sortProductsASCAction', () => {
  const action = sortProductsAction;
  it('sort the items as it', () => {
    const { products } = action.reducer(mockedStore);
    expect(products).toEqual(productsSortedASC);
  });
  it('the type is "SORT_PRODUCTS_ASC"', () => {
    expect(action.type).toEqual('SORT_PRODUCTS_ASC');
  });
});
