import { hello } from "./hello_worlds";

describe("test hello", () => {
  it("should return hello world", () => {
    expect(hello()).toBe("Hello world!");
  });
});
