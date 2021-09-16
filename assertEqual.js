const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`❤️❤️❤️ Assertion Passed: [actual] === ${actual}`);
  } else {
    console.log(`✅✅✅ Assertion Failed: [actual] !== ${expected}`);
  }
};
assertEqual("Lighthouse Labs" , "Bootcamp");
assertEqual(1, 1);

const countOnly = (allItems, itemsCount) => {
  let newObject = {};
  let keys = Object.keys(itemsCount);
  //console.log(keys);
  for (let i = 0; i < allItems.length; i++) {
    for (let j = 0; j < keys.length; j++) {
      if (allItems[i] === keys[j]) {
        console.log(allItems[i]);
        //newObject[allItems[i]] += 1;
      }
    }
    
  }
  //return newObject;
};
