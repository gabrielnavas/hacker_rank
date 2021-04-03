function plusMinus(arr) {
  const occurrences = {
    positives:0,
    negatives: 0,
    zeros: 0
  }
  arr.forEach(n => {
    if(n > 0) occurrences.positives++
    else if(n < 0) occurrences.negatives++
    else occurrences.zeros++
  })
  const positives = occurrences.positives / arr.length
  const negatives = occurrences.negatives / arr.length
  const zeros = occurrences.zeros / arr.length
  console.log(positives.toPrecision(6))
  console.log(negatives.toPrecision(6))
  console.log(zeros.toPrecision(6))
}

const arr = [-4, 3, -9, 0, 4, 1]
plusMinus(arr)