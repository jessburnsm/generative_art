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

function setRandomSeed() {
  let s = getQueryVariable('seed');
  if(s) {
    SEED = s;
    Math.seedrandom(SEED);
    document.forms['config'].elements['seed'].value = SEED;
  }
}
