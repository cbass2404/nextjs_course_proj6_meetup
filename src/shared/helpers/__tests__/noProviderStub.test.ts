import { noProviderStub } from "../noProviderStub";

describe("src/shared/helpers/noProviderStub", () => {
  it("returns an error with given string", () => {
    expect(() => noProviderStub("TestProvider")).toThrowError(
      "You forgot to wrap your component in the <TestProvider>"
    );
  });
});
