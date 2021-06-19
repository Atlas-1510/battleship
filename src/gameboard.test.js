import gameboard from "./gameboard";
import ship from "./ship";

test("Create a board with 10x10 tiles", () => {
  let board = gameboard().grid;

  expect(board[0][0]).toEqual({
    occupied: false,
    shipType: null,
    hit: false,
  });
  expect(board[0][9]).toEqual({
    occupied: false,
    shipType: null,
    hit: false,
  });
  expect(board[9][0]).toEqual({
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
  expect(board.grid[2][4]).toEqual({
    occupied: false,
    shipType: null,
    hit: false,
  });
});

test("Horizontally place a patrol boat at [3, 4] => [4, 4]", () => {
  let board = gameboard();
  board.placeShip([3, 4], ship("patrolBoat"), "horizontal");
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
  expect(board.grid[3][3]).toEqual({
    occupied: false,
    shipType: null,
    hit: false,
  });
});

test("Prevent ship placement from overlapping gameboard border", () => {
  expect(() => {
    let board = gameboard();
    board.placeShip([2, 8], ship("carrier"), "vertical");
  }).toThrowError(new Error("Ship placement does not fit on board"));
});

test("Register hit on board", () => {
  let board = gameboard();
  board.recieveAttack(3, 4);
  expect(board.grid[3][4]).toEqual({
    occupied: false,
    shipType: null,
    hit: true,
  });
});

test("Register hit on ship", () => {
  let board = gameboard();
  let testShip = ship("patrolBoat");
  board.placeShip([3, 4], testShip, "vertical");
  board.recieveAttack(3, 4);
  expect(testShip.hits).toEqual([[3, 4]]);
});

test("When a living ship, report not all ships destroyed", () => {
  let board = gameboard();
  let testShipOne = ship("patrolBoat");
  board.placeShip([3, 4], testShipOne, "vertical");
  let testShipTwo = ship("submarine");
  board.placeShip([5, 4], testShipTwo, "vertical");
  board.recieveAttack(2, 4);
  board.recieveAttack(5, 4);
  expect(board.allShipsSunk()).toBe(false);
});
