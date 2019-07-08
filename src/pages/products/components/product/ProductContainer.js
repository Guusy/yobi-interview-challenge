import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeProduct } from '../../../../actions';
import Product from './Product';

export function mapDispatchToProps(dispatch) {
  return {
    onRemoveProduct: bindActionCreators(removeProduct, dispatch)
  };
}

export default connect(
  null,
  mapDispatchToProps,
)(Product);
