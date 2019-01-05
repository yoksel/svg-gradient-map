import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';

import {addPreset as addPresetAction, changePrimitiveChildrenProps} from '../../store/actions';

import colorsListToRGBValues from '../../helpers/colorsListToRGBValues';

import AppTemplate from '../../components/App';

let prevPalette = null;

class App extends Component {
  setPreset = () => {
    const {
      primitives,
      presets,
      addPreset
    } = this.props;

    if (primitives.playground.length > 0 || primitives.palette.length === 0) {
      return null;
    }

    let presetId = 'gradientMap';
    let currentItems = presets.filter(item => item.id === presetId);

    if (currentItems.length > 0) {
      addPreset(currentItems);
    }
  };

  updateFilter = () => {
    const {
      primitives,
      updateFilterColors
    } = this.props;

    const {palette} = primitives;

    if (palette.length === 0) {
      return null;
    }

    const paletteStr = palette
      .filter(item => !item.disabled)
      .map(item => item.value)
      .join('');

    if (paletteStr !== prevPalette) {
      prevPalette = paletteStr;
      updateFilterColors(primitives.palette);

      if (process.env.NODE_ENV !== 'production') {
        // Temporary for extracting good palettes
        console.groupCollapsed('Palette');
        console.log(palette
          .filter(item => !item.disabled)
          .map(item => item.value));
        console.groupEnd('Palette');
      }
    }
  }

  render() {
    this.setPreset();
    this.updateFilter();

    return (
      <AppTemplate/>
    );
  }
}

const mapStateToProps = (state, {match}) => {
  const {presetControls, primitives} = state;
  let {section} = match.params;

  return {
    section,
    primitives,
    presets: presetControls,
  };
};

const mapDispatchProps = (dispatch, props) => {
  return {
    addPreset: (presets) => {
      dispatch(addPresetAction(presets[0]));
    },
    updateFilterColors: (colors) => {
      const colorsFiltered = colors
        .filter(item => !item.disabled)
        .map(item => item.value);

      const rgbValues = colorsListToRGBValues(colorsFiltered);

      const propsSet = Object.keys(rgbValues)
        .reduce((prev, key) => {
          const id = `func${key.toUpperCase()}`;

          prev[id] = {
            id,
            param: 'tableValues',
            value: rgbValues[key].join(' '),
          };
          return prev;
        }, {});

      dispatch(changePrimitiveChildrenProps({
        section: 'playground',
        parentId: 'componentTransfer',
        propsSet
      }));
    }
  };
};

App = withRouter(connect(
  mapStateToProps,
  mapDispatchProps
)(App));

export default App;
