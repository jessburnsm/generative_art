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
