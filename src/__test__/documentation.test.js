describe("Pruebas siguiendo la documentación", () => {
  // toBe y toEqual son equivalentes para números
  // Para probar la igualdad exacta.
  it("Dos más dos son cuatro", () => {
    expect(2 + 2).toBe(4);
  });
  // Para comprobar el valor de un objeto, utiliza toEqual()
  it("Asignación de un objecto", () => {
    const datos = { uno: 1 };
    datos["dos"] = 2;
    expect(datos).toEqual({ uno: 1, dos: 2 });
  });
  it("Veracidad", () => {
    const defined = "Hola";
    expect(null).toBeNull();
    expect(undefined).toBeUndefined();
    expect(defined).toBeDefined();
    expect(true).toBeTruthy();
    expect(false).toBeFalsy();
  });
  // Para la igualdad de puntos flotantes
  it("Suma de números decimales", () => {
    const sum = 0.1 + 0.2;
    expect(sum).toBeCloseTo(0.3);
  });
  // Array o iterable contiene un elemento - toContain
  it("Array", () => {
    const listaDeCompras = [
      "pañales",
      "pañuelos",
      "bolsas de basura",
      "toallas de papel",
      "leche",
    ];
    expect(listaDeCompras).toContain("pañales");
  });
  it("Excepciones", () => {
    function compilarCódigoAndroid() {
      throw new ConfigError("Usted está usando el código incorrecto");
    }
    expect(() => compilarCódigoAndroid()).toThrow();
    // expect(() => compilarCódigoAndroid()).toThrow(ConfigError);

    // expect(() => compilarCódigoAndroid()).toThrow(
    //   "Usted está usando el código incorrecto"
    // );
    // expect(() => compilarCódigoAndroid()).toThrow(/JDK/);
  });
});
