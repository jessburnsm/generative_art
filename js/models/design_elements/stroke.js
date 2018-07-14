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
