import {connect} from 'react-redux';
import {addPalette} from '../../store/actions';

import ControlsListTemplate from '../../components/ControlsList';

// ------------------------------

const mapStateToProps = (state) => {
  return {
    items: state.palettes,
  };
};

const mapDispatchProps = (dispatch) => {
  return {
    addPalette: (data) => {
      dispatch(addPalette(data));
    }
  };
};

const PalettesList =
 connect(
   mapStateToProps,
   mapDispatchProps
 )(ControlsListTemplate);

export default PalettesList
;
