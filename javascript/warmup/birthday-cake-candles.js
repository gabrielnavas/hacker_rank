function birthdayCakeCandles(candles) {
  let maxN = Number.MIN_SAFE_INTEGER
  candles.forEach(n => {
    if(n > maxN) {
      maxN = n
    }
  });

  return candles.reduce((heightCandles, n) => {
    if(n === maxN) heightCandles++
    return heightCandles
  }, 0)
}


const units = birthdayCakeCandles([3, 2, 1, 3])
console.log(units)