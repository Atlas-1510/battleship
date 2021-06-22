function gameboard() {
  // Grid is a 10x10 array, with (0, 0) on  the top left corner and
  // (9, 9) on the bottom right corner

  let grid = Array(10)
    .fill()
    .map(() =>
      Array(10)
        .fill()
        .map(() => ({ occupied: false, shipType: null, hit: false }))
    );

  let ships = [];

  function placeShip(coords, ship, direction) {
    const [x, y] = coords;
    for (let i = 0; i < ship.length; i++) {
      let a;
      let b;
      direction === "vertical" ? ([a, b] = [x, y + i]) : ([a, b] = [x + i, y]);
      if (a > 9 || b > 9) {
        throw new Error("Ship placement does not fit on board");
      }
      grid[a][b] = {
        occupied: true,
        shipType: ship.type,
        hit: false,
      };
      ship.gridLocations.push([a, b]);
    }
    ships.push(ship);
  }

  function recieveAttack(x, y) {
    let tile = grid[x][y];
    if (tile.hit) {
      throw new Error("This tile has already been fired upon");
    }
    tile.hit = true;

    if (tile.occupied) {
      ships.forEach((ship) => {
        if (ship.type === tile.shipType) {
          ship.registerHit(x, y);
        }
      });
    }
  }

  function allShipsSunk() {
    return ships.every((ship) => ship.isSunk());
  }

  return { grid, ships, placeShip, recieveAttack, allShipsSunk };
}

export default gameboard;
