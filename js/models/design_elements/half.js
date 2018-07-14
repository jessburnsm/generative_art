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
