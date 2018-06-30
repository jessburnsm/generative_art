const PALETTE = [
  [255,60,110],
  [255, 87, 34],
  [255, 202, 44],
  [38, 198, 218],
  [3, 169, 244],
];

const MIN_STROKE = 2;
const MAX_STROKE = 10;

const ELEMENT_LIBRARY = [
  'FillCircleElement',
  'StrokeCircleElement',
  'ConcentricCircleElement',
  'OverlappingCircleElement',
  'HalfCircleElement',
  'ArcElement'
];

const DEBUG = true;

function setup(){
  createCanvas(1000, 1000, SVG);
  angleMode(DEGREES);
  rectMode(CENTER);
  noLoop();
}

function draw(){
  new SquareGrid(900, 3).render();
}

function exportCanvas(){
  save();
}
