import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchProducts } from '../../../../actions'
import SearchTextfield from './SearchTextfield';

const mapStateToProps = ({ searchValue }) => {
    return {
        value: searchValue
    };
};
export function mapDispatchToProps(dispatch) {
    return {
        onChange: bindActionCreators(searchProducts, dispatch),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SearchTextfield);
