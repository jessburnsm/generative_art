// https://css-tricks.com/snippets/javascript/get-url-variables/
function getQueryVariable(variable) {
   let query = window.location.search.substring(1);
   let vars = query.split("&");
   for (let i = 0; i < vars.length; i++) {
     let pair = vars[i].split("=");
     if(pair[0] == variable)
      return pair[1].replace('+', ' ');
   }
   return false;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is exclusive and the minimum is inclusive
}

function fetchRandomArrayItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function setGridConfiguration() {
  setRandomSeed();
  setGridSize();
}

function setGridSize() {
  let x = getQueryVariable('grid_x');
  let y = getQueryVariable('grid_y');

  if(x)
    GRID_X = x;
  if(y)
    GRID_Y = y;

  document.forms['config'].elements['grid_x'].value = GRID_X;
  document.forms['config'].elements['grid_y'].value = GRID_Y;
}

function setRandomSeed() {
  let s = getQueryVariable('seed');
  
  if(s)
    SEED = s;
  else
    SEED = Math.random().toString(36).substring(2);

  Math.seedrandom(SEED);

  document.forms['config'].elements['seed'].value = SEED;
}
