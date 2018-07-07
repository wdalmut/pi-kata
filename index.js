'use strict';

const r = 1;

const { sqrt, pow } = Math;
const rnd = require('./random')(Math.random);

function approx(random, iterations, circle, total) {
  let x = random(-r,r);
  let y = random(-r,r);

  total += 1;

  let distance = pow(x, 2) + pow(y, 2);

  if (distance < (r*r)) {
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
