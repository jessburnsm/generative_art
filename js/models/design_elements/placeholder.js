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
