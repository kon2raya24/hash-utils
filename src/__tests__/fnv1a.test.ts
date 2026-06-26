import { describe, it, expect } from "vitest";
import { fnv1a } from "../fnv1a";

describe("fnv1a", () => {
  it("should be a function", () => {
    expect(typeof fnv1a).toBe("function");
  });
  it("should throw on null input", () => {
    expect(() => fnv1a(null as any)).toThrow();
  });
});
