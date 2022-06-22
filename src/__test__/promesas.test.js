const reverseString = (str) => {
  return new Promise((resolve, reject) => {
    if (!str) reject(new Error("Value invalid"));
    resolve(str.split("").reverse().join(""));
  });
};

describe("Implementando pruebas a promesas", () => {
  it("probar una promesa", () => {
    return reverseString("HOLA").then((string) => {
      expect(string).toBe("ALOH");
    });
  });
  it("async/await", async () => {
    const string = await reverseString("HOLA");
    expect(string).toBe("ALOH");
  });
  it("Falla la promesa", async () => {
    try {
      await reverseString();
    } catch (e) {
      expect(e.message).toEqual("Value invalid");
    }
  });
});

// afterEach(() => console.log("Después de cada prueba"));
// afterAll(() => console.log("Después de todas las pruebas"));
// beforeEach(() => console.log("Antes de cada prueba"));
// beforeAll(() => console.log("Antes de todas las pruebas"));
