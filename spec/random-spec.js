const random = require('../random');

describe("Random", () => {
  it("should resolve a minimum", () => {
    let num = random(() => 0)(-1, 1);

    expect(num).toBe(-1);
  });

  it("should response with a max", () => {
    let num = random(() => 1)(-1, 1);

    expect(num).toBe(1);
  });

  it("should response randomly", () => {
    let num = random()(-1, 1);
    expect(typeof num).toBe("number");
  });
});
