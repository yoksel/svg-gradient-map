import {connect} from 'react-redux';

import ImageDownloaderTemplate from '../../components/ImageDownloader';

const mapStateToProps = (state) => {
  return {
    image: state.playground.image,
    primitives: state.primitives
  };
};

const ImageDownloader = connect(
  mapStateToProps,
  null
)(ImageDownloaderTemplate);

export default ImageDownloader;
