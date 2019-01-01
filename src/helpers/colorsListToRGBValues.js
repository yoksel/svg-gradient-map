const HEXtoRGB = (hex) => {
  const R = hex.slice(0,2);
  const G = hex.slice(2,4);
  const B = hex.slice(4,6);

  return {
    r: parseInt(R, 16),
    g: parseInt(G, 16),
    b: parseInt(B, 16)
  };
}

const colorsListToRGBValues = (colors) => {
  const rgbValues = colors
    .reduce((prev, item) => {
      const rgbSet = HEXtoRGB(item.substr(1));

      Object.keys(rgbSet)
        .forEach(key => {
          rgbSet[key] = Math.round(rgbSet[key] / 255 * 100) / 100;
        })

      prev.r.push(rgbSet.r);
      prev.g.push(rgbSet.g);
      prev.b.push(rgbSet.b);

      return prev;

    }, {r: [], g: [], b: []});

  return rgbValues;
}

export default colorsListToRGBValues;
