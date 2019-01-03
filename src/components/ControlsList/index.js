import React from 'react';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router';

import './ControlsList.css';

const ControlsList = ({
  items,
  control = 'control',
  type,
  addPalette,
  match
}) => {
  const {section = 'playground', id} = match.params;
  const ControlsListClass = [
    'ControlsList',
    `ControlsList--${section}`,
    `ControlsList--${type}`
  ].join(' ');


  return (
    <nav className={ControlsListClass}>
      {items.map((item, index) => {
        const ControlClassList = [
          'Control',
          `Control--${control}`,
          `Control--${section}`,
          `Control--${type}`
        ];

        if (id === item.id) {
          ControlClassList.push('Control--current');
          ControlClassList.push(`Control-${section}--current`);
        }

        const ControlClass = ControlClassList.join(' ');

        let name = item.name;

        let style = {};
        if(item.colors) {
          const colorStep = 100 / item.colors.length;

          const colorsWithStops = item.colors
            .map((color, index) => {
              return `${color} ${colorStep * (index) + 1}%, ${color} ${colorStep * (index + 1) - 1}%`;
            });

          style.backgroundImage = `linear-gradient(to right top, ${colorsWithStops.join(',')})`;
        }

        if (control === 'NavLink') {
          const url = `/${section}/${item.id}`;

          return (
            <NavLink
              key={item.id}
              to={url}
              className={ControlClass}
              style={style}
              title={name}
              onClick={(event) => {
                const nativeEvent = {
                  offsetX: event.nativeEvent.offsetX,
                  offsetY: event.nativeEvent.offsetY
                };

                addPalette({
                  colors: item.colors,
                  nativeEvent
                });
              }}
            >
              <span className="Control__text">
                {name}
              </span>
            </NavLink>
          );
        }

        return (
          <button
            className={ControlClass}
            key={item.id}
            style={style}
            title={name}
            onClick={(event) => {
              const nativeEvent = {
                offsetX: event.nativeEvent.offsetX,
                offsetY: event.nativeEvent.offsetY
              };

              addPalette({
                id: item.id,
                colors: item.colors,
                nativeEvent
              });
            }}
          >
            {name}
          </button>
        );
      })}
    </nav>
  );
};

export default withRouter(ControlsList);

ControlsList.propTypes = {
  items: PropTypes.array,
  control: PropTypes.string,
  addPalette: PropTypes.func
};
