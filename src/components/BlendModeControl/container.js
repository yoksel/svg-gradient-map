import React, {Component} from 'react';

import {connect} from 'react-redux';

import {setBlendMode as setBlendModeAction, changePrimitiveProp} from '../../store/actions';

import blendAttrs from '../../components/Data/primitivesAttrs/blend';
import InputSelect from '../../components/InputSelect';

class BlendModeControl extends Component {
  render() {
    const {
      blendMode = 'normal',
      setBlendMode,
      parentClassName
    } = this.props;

    const itemClass = `${parentClassName}__option`;
    const labelClass = `${parentClassName}__option-label`;
    const inputClass = `${parentClassName}__option-input`;

    return (
      <div className={itemClass}>
        <label
          className={labelClass}>
          Blend mode

          <InputSelect
            value={blendMode}
            valuesList={blendAttrs.mode}
            className={inputClass}
            onChange={function (value) {
              setBlendMode({
                value
              });
            }}/>
        </label>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    blendMode: state.primitives.blendMode
  };
};

const mapDispatchProps = (dispatch) => {
  return {
    setBlendMode: ({value}) => {
      dispatch(setBlendModeAction({
        blendMode: value
      }));
      dispatch(changePrimitiveProp({
        id: 'blend',
        section: 'playground',
        param: 'mode',
        value
      }));
    }
  };
};

BlendModeControl = connect(
  mapStateToProps,
  mapDispatchProps
)(BlendModeControl);

export default BlendModeControl;
