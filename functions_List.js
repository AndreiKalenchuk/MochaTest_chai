
function isAdult(age){
  return  age <= 0 || typeof age !== 'number' || isNaN(age)? 'Check input!': age >= 21;
}

function isPalindrome(str) {
  if (typeof str !== 'string' || !str) return undefined;
  return str.toLowerCase().split('').reverse().join('') === str.toLowerCase();
}

function createArr(num) {
  if(num < 0 ||typeof(num) !== 'number' ) return undefined;
  return Array.from({length: num}, (el, i) => i);
}

function include(arr, item){
  if( !Array.isArray(arr) || typeof item !== 'number') return undefined;
  return arr.includes(item)? `Array includes ${item}` : `Array not includes ${item}` ;
}

function howGood(arr){
  const count = arr.filter( a => a === 'good' ).length;
  return count ? count < 3 ? 'Publish!' : 'I smell a series!' : 'Fail!';
}
module.exports = {isAdult, isPalindrome, createArr, include, howGood};
