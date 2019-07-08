export default products => ({
  type: 'SET_PRODUCTS',
  reducer: state => ({
    ...state,
    products
  })
});
