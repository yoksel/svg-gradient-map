import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './ConstructorPlaceholder.css';

class ConstructorPlaceholder extends Component {
  text = {
    playground: 'Choose palette to see gradient map filter with it'
  };

  render() {
    const {section = 'playground'} = this.props;

    return (
      <div
        className="ConstructorPlaceholder"
        dangerouslySetInnerHTML={{__html: this.text[section]}}>
      </div>
    );
  }
}

export default ConstructorPlaceholder;

ConstructorPlaceholder.propTypes = {
  section: PropTypes.string
};
