import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Products from '../pages/products/ProductsPage';

const mapStateToProps = () => {
    // Define connection properties
    return {};
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
