import {connect} from 'react-redux';
import {withRouter} from 'react-router';

import ConstructorTemplate from '../../components/Constructor';

const mapStateToProps = (state, {match}) => {
  const {section = 'playground'} = match.params;
  const palette = state.primitives.palette.length > 0 ? state.primitives.palette : [];

  return {
    primitives: state.primitives[section],
    palette
  };
};

const Constructor = withRouter(connect(
  mapStateToProps,
  null
)(ConstructorTemplate));

export default Constructor;
