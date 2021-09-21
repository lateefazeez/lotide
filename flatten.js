
const flatten = (mainArray) => {
  let finalArray = [];
  for (let i = 0; i < mainArray.length; i++) {
    if (Array.isArray(mainArray[i])) {
      for (let j = 0; j < mainArray[i].length; j++) {
        finalArray.push(mainArray[i][j]);
      }
    } else {
      finalArray.push(mainArray[i]);
    }
    
  }
  return finalArray;
};

module.exports = flatten;


