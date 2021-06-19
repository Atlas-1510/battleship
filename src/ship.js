function ship(length) {
  // Length is a number: 5
  // Hits is a number: 0 for normal, 1 one for hit
  // i.e [0, 0, 1, 0, 0] represents a hit in the middle of the ship

  let hits = new Array(length).fill(0);

  function hit(sector) {
    hits[sector] = 1;
  }

  function isSunk() {
    let sunk = true;
    for (let i = 0; i < hits.length; i++) {
      if (hits[i] === 0) {
        sunk = false;
        break;
      }
    }
    return sunk;
  }

  return {
    length,
    hits,
    hit,
    isSunk,
  };
}

export default ship;
