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

test("Carrier registers hit in 3rd sector", () => {
  let testShip = ship("carrier");
  testShip.registerHit(2);
  expect(testShip.hits).toEqual([0, 0, 1, 0, 0]);
});

test("Hit one tile outside ship length throws error", () => {
  expect(() => ship("carrier").registerHit(5)).toThrowError(
    new Error("Invalid hit location, outside ship length")
  );
});

test("Ship that has been fully destroyed registers as sunk", () => {
  let testShip = ship("patrolBoat");
  testShip.registerHit(0);
  testShip.registerHit(1);
  expect(testShip.isSunk()).toBe(true);
});
