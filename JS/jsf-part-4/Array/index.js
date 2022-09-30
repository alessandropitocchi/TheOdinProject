//Arrays
//const array_name = [item1, item2, ...]; 

const cars = ['Saab', 'Volvo', 'BMW'];

console.log(cars[0])
console.log(cars[1])
console.log(cars[2])

const cars2 = [];
const cars3 = cars.slice();
const cars4 = cars.slice();
const cars5 = cars.slice();
const cars6 = cars.slice();

cars2[0] = 'Saab';
cars2[1] = 'Volvo';
cars2[2] = 'BMW';

console.log(cars2.toString());
document.getElementById('demo').innerHTML = cars2.toString();
document.getElementById('demo1').innerHTML = cars2.join('*');

//remove item at the end
cars3.pop();
console.log(cars3.toString());

//add item at the end
cars4.push("Fiat");
console.log(cars4.toString());

//remove item at the beginning
cars5.shift();
console.log(cars5.toString());

//add item at the beginnig
cars6.unshift('Fiat');
console.log(cars6.toString());

//merging two arrays
const array = ['a','b','c'];
const array1 = ['d','e','f'];

const mergedArray = array.concat(array1);

console.log(mergedArray.toString());




