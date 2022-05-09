// console.log('Start');

import { getHeroById } from "./bases/08-imp-export";

// new Promise( (resolve, reject) => {
//   console.log('promise body');
//   // resolve('Resolved promise')
//   reject('Rejected promise')
// })
// .then(console.log)
// .catch(err => console.log(err));

// console.log('End');

const getHeroByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const hero = getHeroById(id)
      if ( hero ) {
        resolve(hero)
      } else {
        reject('Hero does not exists')
      }
    }, 1000);
  });
}

getHeroByIdAsync(1)
  .then(hero => console.log(`The hero is: ${hero.name}`))
  .catch(console.log);
