import * as beverage from "./03a-namespace"

let coruja = new beverage.Beverage.Beer('Coruja Otus', 4.9, 35);
console.log(coruja.name);
console.log(coruja.brew());

let sangueDeBoi = new beverage.Beverage.Wine('Sangue de Boi', 99, beverage.Beverage.WineType.Red);
console.log(`${sangueDeBoi.name} ADV: ${sangueDeBoi.abv}% Type: ${sangueDeBoi.type}`);