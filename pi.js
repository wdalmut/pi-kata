const pi = require('.');

console.log("Internal PI:", Math.PI);
console.log("Computed PI:", pi()(100e6), "with 100e6 iterations");
