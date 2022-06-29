const getAssetPath = require("../process.env");

describe("prueba => getAssetPath", () => {
  const originalEnv = process.env;
  beforeEach(() => {
    jest.resetModules();
    process.env = {
      ...originalEnv,
      NODE_ENV: "development",
    };
  });

  afterEach(() => {
    process.env = originalEnv;
  });
  it("Should return production-path", () => {
    expect(getAssetPath("production")).not.toEqual("/production-path");
  });
  it("Should return production-path", () => {
    expect(getAssetPath()).toEqual("/development-path");
  });
});
