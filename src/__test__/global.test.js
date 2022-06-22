const text = "Hola Mundo";
const fruits = ["apple", "banana", "orange"];

describe("Pruebas para Boolean y Array", () => {
  it("Debe contener un texto", () => {
    expect(text).toMatch(/Mundo/);
  });
  it("¿Tenemos una banana?", () => {
    expect(fruits).toContain("banana");
  });
  it("Mayor que", () => {
    expect(10).toBeGreaterThan(9);
  });
  it("Verdadero", () => {
    expect(true).toBeTruthy();
  });
  const reverseString = (str, callback) => {
    callback(str.split("").reverse().join(""));
  };
  it("Probar un Callbak", () => {
    reverseString("HOLA", (str) => {
      expect(str).toBe("ALOH");
    });
  });
});
