import {connect} from 'react-redux';
import {withRouter} from 'react-router';

import {changePaletteColor} from '../../store/actions';
import PalettePanelTemplate from '../../components/PalettePanel';

const mapDispatchProps = (
  dispatch,
  props
) => {
  return {
    onChange: (value) => {
      const {index} = props;
      const initialProps = {
        index,
        color: value
      };

      dispatch(changePaletteColor(initialProps));
    }
  };
};

const PalettePanel = withRouter(connect(
  null,
  mapDispatchProps
)(PalettePanelTemplate));

export default PalettePanel;
