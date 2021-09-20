const tail = (array) => {
  if (array !== []) return array.slice(1);
  return [];
};

module.exports = tail;