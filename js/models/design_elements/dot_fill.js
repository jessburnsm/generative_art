class DotFillElement extends DesignElement{
  constructor(options = {}){
    super();
    this.params['design_element'] = 'DotFillElement';
    this.params['fill_color'] = options['stroke_color'] || getPaletteColor();
    this.params['circle_size'] = (this.params['shape_size'] / 32);
    this.params['offset'] = this.params['circle_size'] * 1.5;
  }

  render(){
    noStroke();
    fill(this.params['fill_color']);

    let radius = (this.params['shape_size'] / 2);

    push();
      translate(this.x - radius, this.y - radius);
      for(let y = 0; y < this.params['shape_size']; y = y + this.params['offset']){
        for(let x = 0; x < this.params['shape_size']; x = x + this.params['offset']){
          if((Math.pow((this.x + x - radius) - this.x, 2) + Math.pow((this.y + y - radius) - this.y, 2)) > Math.pow(radius, 2))
            ellipse(x, y, this.params['circle_size'], this.params['circle_size']);
        }
      }
    pop();
  }
}
