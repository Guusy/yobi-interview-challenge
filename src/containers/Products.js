import { connect } from 'react-redux';
import { addProduct } from '../actions'
import Products from '../pages/products/ProductsPage';

export const mapStateToProps = (state) => {
    const lowerCaseValue = state.searchValue.toLowerCase()
    const products = state.products.filter(({ name }) => {
        const lowerCaseNameProduct = name.toLowerCase()
        return lowerCaseNameProduct.includes(lowerCaseValue)
    })
    return {
        isFetching: state.isFetching,
        products,
        message: (!state.isFetching && products.length === 0) && ({ value: `Sorry there are no products with the name ${state.searchValue}` })
    };
};

export function mapDispatchToProps(dispatch) {
    return {
        getProducts: () => dispatch({ type: "GET_PRODUCTS_REQUEST" }),
        addProduct: (product) => dispatch(addProduct(product))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Products);
