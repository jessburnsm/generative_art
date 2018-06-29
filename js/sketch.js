const PALETTE = [
  [255,60,110],
  [255, 87, 34],
  [255, 202, 44],
  [38, 198, 218],
  [3, 169, 244],
];

const MIN_STROKE = 2;
const MAX_STROKE = 10;

function setup(){
  createCanvas(1000, 1000, SVG);
  angleMode(DEGREES);
  rectMode(CENTER);
  noLoop();
}

function draw(){
  //testLines();
  //new SquareGrid(900, 3, [new Component(), new Component()]).render();
  new SquareGrid(900, 3, []).render();
  // translate(150, 150);
  // new SquareGrid(600, 3, []).render();
}

function testLines(shape_size = 500, sides = 4){
  let numShapes = Math.random() < 0.5 ? sides : (sides * 2);

  noFill();
  push();
    translate((width / 2), (height / 2));
    stroke('red');
    rect(0, 0, shape_size, shape_size);
    for(let i = 0; i < numShapes; i++){
      stroke('black');
      line(0, 0, 0, (shape_size / 2));
      rotate(360 / numShapes);
    }
  pop();
}
