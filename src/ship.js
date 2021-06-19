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

  let hits = [];
  let gridLocations = [];

  function registerHit(x, y) {
    let errorTrigger = true;
    gridLocations.forEach((loc) => {
      if (loc[0] === x && loc[1] === y) {
        hits.push(loc);
        errorTrigger = false;
      }
    });
    if (errorTrigger) {
      throw new Error("Invalid hit location, outside ship gridLocation");
    }
  }

  function isSunk() {
    return gridLocations.every((loc) => hits.includes(loc));
  }

  return {
    type,
    length,
    hits,
    get gridLocations() {
      return gridLocations;
    },
    set gridLocations(array) {
      gridLocations = array;
    },
    registerHit,
    isSunk,
  };
}

export default ship;
