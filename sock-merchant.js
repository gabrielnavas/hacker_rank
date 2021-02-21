'use stricts'

// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
  const pairObj = {}

  ar.forEach(num => {
    if (!pairObj[num]) {
      pairObj[num] = [{ [num]: 1 }]
    } else if (pairObj[num][0][num] === 1) {
      pairObj[num][0][num]++
    } else {
      pairObj[num].unshift({ [num]: 1 })
    }
  })
  const numsOfPairs = Object
    .values(pairObj)
    .reduce((totalCountPair, listPair) => {
      const countList = listPair.reduce((countPair, pair) => {
        const valuesObj = Object.values(pair)
        const two = valuesObj[0]
        return two === 2 ? countPair + 1 : countPair
      }, 0)
      return totalCountPair + countList
    }, 0)
  return numsOfPairs
}

const arr = [10, 20, 20, 10, 10, 30, 50, 10, 20]
console.log(sockMerchant(arr.length, arr)) // 3