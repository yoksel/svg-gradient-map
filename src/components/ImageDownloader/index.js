import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './ImageDownloader.css';

class ImageDownloader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      savedSetId: null,
      processState: null,
    };
  }

  componentDidMount() {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.svgElem = document.querySelector('.Playground__svg');
    this.link = document.querySelector('.ImageDownloader__button--download');
  }

  getSetName() {
    const {primitives} = this.props;
    const {filterId, grayscaleType, blendMode} = primitives;
    const setName = `fliter--${filterId}__channel--${grayscaleType}__mode--${blendMode}`;

    return setName;
  }

  getSetId() {
    const {image, primitives} = this.props;
    const setName = this.getSetName();

    const paletteStr = primitives.palette
      .filter(item => !item.disabled)
      .map(item => item.value)
      .join('-');

    const newSetId = `${image.randKey}-${setName}-${paletteStr}`;

    return newSetId;
  }

  downloadImg() {
    const {image} = this.props;
    const newSetId = this.getSetId();

    // If no filter changes, don't change attr href
    if (newSetId === this.state.savedSetId) {
      return;
    }

    this.setState({
      processState: 'started'
    });

    const xml = new XMLSerializer().serializeToString(this.svgElem);
    const svg64 = btoa(xml);
    const b64Start = 'data:image/svg+xml;base64,';
    const image64 = b64Start + svg64;
    const setName = this.getSetName();
    const ext = image.type.split('/')[1];

    const imgObj = new Image();
    imgObj.src = image64;
    imgObj.width = image.width;
    imgObj.height = image.height;

    imgObj.addEventListener('load', () => {
      this.canvas.width = image.width;
      this.canvas.height = image.height;
      this.ctx.drawImage(imgObj, 0, 0, this.canvas.width, this.canvas.height);

      this.canvas.toBlob((blob) => {
        let URLObj = window.URL || window.webkitURL;
        this.link.href = URLObj.createObjectURL(blob, image.type, 1);
        this.link.download = `${image.name}__${setName}.${ext}`;

        this.setState({
          savedSetId: newSetId,
          processState: 'finished'
        });
      });

    }, false);
  }

  getProcessStarter() {
    const {image, primitives} = this.props;
    const newSetId = this.getSetId();

    // No saved image or no palette
    if (image.sizeMb === 0 || primitives.palette.length === 0) {
      return null;
    }

    // Id the same or image processed
    if (newSetId === this.state.savedSetId || this.state.processState === 'started') {
      return null;
    }

    return (
      <button
        className="ImageDownloader__button ImageDownloader__button--starter"
        onClick={() => {
          this.downloadImg();
        }}
      >Get processed image</button>
    );
  }

  getDownloadPlaceholder() {
    if (this.state.processState !== 'started') {
      return null;
    }

    return (
      <span className="ImageDownloader__processing">Processing...</span>
    );
  }

  getDownloadLink() {
    const newSetId = this.getSetId();
    let display = 'none';

    if (newSetId === this.state.savedSetId) {
      display = 'inline-block';
    }

    return (
      <a
        className="ImageDownloader__button ImageDownloader__button--download"
        style={{display: display}}
        target="_self"
      >Download</a>
    );
  }

  render() {

    return (
      <div className="ImageDownloader">
        {this.getProcessStarter()}
        {this.getDownloadPlaceholder()}
        {this.getDownloadLink()}
      </div>
    );
  }
}

export default ImageDownloader;

ImageDownloader.propTypes = {
  updateImage: PropTypes.func
};
