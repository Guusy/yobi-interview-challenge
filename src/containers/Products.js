import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Products from '../pages/products/ProductsPage';

export const mapStateToProps = (state) => {
    const lowerCaseValue = state.searchValue.toLowerCase()
    const products = state.products.filter(({ name }) => {
        const lowerCaseNameProduct = name.toLowerCase()
        return lowerCaseNameProduct.includes(lowerCaseValue)
    })
    return {
        isFetching: state.isFetching,
        products
    };
};

export function mapDispatchToProps(dispatch) {
    return {
        getProducts: () => {
            return dispatch({ type: "GET_PRODUCTS_REQUEST" })
        }
        // return bindActionCreators(, dispatch);
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Products);
