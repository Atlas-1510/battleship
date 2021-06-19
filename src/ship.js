function ship(length) {
  // Length is a number: 5
  // Hits is a number: 0 for normal, 1 one for hit
  // i.e [0, 0, 1, 0, 0] represents a hit in the middle of the ship

  let hits = new Array(length).fill(0);

  function registerHit(sector) {
    hits[sector] = 1;
  }

  function isSunk() {
    return hits.includes(0) ? false : true;
  }

  return {
    length,
    hits,
    registerHit,
    isSunk,
  };
}

export default ship;
