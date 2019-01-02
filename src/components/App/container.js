import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';

import {addPreset, discoveryPrimitive, purgePrimitives} from '../../store/actions';

import AppTemplate from '../../components/App';

class App extends Component {
  purgePrev = (prevSection) => {
    if (!prevSection) {
      return null;
    }
    this.props.purgePrimitives(prevSection);
  };

  itemFromPath = () => {
    const {id, section = 'presets', handlerName} = this.props;
    const currentSet = this.props[section];
    const handler = this.props[handlerName];
    let currentItems = [];

    if (!id) {
      return null;
    }

    currentItems = currentSet && currentSet.filter(item => item.id === id);

    if (currentItems) {
      handler(currentItems);
    }
  };

  // componentDidMount() {
  //   this.itemFromPath();
  // }

  // componentDidUpdate(prevProps) {
  //   const {id, section} = this.props;

  //   if (prevProps.id !== id) {
  //     this.itemFromPath();
  //   }
  //   if (prevProps.section !== section) {
  //     this.purgePrev(prevProps.section);
  //   }
  // }

  render() {
    this.itemFromPath();

    return (
      <AppTemplate/>
    );
  }
}

const mapStateToProps = (state, {match}) => {
  const {presetControls, primitiveControls} = state;
  let {section, id} = match.params;
  let handlerName;

  id = 'duotone';
  handlerName = 'addPreset';

  return {
    id,
    section,
    handlerName,
    docs: primitiveControls,
    presets: presetControls,
  };
};

const mapDispatchProps = (dispatch, props) => {
  return {
    addPreset: (presets) => {
      dispatch(addPreset(presets[0]));
    },
    discoveryPrimitive: (primitives) => {
      dispatch(discoveryPrimitive({primitives}));
    },
    purgePrimitives: (section) => {
      dispatch(purgePrimitives({section}));
    }
  };
};

App = withRouter(connect(
  mapStateToProps,
  mapDispatchProps
)(App));

export default App;
