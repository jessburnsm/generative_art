const DEFAULT_SHAPE_SIZE = 250;

class DesignElement{
  constructor(options = {}){
    this.params = {};
    this.x = 0;
    this.y = 0;
    this.params['shape_size'] = options['shape_size'] || DEFAULT_SHAPE_SIZE;
  }

  debug(){
    return this.params;
  }

  setPosition(x, y){
    this.x = x;
    this.y = y;
  }

  setSize(size){
    this.params['shape_size'] = size;
  }

  render(){
    throw new Error('All design elements must implement a render method.');
  }
}
