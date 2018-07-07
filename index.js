'use strict';

const { sqrt, pow } = Math;
const rnd = require('./random')(Math.random);

function approx(random, iterations, circle, total) {
  let x = random(-1,1);
  let y = random(-1,1);

  total += 1;

  let distance = sqrt(pow(x, 2) + pow(y, 2));

  if (distance < 1) {
    circle += 1;
  }

  let pi = 4 * (circle / total)

  if (iterations <= 0) {
    return pi;
  }

  return approx(random, --iterations, circle, total)
}

module.exports = (random = rnd) => (iterations) => {
  return approx(random, --iterations, 0, 0);
}
