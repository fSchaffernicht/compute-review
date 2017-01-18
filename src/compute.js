export const computeReview = names => {
  const arr = []

  for (var i = 0; i < names.length; i++) {
    arr.push(getUniqueIndex(arr, names.length))
  }

  const randomArr = arr.map(x => names[x])

  let result = []
  for (var i = 0; i < randomArr.length; i++) {
    const lastIndex = (i + 1) % randomArr.length
    const item = `${randomArr[i]} -> ${randomArr[lastIndex]}`

    result.push(item)
  }

  return result
}

const getRandom = value => {
  return Math.floor(Math.random() * value)
}

export const getUniqueIndex = (list, max) => {
  let newIndex;

  do {
    newIndex = getRandom(max)
  } while (list.includes(newIndex));

  return newIndex
}
