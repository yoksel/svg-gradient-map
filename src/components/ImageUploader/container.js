import {connect} from 'react-redux';

import {updateImage} from '../../store/actions';

import ImageUploaderTemplate from '../../components/ImageUploader';

const mapDispatchProps = (dispatch) => {
  return {
    updateImage: (image) => {
      dispatch(updateImage({image}));
    }
  };
};

const ImageUploader = connect(
  null,
  mapDispatchProps
)(ImageUploaderTemplate);

export default ImageUploader;
