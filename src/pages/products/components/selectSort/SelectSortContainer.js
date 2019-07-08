import { connect } from 'react-redux';
import { sortProductsASC, sortProductsDESC } from '../../../../actions';
import SelectSort from './SelectSort';

export function mapDispatchToProps(dispatch) {
  return {
    onSortAsc: () => dispatch(sortProductsASC),
    onSortDesc: () => dispatch(sortProductsDESC),
  };
}

export default connect(
  null,
  mapDispatchToProps,
)(SelectSort);
