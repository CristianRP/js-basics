// [var] // not used anymore
// scope global that could cause problems

// const and let
// let we should used condinditional (not often)

// Why a constant
// Doesnt have setters, so it is more lightweight
// lef we will use it only when we know that we need to change the value
const name     = 'Tony'
const lastName = 'Stark'

console.log(name, lastName);

if (true) {
  const name = 'Peter'
  console.log(name);
  // Javascript looks for the variable on the scope above
}





