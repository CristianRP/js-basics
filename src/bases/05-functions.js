// function hello(xyz) {
//   return `Hello ${xyz}`
// }
// this is more secure
// const hello = function(xyz) {
//   return `Hello ${xyz}`
// }
// Arrow Function
// const hello = ( xyz ) => {
//   return `Hello ${xyz}`
// }
// Simplified Arrow Function
// const hello = xyz => `Hello ${xyz}`;
const hello = ( xyz = 'Peter' ) => `Hello ${xyz}`;

const name = 'Tony'

console.log(hello(name));

// const getUser = () => {
//   return {
//     uid: 'ABC',
//     userName: 'Tony001'
//   }
// }
const getUser = () => ({ uid: 'ABc', userName: 'Tony' })

console.log(getUser());

const heroes = [{
  id: 1,
  name: 'Batman'
}, {
  id: 2,
  name: 'Superman'
}]

const exists = heroes.some(e => e.id == 1);
const find = heroes.find(e => e.id == 1);
const { name: name1 } = heroes.find(e => e.id == 1);

console.log(exists);
console.log(name1);