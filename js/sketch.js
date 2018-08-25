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
  'ArcElement',
  'PetalsElement',
  //'DotFillElement'
];

const DEBUG = true;

let SEED = ''; // random without calling math.random?

let GRID_X = 3;
let GRID_Y = 3;

function setup(){
  createCanvas(1000, 1000, SVG);
  angleMode(DEGREES);
  rectMode(CENTER);
  noLoop();
  setGridConfiguration();
}

function draw(){
  new Grid(900, GRID_X, GRID_Y).render();
}

function exportCanvas(){
  save();
}
