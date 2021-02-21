'use strict';

function hourglassSum(arr) {
  function sumHourglassWithIndexes(arr, lineIndex, columnIndex) {
    const sum = arr[lineIndex][columnIndex] +
      arr[lineIndex][columnIndex + 1] +
      arr[lineIndex][columnIndex + 2] +
      arr[lineIndex + 1][columnIndex + 1] +
      arr[lineIndex + 2][columnIndex] +
      arr[lineIndex + 2][columnIndex + 1] +
      arr[lineIndex + 2][columnIndex + 2]
    return sum
  }

  const fromOneToThree = [...Array(4).keys()]
  let max = Number.MIN_SAFE_INTEGER
  for (let lineIndex in fromOneToThree) {
    for (let columnIndex in fromOneToThree) {
      const sum = sumHourglassWithIndexes(arr, parseInt(lineIndex), parseInt(columnIndex))
      if (sum > max) max = sum
    }
  }
  return max
}
