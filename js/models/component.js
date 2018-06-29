class Component{
  constructor(design_elements = []){
    this.design_elements = design_elements;

    // If design elements were not provided, generate
    if(!this.design_elements.length)
      this.generate_design_elements();
  }

  generate_design_elements(){
    for(let i = 0; i < getRandomInt(1, 10); i++){
      this.design_elements.push(Factory.getInstance(fetch_random_array_item(ELEMENT_LIBRARY)));
    }
  }

  render(x = 0, y = 0, shape_size){
    this.design_elements.forEach(element => {
      element.setPosition(x, y);
      element.setSize(shape_size);
      element.render();
    });
  }
}
