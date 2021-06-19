import ship from "./ship";

test("When passed carrier ship type, ship factory produces ship of length 5", () => {
  let testShip = ship("carrier");
  expect(testShip.length).toBe(5);
});

test("When passed invalid ship type, throw error", () => {
  expect(() => {
    ship("jetski");
  }).toThrowError(new Error("Invalid ship type"));
});

test("Ship registers hit", () => {
  let testShip = ship("carrier");
  testShip.gridLocations = [
    [3, 4],
    [3, 5],
    [3, 6],
    [3, 7],
    [3, 8],
  ];
  testShip.registerHit(3, 6);
  expect(testShip.hits).toEqual([[3, 6]]);
});

test("Ship that has been fully destroyed registers as sunk", () => {
  let testShip = ship("patrolBoat");
  testShip.gridLocations = [
    [3, 4],
    [3, 5],
  ];
  testShip.registerHit(3, 4);
  testShip.registerHit(3, 5);
  expect(testShip.isSunk()).toBe(true);
});

test("Injured ship is not registered as sunk", () => {
  let testShip = ship("patrolBoat");
  testShip.gridLocations = [
    [3, 4],
    [3, 5],
  ];
  testShip.registerHit(3, 4);
  expect(testShip.isSunk()).toBe(false);
});
