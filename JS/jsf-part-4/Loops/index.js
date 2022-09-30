//Loops

//for

for(let i = 0; i < 10; i++){
    console.log(i);
}

console.log('\n');

const letters = ['a', 'b','c','d','e','f'];

for (let letter of letters){
    console.log(letter.toString());
}

//map()

function toUpper(string) {
    return string.toUpperCase();
}
const upperLetters = letters.map(toUpper);

console.log('\n');

console.log(upperLetters.toString());

//filter()

const cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];

function lCat(cat){
    return cat.startsWith('L');
}

const filteredCats = cats.filter(lCat);

console.log('\n');

console.log(filteredCats.toString());

const cats2 = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];

const filteredCats2 = cats.filter((cat) => cat.startsWith('L'));

console.log('\n');

console.log(filteredCats2.toString());

console.log('\n');

//while

let j = 0;

while(j < 5) {
    console.log(j);
    j++;
}

console.log('\n');

let k = 0;

do{
    console.log(k);
    k++;
}while(k < 5);