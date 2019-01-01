import React from 'react';
import './Playground.css';
import PropTypes from 'prop-types';

import Filter from '../../containers/Filter';
import ImageUploader from '../ImageUploader/ImageUploaderContainer';

import './gray-cells.png';

const Playground = ({
  filterId,
  image
}) => {
  const filterUrl = filterId ? `url(#${filterId})` : '';

  const viewBoxValue = [0, 0, image.width, image.height];

  const getSvgContentByPlaygroundType = () => {
    return (
      <g>
        <image
          x="0%" y="0%"
          width="100%" height="100%"
          preserveAspectRatio="xMidYMid meet"
          xlinkHref={image.src}
          className="image image--origin"
        />
        <image
          x="0%" y="0%"
          width="100%" height="100%"
          preserveAspectRatio="xMidYMid meet"
          xlinkHref={image.src}
          filter={filterUrl}
          className="image image--filtered"
        />
      </g>
    );
  };

  const content = getSvgContentByPlaygroundType();

  return (
    <section className={`Playground`}>
      <h2 className="visuallyhidden">Live demo</h2>
      <div className="Playground__image">
        <ImageUploader/>

        <div className="Playground__svg-wrapper">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            className="Playground__svg"
            viewBox={viewBoxValue.join(' ')}
          >
            <defs>
              <Filter/>
            </defs>

            {content}
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Playground;

Playground.propTypes = {
  filterId: PropTypes.string
};
