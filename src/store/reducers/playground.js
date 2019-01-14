export const initialState = {
  svgCode: '',
  image: {
    name: 'nicki-eliza-schinow-356622-unsplash-800.jpg',
    type: 'image/jpeg',
    src: './images/nicki-eliza-schinow-356622-unsplash-800.jpg',
    width: 800,
    height: 449,
    randKey: 0,
    sizeMb: 0
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
