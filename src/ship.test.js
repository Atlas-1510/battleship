import ship from "./ship";

test("When passed length equal to 5, ship factory produces ship of length 5", () => {
  let testShip = ship(5);
  expect(testShip.length).toBe(5);
});

test("Ship 5 sectors long registers hit in 3rd sector", () => {
  let testShip = ship(5);
  testShip.registerHit(2);
  expect(testShip.hits).toEqual([0, 0, 1, 0, 0]);
});

test("Ship that has been fully destroyed registers as sunk", () => {
  let testShip = ship(1);
  testShip.registerHit(0);
  testShip.registerHit(1);
  expect(testShip.isSunk()).toBe(true);
});
