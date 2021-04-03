function miniMaxSum(arr) {
  let index=0
  let min = Number.MAX_SAFE_INTEGER
  let max = Number.MIN_SAFE_INTEGER
  while(index < arr.length) {
    const sum = arr.reduce((sum, n, indexArr) => {
      if(indexArr === index) return sum
      return sum + n
    }, 0)
    if(sum < min) {
      min = sum
    }
    if(sum > max) {
      max = sum
    }
    index++
  }
  console.log(`${min} ${max}`)
}


miniMaxSum([1,2,3,4,5])