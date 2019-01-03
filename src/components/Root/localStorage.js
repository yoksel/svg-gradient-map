export const saveState = (state) => {
  localStorage.setItem('gradientmap-state', JSON.stringify(state));
};

export const getState = () => {
  const storageValue = localStorage.getItem('gradientmap-state');

  if (storageValue) {
    return JSON.parse(storageValue);
  }

  return {};
};
