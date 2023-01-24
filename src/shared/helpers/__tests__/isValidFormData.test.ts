import { isValidFormData } from "../isValidFormData";

describe("src/shared/helpers/isValidFormData", () => {
  let result: boolean;

  it("returns true for string with value", () => {
    result = isValidFormData("returns true");

    expect(result).toBeTruthy();
  });

  it("returns true for object with key value pairs", () => {
    result = isValidFormData({ first: "value", second: "value" });

    expect(result).toBeTruthy();
  });

  it("returns false for string with no value", () => {
    result = isValidFormData("");

    expect(result).toBeFalsy();
  });

  it("returns false for an object with a key with no value", () => {
    result = isValidFormData({ first: "value", second: "", third: "value" });

    expect(result).toBeFalsy();
  });
});
