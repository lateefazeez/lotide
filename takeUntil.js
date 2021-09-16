const takeUntil = function(array, callback) {
  // ...
  //console.log(callback[0]);
  //return array.slice(0, array[callback[0]]);
  for (let i = 0; i < array.length; i++) {
    if (array[i] === callback[0]) return array.slice(0, i);
  }
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const data = data1.filter(x => x < 1);
// console.log(data);
const results1 = takeUntil(data1, data1.filter(x => x < 1));
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, data2.filter(x => x === ','));
console.log(results2);