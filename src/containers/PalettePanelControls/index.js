import {connect} from 'react-redux';
import {withRouter} from 'react-router';

import {deletePaletteColor, duplicatePaletteColor, togglePaletteColor} from '../../store/actions';

import PalettePanelControlsTemplate from '../../components/PrimitivePanelControls';

const mapDispatchProps = (
  dispatch,
  {id, index, match}
) => {
  const {section = 'playground'} = match.params;
  let params = {
    index
  };

  params.section = section;

  return {
    removePrimitive: () => {
      dispatch(deletePaletteColor(params));
    },
    duplicatePrimitive: () => {
      dispatch(duplicatePaletteColor(params));
    },
    togglePrimitive: () => {
      dispatch(togglePaletteColor(params));
    }
  };
};

const PalettePanelControls = withRouter(connect(
  null,
  mapDispatchProps
)(PalettePanelControlsTemplate));

export default PalettePanelControls;
