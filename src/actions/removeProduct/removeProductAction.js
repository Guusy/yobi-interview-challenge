export default lotId => ({
  type: 'REMOVE_PRODUCT',
  reducer: (state) => {
    const newProducts = state.products.filter(product => product.lotId !== lotId);
    return {
      ...state,
      products: newProducts
    };
  }
});
