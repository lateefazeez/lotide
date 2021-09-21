const findKeyByValue = (inputObject, value) => {
  for (const key of Object.keys(inputObject)) {
    // console.log("key: ", key);
    // console.log("value: ", inputObject[key]);
    if (inputObject[key] === value) {
      return key;
    }
  }
};

module.exports = findKeyByValue;
