const pi = require('../');

describe("Pi", () => {
  it("should represent 4", () => {
    let pie = pi(() => 0.5)(1);

    expect(pie).toBe(4);
  });

  it("should represent 2", () => {
    let pie = pi((() => {
      let values = [0.5, 0.5, 1, 1]; // (x,y),(x,y)
      return () => {
        return values.pop();
      }
    })())(2);

    expect(pie).toBe(2);
  });

  it("should represente a simple pi", () => {
    let pie = pi()(10000000);
    expect(Math.round(pie*100)/100).toBe(3.14);
  });
});
