function staircase(n) {
  let hashTag = 1
  while(hashTag <= n) {
    const hashTags = Array(hashTag).fill('#')
    hashTags.push(...Array(n-hashTag).fill(' '))
    console.log(hashTags.reverse().join(''))
    hashTag++
  }
}

staircase(4)