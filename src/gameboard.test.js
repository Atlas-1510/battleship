import gameboard from "./gameboard";

test("Creates board with 10x10 tiles", () => {
  expect(gameboard()).toEqual(new Array(10).fill(new Array(10)));
});
