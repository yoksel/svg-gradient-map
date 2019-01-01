const initialState = {
  svgCode: '',
  image: {
    src: 'https://placekitten.com/800/600',
    width: 800,
    height: 600
  },
  type: 'image-and-text'
};

export const playGround = (state = initialState, action) => {

  switch (action.type) {

  case 'SET_PLAYGROUND_TYPE':
    const setPlaygroundTypeResult = {
      ...state,
      type: action.playgroundType
    };

    return setPlaygroundTypeResult;

  case 'UPDATE_SVG':
    const updateSvgResult = {
      ...state,
      svgCode: action.value
    };

    return updateSvgResult;

  case 'UPDATE_IMAGE':
    const updateImageResult = {
      ...state,
      image: action.image
    };

    return updateImageResult;

  default:
    return state;
  }
};

export default playGround;
