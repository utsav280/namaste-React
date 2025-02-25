import { sum } from "../component/sum";

test("should add two numbers correctly", () => {
  sum(1, 2);
  expect(sum(1, 2)).toBe(3);
});

test("should add two numbers correctly", () => {
  sum(12, 2);
  expect(sum(12, 2)).toBe(14);
});
