import { connect } from 'react-redux';
import { addProduct } from '../../actions';
import ProductsPage from './ProductsPage';

export const mapStateToProps = ({
  searchValue, products, isFetching, errorLoadingProducts
}) => {
  const lowerCaseValue = searchValue.toLowerCase();
  const newProducts = products.filter(({ name }) => {
    const lowerCaseNameProduct = name.toLowerCase();
    return lowerCaseNameProduct.includes(lowerCaseValue);
  });
  let message = (!isFetching && newProducts.length === 0) && ({ value: `Sorry there are no products with the name ${searchValue}` });
  if (errorLoadingProducts) {
    message = {
      value: 'Sorry, an error occurred while trying to recover the products'
    };
  }
  return {
    isFetching,
    products: newProducts,
    message
  };
};

export function mapDispatchToProps(dispatch) {
  return {
    getProducts: () => dispatch({ type: 'GET_PRODUCTS_REQUEST' }),
    addProduct: product => dispatch(addProduct(product))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductsPage);
