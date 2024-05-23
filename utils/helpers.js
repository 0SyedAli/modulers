function insertArrayAt(array, index, arrayToInsert) {
  Array.prototype.splice.apply(array, [index, 0].concat(arrayToInsert));
  return array;
}

function insertAt(array, index) {
  var arrayToInsert = Array.prototype.splice.apply(arguments, [2]);
  return insertArrayAt(array, index, arrayToInsert);
}

export const createWordFromString = (text1, text2, num1) => {
  text1 = text1?.split(" ");
  return insertAt(text1, num1, text2).join(" ");
};
