import { capitalize, reverse } from "./code";
import { test, expect } from "@jest/globals";

test("capitalize", () => {
  expect(capitalize("bon")).toMatch("BON");
  expect(capitalize("sirl")).toMatch("SIRL");
  expect(capitalize("")).toMatch("");
  expect(capitalize(78)).toBe(78);
});

test("Reverse string", () => {
  expect(reverse("Hello there!")).toMatch("!ereht olleH");
  expect(reverse("Hallo iedereen")).toMatch("neeredei ollaH");
  expect(reverse("")).toMatch("");
  expect(reverse(23)).toBe(23);
});
