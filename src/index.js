
// You should implement your task here.

module.exports = function towelSort (matrix = []) {
  if (matrix.length === 0) {
    return [];
  }
  let newArr = [];
  for (let i = 0; i < matrix.length; i++) {
    if (i === 0 || i % 2 === 0) {
     newArr.push(matrix[i])
    } else {
      newArr.push(matrix[i].reverse())
    }
    // console.log(matrix[i]);
  }
  let mergedArr = [].concat.apply([], newArr);
  return mergedArr;
}
