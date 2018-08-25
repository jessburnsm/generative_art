function center() {
  translate((width / 2), (height / 2));
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
