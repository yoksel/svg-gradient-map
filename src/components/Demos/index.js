import React, {Component} from 'react';
import PropTypes from 'prop-types';

import gradientFromColors from '../../helpers/gradientFromColors';
import {palettes} from '../Data';

import img from './nicki-eliza-schinow-356622-unsplash-300.jpg';
import './Demos.css';

class Demos extends Component {
  render() {
    const {list, title} = this.props;
    return (
      <div className="Demos">

        {title && <h3 className="Demos__title">{title}</h3>}

        <ul className="Demos__list">
          {
            Object.keys(list)
              .map(key => {
                const {data, code} = list[key];
                const filterUrl = `url(#${key})`;
                const palettesById = palettes
                  .filter(item => item.id === data.palette);
                const style = {};
                const palette = palettesById[0];
                let name = '';
                const channel = data.channel ? ` + grayscale by ${data.channel}` : '';
                const blendmode = data.blendmode ? ` + ${data.blendmode}` : '';

                if (palette) {
                  const {colors} = palette;
                  name = palette.name;

                  style.backgroundImage = gradientFromColors(colors);
                }

                return (
                  <li
                    className="Demos__item"
                    key={key}
                  >
                    <div className="Demos__data">
                      <span
                        className="Demos__palette"
                        style={style}
                        title={name}></span>

                      <div className="Demos__data-additions">
                        {channel}
                        {blendmode}
                      </div>
                    </div>

                    <svg
                      viewBox="0 0 300 169" width="300" height="169"
                      className="Demos__svg">
                      <defs dangerouslySetInnerHTML={{__html: code}}></defs>

                      <image
                        x="0%" y="0%" width="100%" height="100%"
                        preserveAspectRatio="xMidYMid slice"
                        xlinkHref={img}
                        filter={filterUrl}
                        className="Demos__image"></image>
                    </svg>
                  </li>
                );
              })
          }
        </ul>
      </div>
    );
  }
}

export default Demos;

Demos.propTypes = {
  list: PropTypes.object
};


