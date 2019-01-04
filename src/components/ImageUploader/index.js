import React, { Component } from 'react';
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
            var img = document.createElement("img");
            img.src = window.URL.createObjectURL(file);
            const sizeMb = file.size/(1000 * 1000);

            var reader = new FileReader();
            reader.readAsDataURL(file);

            reader.onloadend = function() {
              if(img.width === 0) {
                // Image exists but has zero dimensions
                setTimeout(() => {
                  updateImage({
                    src: reader.result,
                    width: img.width,
                    height: img.height,
                    sizeMb
                  })
                }, 50);
              }
              else {
                updateImage({
                  src: reader.result,
                  width: img.width,
                  height: img.height,
                  sizeMb
                });
              }
            }
        }}/>
      </div>
    );
  }
}

export default ImageUploader;

ImageUploader.propTypes = {
  updateImage: PropTypes.func
};
