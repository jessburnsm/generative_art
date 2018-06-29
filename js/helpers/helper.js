function getPaletteColor(){
  return PALETTE[getRandomInt(0, PALETTE.length)];
}

function getStrokeWeight(){
  return getRandomIntInclusive(MIN_STROKE, MAX_STROKE);
}

function fetch_random_array_item(arr)
{
  return arr[Math.floor(Math.random()*arr.length)];
}

function center(){
  translate((width / 2), (height / 2));
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is exclusive and the minimum is inclusive
}

function hexagon(x, y, radius) {
  var hexagonAngle = 360 / 6;

  beginShape();
  for (var a = 0; a < 360; a += hexagonAngle) {
    var sx = x + cos(a) * radius;
    var sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}