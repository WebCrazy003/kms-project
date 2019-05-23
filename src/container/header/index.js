import { connect } from 'react-redux';
import { setProgress } from '../../action';
import { Header } from '../../component';

const mapDispatchToPros = dispatch => ({
  onClick: position => dispatch(setProgress(position)),
});

export default connect(
  null,
  mapDispatchToPros
)(Header);
