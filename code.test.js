import { capitalize, reverse, calculator } from "./code";
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

test("Calculator", () => {
  expect(calculator.add(3, 4)).toBe(7);
  expect(calculator.subtract(3, 2)).toBe(1);
  expect(calculator.divide(8, 4)).toBeCloseTo(2);
  expect(calculator.multiply(4, 5)).toBe(20);
});
