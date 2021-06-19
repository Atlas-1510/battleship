function ship(type) {
  // Length is a number: 5
  // Hits is a number: 0 for normal, 1 one for hit
  // i.e [0, 0, 1, 0, 0] represents a hit in the middle of the ship

  const shipTypes = {
    carrier: 5,
    battleShip: 4,
    destroyer: 3,
    submarine: 3,
    patrolBoat: 2,
  };

  if (!shipTypes.hasOwnProperty(type)) {
    throw new Error("Invalid ship type");
  }

  const length = shipTypes[type];

  let hits = new Array(length).fill(0);

  function registerHit(sector) {
    if (sector > length - 1) {
      throw new Error("Invalid hit location, outside ship length");
    } else {
      hits[sector] = 1;
    }
  }

  function isSunk() {
    return hits.includes(0) ? false : true;
  }

  return {
    type,
    length,
    hits,
    registerHit,
    isSunk,
  };
}

export default ship;
