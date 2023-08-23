module.exports = (w, h) => {
  return {
    area: () => (w * h) / 2,
    perimeter: () => Math.sqrt(w * w + h * h) + w + h,
  };
};
