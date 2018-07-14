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
