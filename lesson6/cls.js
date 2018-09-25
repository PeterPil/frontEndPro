function inArray(array1,array2){
  let arr = [];
  for (let val1 of array1) {
    for (let val2 of array2) {
      if (val2.indexOf(val1) === 0 || val2.indexOf(val1) === 1)
        arr.push(val1);
    }
  }
  return arr;
}

let a1 = ["xyz", "live", "strong"];
let a2 = ["lively", "alive", "harp", "sharp", "armstrong"];



console.log(inArray(a1,a2));
