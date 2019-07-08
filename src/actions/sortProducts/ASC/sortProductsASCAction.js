import sortByNameASC from '../sortByNameASC';

export default ({
  type: 'SORT_PRODUCTS_ASC',
  reducer: (state) => {
    const newProducts = sortByNameASC(state.products);
    return ({
      ...state,
      products: newProducts
    });
  }
});
