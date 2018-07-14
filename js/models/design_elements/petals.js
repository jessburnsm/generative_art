class PetalsElement extends DesignElement{
  constructor(options = {}){
    super();
    this.params['design_element'] = 'PetalsElement';
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
    this.setPetalSize();
  }

  setCircleSize(){
    this.params['circle_size'] = getRandomIntInclusive(1, (this.params['shape_size'] / 2));
  }

  setPetalSize(){
    this.params['petal_size'] = getRandomIntInclusive((this.params['circle_size'] / 4), (this.params['shape_size'] / 2));
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
        ellipse(this.params['offset'], 0, this.params['circle_size'], this.params['petal_size']);
        rotate(this.angle);
      }

    pop();
  }
}
