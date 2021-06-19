import gameboard from "./gameboard";
import ship from "./ship";

test("Create a board with 10x10 tiles", () => {
  expect(gameboard().grid).toEqual(new Array(10).fill(new Array(10)));
});

test("Vertically place a ship of length 2 at [3, 4] => [3, 5]", () => {
  let board = gameboard();
  board.placeShip([3, 4], ship(2), "vertical");
  expect(board.grid[3][4]).toBe(true);
  expect(board.grid[3][5]).toBe(true);
});

test("Horizontally place a ship of length 2 at [3, 4] => [4, 4]", () => {
  let board = gameboard();
  board.placeShip([3, 4], ship(2), "vertical");
  expect(board.grid[3][4]).toBe(true);
  expect(board.grid[4][4]).toBe(true);
});
