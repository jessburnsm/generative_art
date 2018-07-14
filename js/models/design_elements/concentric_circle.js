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
