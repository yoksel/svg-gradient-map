import React, {Component} from 'react';

import {connect} from 'react-redux';

import {setImageOpacity as setImageOpacityAction, changePrimitiveProp} from '../../store/actions';

import InputText from '../../components/InputText';

class OpacityControl extends Component {
  render() {
    const {
      imageOpacity = 1,
      setImageOpacity,
      parentClassName
    } = this.props;

    const itemClass = `${parentClassName}__option`;
    const labelClass = `${parentClassName}__option-label`;
    const inputClass = `${parentClassName}__option-input`;

    return (
      <div className={itemClass}>
        <label
          className={labelClass}>
          Opacity

          <InputText
            value={imageOpacity}
            type="number"
            min="0"
            max="1"
            step=".1"
            className={inputClass}
            onChange={function (value) {
              setImageOpacity({
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
    imageOpacity: state.primitives.imageOpacity
  };
};

const mapDispatchProps = (dispatch) => {
  return {
    setImageOpacity: ({value}) => {
      dispatch(setImageOpacityAction({
        imageOpacity: value
      }));
      dispatch(changePrimitiveProp({
        id: 'funcA',
        section: 'playground',
        parentId: 'componentTransfer',
        param: 'tableValues',
        value: `0 ${value}`
      }));
    }
  };
};

OpacityControl = connect(
  mapStateToProps,
  mapDispatchProps
)(OpacityControl);

export default OpacityControl;
