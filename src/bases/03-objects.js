// OBject literal

const person = {
  name: 'Tony',
  lastName: 'Stark',
  age: 45,
  address: {
    city: 'New York',
    zip: 1343,
    lat: 14.3232,
    lng: 34.0546
  }
}

// const personSet = new Set();

console.log(person);
// console.log(personSet);

// The Objects in javascript are passing by references not by value

// const person2 = person; => use spred operator to change values
const person2 = { ...person };

person2.name = 'Peter'

console.log(person);
console.log(person2);
