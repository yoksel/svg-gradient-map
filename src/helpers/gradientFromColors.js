const gradientFromColor = (colors) => {
  const colorStep = 100 / colors.length;

  const colorsWithStops = colors
    .map((color, index) => {
      return `${color} ${colorStep * (index) + 1}%, ${color} ${colorStep * (index + 1) - 1}%`;
    });

  return `linear-gradient(to right top, ${colorsWithStops.join(',')})`;
}

export default gradientFromColor;
