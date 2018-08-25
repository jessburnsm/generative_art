function getPaletteColor() {
  return PALETTE[getRandomInt(0, PALETTE.length)];
}

function getStrokeWeight() {
  return getRandomIntInclusive(MIN_STROKE, MAX_STROKE);
}
