import React, {Component} from 'react';

import {connect} from 'react-redux';

import {setPlaygroundType as setPlaygroundTypeAction} from '../../store/actions';

import RadioList from '../../components/RadioList';

const typesList = [
  {
    id: 'image',
    name: 'Image'
  },
  {
    id: 'edit',
    name: 'Your Code'
  }
];

class PlaygroundSwitcher extends Component {
  render() {
    const {
      playgroundType = 'image-and-text',
      setPlaygroundType
    } = this.props;

    return (
      <div className="PlaygroundSwitcher">
        <RadioList
          list={typesList}
          current={playgroundType}
          onChange={(type) => {
            setPlaygroundType(type);
          }}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    playgroundType: state.playground.type
  };
};

const mapDispatchProps = (dispatch) => {
  return {
    setPlaygroundType: (playgroundType) => {
      dispatch(setGrayscaleType({playgroundType}));
    }
  };
};

PlaygroundSwitcher = connect(
  mapStateToProps,
  mapDispatchProps
)(PlaygroundSwitcher);

export default PlaygroundSwitcher;
