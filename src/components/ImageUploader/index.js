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
            const files = e.target.files;
            var img = document.createElement("img");
            img.src = window.URL.createObjectURL(files[0]);

            var reader = new FileReader();
            reader.readAsDataURL(files[0]);

            reader.onloadend = function() {
              updateImage({
                src: reader.result,
                width: img.width,
                height: img.height
              })
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
