var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const animalType = (lines[0]);
const animalName = (lines[1]);
const animalfamily = (lines[2]);
let message;
     if (animalType === `vertebrado` && animalName ===`ave` && animalfamily ===`carnivoro`) {
        message = `aguia`;
     } else if (animalType === `vertebrado` && animalName ===`ave` && animalfamily ===`onivoro`) {
        message =`pomba`;
     } else if (animalType === `vertebrado` && animalName ===`mamifero` && animalfamily===`onivoro`) {
        message = `homem`; 
     } else if (animalType === `vertebrado` && animalName ===`mamifero` && animalfamily===`herbivoro`) {
        message = `vaca`;
     } else if (animalType === `invertebrado` && animalName ===`inseto` && animalfamily===`hematofago`) {
        message = `pulga`;
     } else if (animalType === `invertebrado` && animalName ===`inseto` && animalfamily===`herbivoro` ) {
        message = `lagarta`;
     } else if (animalType === `invertebrado` && animalName ===`anelideo` && animalfamily===`hematofago`) {
        message = `sanguessuga`;
     } else if (animalType === `invertebrado` && animalName ===`anelideo` && animalfamily===`onivoro` ) {
        message = `minhoca`;
     }
   console.log(message);