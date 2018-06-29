class Component{
  constructor(design_elements = []){
    this.design_elements = design_elements;
    if(!this.design_elements.length)
      this.generate_design_elements();
  }

  generate_design_elements(){
    let elements = [
      'FillCircleElement',
      //'StrokeCircleElement',
      //'ConcentricCircleElement',
      //'OverlappingCircleElement',
      //'HalfCircleElement',
      'ArcElement'
    ];

    for(let i = 0; i < getRandomInt(1, 15); i++){
      let element = fetch_random_array_item(elements);
      console.log(element);
      this.design_elements.push(Factory.getInstance(element));
    }

    console.log('-----');
  }

  render(x = 0, y = 0, shape_size){
    this.design_elements.forEach(element => {
      element.setPosition(x, y);
      element.setSize(shape_size);
      element.render();
    });
  }
}
