const DEFAULT_SHAPE_SIZE = 250;

class DesignElement{
  constructor(options = {}){
    this.params = {};
    this.x = 0;
    this.y = 0;
    this.params['shape_size'] = options['shape_size'] || DEFAULT_SHAPE_SIZE;
  }

  debug(){
    return this.params;
  }

  setPosition(x, y){
    this.x = x;
    this.y = y;
  }

  setSize(size){
    this.params['shape_size'] = size;
  }

  render(){
    throw new Error('All design elements must implement a render method.');
  }
}

class ArcElement extends DesignElement{
  constructor(options = {}){
    super();
    this.params['design_element'] = 'ArcElement';
    this.params['stroke_color'] = options['stroke_color'] || getPaletteColor();
    this.params['stroke_weight'] = options['stroke_weight'] || getStrokeWeight();
    this.params['length'] = getRandomIntInclusive(10, 360);
    let angles = [0, 45, 90, 135, 180, 225, 270, 315, 360];
    this.params['angle'] = fetch_random_array_item(angles);
    this.setEllipseSize();
  }

  setSize(size){
    this.params['shape_size'] = size;
    this.setEllipseSize();
  }

  setEllipseSize(){
    this.params['ellipse_size'] = getRandomIntInclusive((this.params['shape_size'] * .1), this.params['shape_size']);
  }

  render(){
    noFill();
    stroke(this.params['stroke_color']);
    strokeWeight(this.params['stroke_weight']);

    push();
      translate(this.x, this.y);
      rotate(this.params['angle']);
      arc(0, 0, this.params['ellipse_size'], this.params['ellipse_size'], 0, 180);
    pop();
  }
}

class ConcentricCircleElement extends DesignElement{
  constructor(options = {}){
    super();
    this.params['design_element'] = 'ConcentricCircleElement';
    this.params['stroke_color'] = options['stroke_color'] || getPaletteColor();
    this.params['stroke_weight'] = options['stroke_weight'] || getStrokeWeight();
    this.setOffset();
    this.setSteps();
  }

  setSize(size){
    this.params['shape_size'] = size;
    this.setOffset();
    this.setSteps();
  }

  setOffset(){
    this.params['offset'] = getRandomIntInclusive((this.params['shape_size'] / 8), this.params['shape_size']);
  }

  setSteps(){
    this.steps = (this.params['shape_size'] / this.params['offset']);
  }

  render(){
    noFill();
    stroke(this.params['stroke_color']);
    strokeWeight(this.params['stroke_weight']);

    push();
      translate(this.x, this.y);
      for(let i = 0; i < this.steps; i++){
        ellipse(0, 0, (this.params['shape_size'] - (this.params['offset'] * i)), (this.params['shape_size'] - (this.params['offset'] * i)));
      }

    pop();
  }
}

class ConcentricSquareElement extends DesignElement{
  constructor(options = {}){
    super();
    this.params['design_element'] = 'ConcentricSquareElement';
    this.params['stroke_color'] = options['stroke_color'] || getPaletteColor();
    this.params['stroke_weight'] = options['stroke_weight'] || getStrokeWeight();
    this.params['offset'] = getRandomIntInclusive(10, 50);
    this.steps = (this.params['shape_size'] / this.params['offset']);
    this.params['rotation'] = Math.random() < .5;
  }

  render(){
    noFill();
    stroke(this.params['stroke_color']);
    strokeWeight(this.params['stroke_weight']);

    push();
      translate(this.x, this.y);
      if(this.params['rotation'])
        rotate(45);
      for(let i = 0; i < this.steps; i++){
        let size = (this.params['shape_size'] - (this.params['offset'] * i));

        if(this.params['rotation'])
          size = Math.sqrt( Math.pow(size, 2) /2 );

        rect(0, 0, size, size);
      }

    pop();
  }
}

