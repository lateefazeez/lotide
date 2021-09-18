const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`❤️❤️❤️ Assertion Passed: [actual] === ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Failed: [actual] !== ${expected}`);
  }
};
// assertEqual("Lighthouse Labs" , "Bootcamp");
// assertEqual(1, 1);

const countOnly = (allItems, itemsCount) => {
  let newObject = {};
  let keys = Object.keys(itemsCount);
  //console.log(keys);
  for (let i = 0; i < allItems.length; i++) {
    for (let j = 0; j < keys.length; j++) {
      let name = allItems[i];
      if (name === keys[j]) {
        if (itemsCount[name] === true) {
          //console.log(name);
          if (newObject[name]) {
            newObject[name] += 1;
          } else {
            newObject[name] = 1;
          }
        }
      }
    }
  }
  return newObject;
};


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": true });

//console.log(result1);

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], 1);
