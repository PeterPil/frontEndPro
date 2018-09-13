function f(x) {
  return x * x * x;
}
function map(func, array) {
  let arr = [];
  for (let val of array) {
    arr.push(func(val));
  }
  return arr;
}
let array = [1, 2, 6, 4, 5];
document.write(`<h2>map(function, array) = [${map(f, array)}]<h2>`);
document.write(`<h2>array = [${array}]<h2>`);
