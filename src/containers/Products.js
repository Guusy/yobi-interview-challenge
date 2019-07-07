import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Products from '../pages/products/ProductsPage';

const mapStateToProps = (state) => {
    console.log(state)
    return {
        isFetching: state.isFetching,
        products: state.products
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
