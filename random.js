const { abs } = Math;

module.exports = (random = Math.random) => (min, max) => {
  return random() * (abs(min) + abs(max)) + min;
};
