//console.log('Hellow GrpahQL')

import myCurrentLocation, { message, name, getGreeting } from "./myModule";
//import myCurrentLocation from "./myModule";

console.log(message)
console.log(name)
console.log(myCurrentLocation)
console.log(getGreeting('momo'))

import sum, { subtract } from "./math";

console.log(sum(5, 5))
console.log(subtract(10, 5))
