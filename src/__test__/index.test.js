const randomAnimals = require("../index");

describe("Probar funcionalidades de randomAnimals", () => {
  it("Probar la funcionalidad", () => {
    expect(typeof randomAnimals()).toBe("string");
  });
  it("Comprobar que no existe una cuidad", () => {
    expect(randomAnimals()).not.toMatch(/mundo/);
  });
});
