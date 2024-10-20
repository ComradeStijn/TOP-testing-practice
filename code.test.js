import { capitalize, reverse, calculator, caesar, analyzeArray } from "./code";
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

test("Caesar", () => {
  expect(caesar("abc", 1)).toMatch("bcd");
  expect(caesar("efg", 1)).toMatch("fgh");
  expect(caesar("z", 1)).toMatch("a");
  expect(caesar("AjKloK", 1)).toMatch("BkLmpL");
  expect(caesar("xYz", 4)).toMatch("bCd");
  expect(caesar("Hello, there!", 3)).toMatch("Khoor, wkhuh!");
  expect(caesar("bcd", -1)).toMatch("abc");
});

test("Analyze array", () => {
  expect(analyzeArray([1, 8, 3, 4, 6, 2])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6
  })
})