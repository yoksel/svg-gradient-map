import {connect} from 'react-redux';
import {withRouter} from 'react-router';

import colorsListToRGBValues from '../../helpers/colorsListToRGBValues';

import {purgePrimitives, moveToPlayground, changePrimitiveChildrenProps} from '../../store/actions';

import ConstructorTemplate from '../../components/Constructor';

const mapStateToProps = (state, {match}) => {
  const {section = 'playground'} = match.params;
  const palette = state.primitives.palette.length > 0 ? state.primitives.palette : [];

  return {
    primitives: state.primitives[section],
    palette
  };
};

const mapDispatchProps = (dispatch, {match}) => {
  const {section = 'playground'} = match.params;

  return {
    purgePrimitives: () => {
      dispatch(purgePrimitives({section}));
    },
    moveToPlayground: () => {
      dispatch(moveToPlayground({section}));
    },
    paletteChanged: (colors) => {
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
          }
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

const Constructor = withRouter(connect(
  mapStateToProps,
  mapDispatchProps
)(ConstructorTemplate));

export default Constructor;
