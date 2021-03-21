
/*
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

function countingValleys(steps, path) {
  const paths = path.split('')
  const initialUnit = 1
  const previousPath = undefined
  const level = paths.reduce((data, pathNow) => {
    const [levelNow, previousPath] = data
    if(previousPath !== pathNow) return [levelNow, pathNow]
    if (previousPath === 'D' && pathNow === 'D'){
      return [levelNow - 1, pathNow]
    } else if(previousPath === 'U' && pathNow === 'U'){
      return [levelNow + 1, pathNow]
    }
    return [levelNow, pathNow]
  }, [initialUnit, previousPath])
  const units = level[0]
  return units
}
//0 -1 0 1 0 -1 0 -1 0 1 2 1
const level = countingValleys(8, 'UDDDUDUU')
console.log(level)