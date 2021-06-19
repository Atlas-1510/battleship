function gameboard() {
  // Grid is a 10x10 array, with (0, 0) on  the top left corner and
  // (9, 9) on the bottom right corner
  let grid = new Array(10).fill(new Array(10).fill(tile()));

  function tile() {
    return {
      occupied: false,
      shipType: null,
      hit: false,
    };
  }

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
    }
  }

  return { grid, placeShip };
}

export default gameboard;
