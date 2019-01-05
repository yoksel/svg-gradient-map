import {connect} from 'react-redux';
import {withRouter} from 'react-router';

import {deletePaletteColor, duplicatePaletteColor, togglePaletteColor} from '../../store/actions';

import PalettePanelControlsTemplate from '../PanelControls';

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
    removeItem: () => {
      dispatch(deletePaletteColor(params));
    },
    duplicateItem: () => {
      dispatch(duplicatePaletteColor(params));
    },
    toggleItem: () => {
      dispatch(togglePaletteColor(params));
    }
  };
};

const PalettePanelControls = withRouter(connect(
  null,
  mapDispatchProps
)(PalettePanelControlsTemplate));

export default PalettePanelControls;
