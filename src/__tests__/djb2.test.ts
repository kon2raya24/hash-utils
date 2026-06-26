import { describe, it, expect } from "vitest";
import { djb2 } from "../djb2";

describe("djb2", () => {
  it("should be a function", () => {
    expect(typeof djb2).toBe("function");
  });
  it("should throw on null input", () => {
    expect(() => djb2(null as any)).toThrow();
  });
});
