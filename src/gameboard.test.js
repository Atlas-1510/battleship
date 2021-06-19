import gameboard from "./gameboard";
import ship from "./ship";

test("Create a board with 10x10 tiles", () => {
  let board = gameboard().grid;

  expect(board[0][0]).toEqual({
    occupied: false,
    shipType: null,
    hit: false,
  });
  expect(board[9][9]).toEqual({
    occupied: false,
    shipType: null,
    hit: false,
  });
});

test("Vertically place a patrol boat at [3, 4] => [3, 5]", () => {
  let board = gameboard();
  board.placeShip([3, 4], ship("patrolBoat"), "vertical");
  expect(board.grid[3][4]).toEqual({
    occupied: true,
    shipType: "patrolBoat",
    hit: false,
  });
  expect(board.grid[3][5]).toEqual({
    occupied: true,
    shipType: "patrolBoat",
    hit: false,
  });
});

test("Horizontally place a patrol boat at [3, 4] => [4, 4]", () => {
  let board = gameboard();
  board.placeShip([3, 4], ship("patrolBoat"), "vertical");
  expect(board.grid[3][4]).toEqual({
    occupied: true,
    shipType: "patrolBoat",
    hit: false,
  });
  expect(board.grid[4][4]).toEqual({
    occupied: true,
    shipType: "patrolBoat",
    hit: false,
  });
});

test("Prevent ship placement from overlapping gameboard border", () => {
  expect(() => {
    let board = gameboard();
    board.placeShip([2, 8], ship("carrier"), "vertical");
  }).toThrowError(new Error("Ship placement does not fit on board"));
});
