
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let newmatr=[];
  if (matrix==undefined || matrix.length ==0) {
    return newmatr
  } else {
  for (let i=0; i<matrix.length; i++) {
    if ((i % 2).toFixed() == 0) {
newmatr[i]=matrix[i].sort((a, b) => a - b);
    }
    else {
newmatr[i]=matrix[i].sort((a, b) => a - b).reverse();
    }
  }
  return newmatr.flat();
  }
}
