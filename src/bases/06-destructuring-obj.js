// Destructuring

const person = {
  name: 'Tony',
  age: 45,
  codeName: 'Ironman'
}

const { name, age, codeName, power = 'Does not have a power' } = person

console.log(name);
console.log(age);
console.log(codeName);
console.log(power);

const createHero = ({ name, age, codeName, power}) => {
  return {
    id: 1234324,
    name,
    age,
    codeName,
    power
  }
}

const createHero2 = ({ name, age, codeName, power}) => ({ id: 123, name, age, codeName, power })

console.log(createHero(person));
console.log(createHero2(person));
