import { connect } from 'react-redux';
import { About } from '../../component';

const mapStateToProps = state => {
  return {
    profile: state.profile,
  };
};

export default connect(mapStateToProps)(About);
