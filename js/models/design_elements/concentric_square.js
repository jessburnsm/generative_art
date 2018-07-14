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
