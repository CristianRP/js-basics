const characteres = ['Goku', 'Vegeta', 'Trunks']

// const goku = characteres[0]
// const vegeta = characteres[1]
// const trunks = characteres[2]

// -> Destructuring the array
// const [ g, v, t] = characteres
// if we want only the last value, we keept the commas
// const [ , , t] = characteres
// If we want a new one with a value
const [ g, v, t, goten = 'Does not have a value'] = characteres

console.log(g, v, goten);

const returnArray = () => {
  return ['ABC', 123]
}

// const returnArray1 = (arr) => {
//   return [arr[0], arr[1]]
// }
// With destructring too
const returnArray1 = ([letters, numbers]) => {
  return [letters, numbers]
}

const [letters, numbers] = returnArray()
const [letters1, numbers1] = returnArray1(['XYZZ', 342])

console.log(letters, numbers);
console.log(letters1, numbers1);
