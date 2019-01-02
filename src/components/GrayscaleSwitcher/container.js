import React, {Component} from 'react';

import {connect} from 'react-redux';

import {setGrayscaleType, changePrimitiveProp} from '../../store/actions';

import RadioList from '../../components/RadioList';

const typesList = [
  {
    id: 'red',
    name: 'R',
    value: `1 0 0 0 0
            1 0 0 0 0
            1 0 0 0 0
            0 0 0 1 0`
  },
  {
    id: 'green',
    name: 'G',
    value: `0 1 0 0 0
            0 1 0 0 0
            0 1 0 0 0
            0 0 0 1 0`
  },
  {
    id: 'blue',
    name: 'B',
    value: `0 0 1 0 0
            0 0 1 0 0
            0 0 1 0 0
            0 0 0 1 0`
  }
];

class PlaygroundSwitcher extends Component {
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
          onChange={function(value) {
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
      dispatch(setGrayscaleType({
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

PlaygroundSwitcher = connect(
  mapStateToProps,
  mapDispatchProps
)(PlaygroundSwitcher);

export default PlaygroundSwitcher;
