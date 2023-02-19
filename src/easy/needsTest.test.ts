import { needsTest } from "./needsTest";
// write a function that takes two parameters. The first parameter is an array that can contain only strings, only integers or a mix of both. The second parameter is a key that is either a single string or integer.
// this function should remove any items from the original array that match the key
// if no values match the key, false should be returned

it("Needs Test", () => {
  expect(needsTest(["red", "blue", "green"], "blue")).toEqual(["red", "green"]);
  expect(needsTest([1, 2, 3], 1)).toEqual([2, 3]);
  expect(needsTest(["red", 2, "green"], "yellow")).toEqual(false);
  expect(needsTest(["square", 0.004, "green"], "square")).toEqual([
    0.004,
    "green",
  ]);
});
