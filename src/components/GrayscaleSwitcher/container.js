import React, {Component} from 'react';

import {connect} from 'react-redux';

import {setGrayscaleType as setGrayscaleTypeAction, changePrimitiveProp} from '../../store/actions';

import RadioList from '../../components/RadioList';

const typesList = [
  {
    id: 'red',
    name: 'Red',
    value: `1 0 0 0 0
            1 0 0 0 0
            1 0 0 0 0
            0 0 0 1 0`
  },
  {
    id: 'green',
    name: 'Green',
    value: `0 1 0 0 0
            0 1 0 0 0
            0 1 0 0 0
            0 0 0 1 0`
  },
  {
    id: 'blue',
    name: 'Blue',
    value: `0 0 1 0 0
            0 0 1 0 0
            0 0 1 0 0
            0 0 0 1 0`
  }
];

class GrayscaleSwitcher extends Component {
  render() {
    const {
      grayscaleType = 'red',
      setGrayscaleType
    } = this.props;

    return (
      <div className="PlaygroundSwitcher">
        <RadioList
          name="Grayscale by channel"
          list={typesList}
          current={grayscaleType}
          onChange={function (value) {
            setGrayscaleType({
              value,
              grayscaleType: this.id
            });
          }}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    grayscaleType: state.primitives.grayscaleType
  };
};

const mapDispatchProps = (dispatch) => {
  return {
    setGrayscaleType: ({value, grayscaleType}) => {
      dispatch(setGrayscaleTypeAction({
        grayscaleType
      }));
      dispatch(changePrimitiveProp({
        id: 'colormatrix',
        param: 'values',
        section: 'playground',
        value
      }));
    }
  };
};

GrayscaleSwitcher = connect(
  mapStateToProps,
  mapDispatchProps
)(GrayscaleSwitcher);

export default GrayscaleSwitcher;