class FillCircleElement extends DesignElement{
  constructor(options = {}){
    super();
    this.params['design_element'] = 'FullCircleElement';
    this.params['fill_color'] = options['fill_color'] || getPaletteColor();
    this.setEllipseSize();
  }

  setSize(size){
    this.params['shape_size'] = size;
    this.setEllipseSize();
  }

  setEllipseSize(){
    this.params['ellipse_size'] = getRandomIntInclusive((this.params['shape_size'] * .1), this.params['shape_size']);
  }

  render(){
    fill(this.params['fill_color']);
    noStroke();

    push();
      translate(this.x, this.y);
      ellipse(0, 0, this.params['ellipse_size'], this.params['ellipse_size']);
    pop();
  }
}

class HalfCircleElement extends DesignElement{
  constructor(options = {}){
    super();
    this.params['design_element'] = 'HalfCircleElement';
    this.params['fill_color'] = options['fill_color'] || getPaletteColor();
    this.setEllipseSize();
    let angles = [0, 45, 90, 135, 180, 225, 270, 315, 360];
    this.params['angle'] = fetch_random_array_item(angles);
  }

  setSize(size){
    this.params['shape_size'] = size;
    this.setEllipseSize();
  }

  setEllipseSize(){
    this.params['ellipse_size'] = getRandomIntInclusive((this.params['shape_size'] * .1), this.params['shape_size']);
  }

  render(){
    fill(this.params['fill_color']);
    noStroke();

    push();
      translate(this.x, this.y);
      rotate(this.params['angle']);
      arc(0, 0, this.params['ellipse_size'], this.params['ellipse_size'], 0, 180);
    pop();
  }
}

class OverlappingCircleElement extends DesignElement{
  constructor(options = {}){
    super();
    this.params['design_element'] = 'OverlappingCircleElement';
    this.params['stroke_color'] = options['stroke_color'] || getPaletteColor();
    this.params['stroke_weight'] = options['stroke_weight'] || getStrokeWeight();
    this.setCircleSize();
    this.setOffset();
    this.params['num_shapes'] = getRandomIntInclusive(4, 16);
    this.angle = 360 / this.params['num_shapes'];
  }

  setSize(size){
    this.params['shape_size'] = size;
    this.setCircleSize();
    this.setOffset();
  }

  setCircleSize(){
    this.params['circle_size'] = getRandomIntInclusive(1, (this.params['shape_size'] / 2));
  }

  setOffset(){
    this.params['offset'] = getRandomIntInclusive(0, ((this.params['shape_size'] / 2) - (this.params['circle_size'] / 2)));
  }

  render(){
    noFill();
    stroke(this.params['stroke_color']);
    strokeWeight(this.params['stroke_weight']);

    push();
      translate(this.x, this.y);
      for(let i = 0; i < this.params['num_shapes']; i++){
        ellipse(this.params['offset'], 0, this.params['circle_size'], this.params['circle_size']);
        rotate(this.angle);
      }

    pop();
  }
}

class PlaceholderElement extends DesignElement{
  constructor(){
    super();
  }

  render(){
    noFill();
    push();
      translate(this.x, this.y);
      stroke(this.params['stroke_color']);
      rect(0, 0, this.params['shape_size'], this.params['shape_size']);
      for(let i = 0; i < 8; i++){
        stroke('black');
        line(0, 0, 0, (shape_size / 2));
        rotate(360 / 8);
      }
    pop();
  }
}

class StrokeCircleElement extends DesignElement{
  constructor(options = {}){
    super();
    this.params['design_element'] = 'StrokeCircleElement';
    this.params['stroke_color'] = options['stroke_color'] || getPaletteColor();
    this.params['stroke_weight'] = options['stroke_weight'] || getStrokeWeight();
  }

  render(){
    noFill();
    stroke(this.params['stroke_color']);
    strokeWeight(this.params['stroke_weight']);

    push();
      translate(this.x, this.y);
      ellipse(0, 0, this.params['shape_size'], this.params['shape_size']);
    pop();
  }
}
