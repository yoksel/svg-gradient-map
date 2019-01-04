import React, {Component} from 'react';
import PropTypes from 'prop-types';

import PalettePanelControls from '../PalettePanelControls/container';
import InputText from '../InputText';

import './PalettePanel.css';

class PalettePanel extends Component {
  render() {
    const props = this.props;

    const getPanelControls = () => {
      return <PalettePanelControls
        id={props.id}
        index={props.index}
      />;
    };

    return (
      <div className="PalettePanel">
        <label className="PalettePanel__label">
          <span
            className="visuallyhidden">Color {props.index}</span>
          <InputText
            {...props}
            className="PalettePanel__inputText"
          />
        </label>

        {getPanelControls()}
      </div>
    );
  }
}

export default PalettePanel;

PalettePanel.propTypes = {
  id: PropTypes.string,
  index: PropTypes.number,
  type: PropTypes.string,
  value: PropTypes.string,
  disabled: PropTypes.bool,
};
