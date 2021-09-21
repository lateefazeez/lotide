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

module.exports = countOnly;