# Approximate PI

**this works only on node v6 because of TCO (tail call optimization) usage. In
node v8+ [this feature is actually in an error state](https://node.green/#ES2015-optimisation-proper-tail-calls--tail-call-optimisation-)**

```sh
$ npm start

> pi-kata@1.0.0 start /home/antenor/git/pi-kata
> node --harmony --use_strict pi.js

Internal PI: 3.141592653589793
Computed PI: 3.14158832 with 100e6 iterations
```

