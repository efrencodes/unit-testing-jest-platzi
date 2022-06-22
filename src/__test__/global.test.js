const text = "Hola Mundo";
const fruits = ["apple", "banana", "orange"];

test("Debe contener un texto", () => {
  expect(text).toMatch(/Mundo/);
});
test("Tiene banana", () => {
  expect(fruits).toContain("banana");
});
