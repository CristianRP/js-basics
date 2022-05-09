import { owners } from "../data/heroes";
import superHeroes from '../data/heroes'; // export default you cand call it and put a custom name

// console.log(superHeroes);

export const getHeroById = (id) => superHeroes.find((heroe) => heroe.id === id)
export const getHeroByOwner = (owner) => superHeroes.filter((heroe) => heroe.owner === owner)

// console.log(getHeroById(2));
// console.log(getHeroByOwner('DC'));


// import { getHeroById, getHeroByOwner } from './bases/08-imp-export'

// console.log(getHeroById(2));
// console.log(getHeroByOwner('DC'));
