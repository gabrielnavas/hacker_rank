const arr = [
  [11, 2, 4],
  [4,5, 6],
  [10, 8, -12],
]


function diagonalDifference(arr) {
  let rightDiag = 0
  let leftDiag = 0
  for(let line=0; line < arr.length; line++) {
    rightDiag += arr[line][line]
    leftDiag += arr[arr.length-1 - line][line]
  }
  const diff = rightDiag - leftDiag
  const absoluteDiff = Math.abs(diff)
  return absoluteDiff
}

console.log(diagonalDifference(arr));
