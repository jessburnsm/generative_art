class Grid {
  constructor(document_size, num_blocks_x, num_blocks_y = 1, components = []){
    this.document_width = document_size;
    this.document_height = document_size;
    this.num_blocks_x = num_blocks_x;
    this.num_blocks_y = num_blocks_y;
    this.grid_size = (this.document_width / this.num_blocks_x);
    this.grid_center = (this.grid_size / 2);
    this.shape_size = (this.grid_size * .9);

    this.components = components;

    // If components were not provided, generate
    if(!this.components.length)
      this.generateComponents();
  }

  // Generate a list of components to fill the grid
  generateComponents(){
    for(let i = 0; i < Math.pow(this.num_blocks_x, 2); i++){
      this.components.push(new Component());
    }
  }

  render(){
    for(let y = 0; y < this.num_blocks_y; y++){
      for(let x = 0; x < this.num_blocks_x; x++){
        let posX = this.grid_center + (this.grid_size * x);
        let posY = this.grid_center + (this.grid_size * y);

        // Render component then re-add to end of components list
        let component = this.components.shift();
        component.render(posX, posY, this.shape_size);
        this.components.push(component);
      }
    }
  }
}
