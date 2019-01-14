import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './ImageUploader.css';

class ImageUploader extends Component {
  render() {
    const {updateImage} = this.props;

    return (
      <div className="ImageUploader">
        <input type="file"
          className="ImageUploader__input"

          onChange={(e) => {
            const file = e.target.files[0];
            const img = document.createElement('img');
            img.src = URL.createObjectURL(file);
            const sizeMb = file.size/(1000 * 1000);
            let filename = file.name.split('.');
            filename = filename
              .slice(0, filename.length - 1)
              .join('.');

            const reader = new FileReader();
            reader.readAsDataURL(file);

            reader.onloadend = function () {
              if (img.width === 0) {
                // Image exists but has zero dimensions
                setTimeout(() => {
                  updateImage({
                    name: filename,
                    type: file.type,
                    src: reader.result,
                    width: img.width,
                    height: img.height,
                    randKey: Math.round(Math.random() * 100000),
                    sizeMb
                  });
                }, 50);
              } else {
                updateImage({
                  name: filename,
                  type: file.type,
                  src: reader.result,
                  width: img.width,
                  height: img.height,
                  randKey: Math.round(Math.random() * 100000),
                  sizeMb
                });
              }
            };
          }}/>
      </div>
    );
  }
}

export default ImageUploader;

ImageUploader.propTypes = {
  updateImage: PropTypes.func
};
