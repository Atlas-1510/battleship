import ship from "./ship";

test("Ship factory produces ship of length 5", () => {
  let testShip = ship(5);
  expect(testShip.length).toBe(5);
});

test("Ship 5 sectors long registers hit in 3rd sector", () => {
  let testShip = ship(5);
  testShip.hit(2);
  expect(testShip.hits).toEqual([0, 0, 1, 0, 0]);
});

test("Ship that has been fully destroyed registers as sunk", () => {
  let testShip = ship(1);
  testShip.hit(0);
  testShip.hit(1);
  expect(testShip.isSunk()).toBe(true);
});
