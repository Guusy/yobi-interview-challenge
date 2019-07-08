import sortByNameASC from '../sortByNameASC';

export default ({
  type: 'SORT_PRODUCTS_DESC',
  reducer: (state) => {
    const newProducts = sortByNameASC(state.products).reverse();
    return ({
      ...state,
      products: newProducts
    });
  }
});
