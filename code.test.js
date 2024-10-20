import { capitalize } from "./code";
import {test, expect} from '@jest/globals';

test("capitalize", () => {
  expect(capitalize("bon")).toMatch("BON");
  expect(capitalize("sirl")).toMatch("SIRL");
  expect(capitalize("")).toMatch("");
  expect(capitalize(78)).toBe(78);
});
