import { describe, it, expect } from "vitest";
import { hashCode } from "../hashcode";

describe("hashCode", () => {
  it("should be a function", () => {
    expect(typeof hashCode).toBe("function");
  });
  it("should throw on null input", () => {
    expect(() => hashCode(null as any)).toThrow();
  });
});
