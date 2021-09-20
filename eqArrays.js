const eqArrays = (firstArray, secondArray) => {
  if (firstArray.length !== secondArray.length) return false;
  
  for (let i = 0; i < firstArray.length; i++) {
    firstArray, secondArray; //Added sort method
    if (firstArray[i] !== secondArray[i]) {
      return false;
    }
  }
  
  return true;
};

module.exports = eqArrays;


