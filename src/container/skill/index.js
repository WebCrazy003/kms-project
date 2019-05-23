import { connect } from 'react-redux';
import { Skill } from '../../component';

const mapStateToProps = state => {
  return {
    skill: state.skill,
  };
};

export default connect(mapStateToProps)(Skill);
