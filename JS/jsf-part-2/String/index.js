//String

const string = 'The revolution will not be televised.';
console.log(string);

const badString = string;
console.log(badString);

const sql = 'Single Quotes.';
const dql = "Double Quotes."
console.log(sql);
console.log(dql);

const sqldbl = 'Would you eat a "fish supper"?';
const dblsql = "I'm feeling blue.";
console.log(sqldbl);
console.log(dblsql);

const bigmouth = 'I\'ve got no right to take my place...'
console.log(bigmouth);

//Concatenation

//1st method
const name = "Chris";
const greeting = `Hello, ${name}`;
console.log(greeting);

const one = "Hello, ";
const two = "How are you?";
const joined = `${one}${two}`;
console.log(joined);

//Concatenation in context

const button = document.getElementById('button');

function greet(){
    const name = prompt('What is your name?');
    alert(`Hello ${name}, nice to see you!`);
}

button.addEventListener('click', greet);

//2nd method

const greeting2 = "Hello";
const name2 = "Chris";
console.log(greeting2 + ", " + name2);

//convert string to number

const myString = "123";
const myNum = Number(myString);
console.log(typeof myNum);

//convert number to a string

const myString2 = myNum.toString();
console.log(typeof myString2);

//expressions in String

const song = "Fight the Youth";
const score = 9;
const highestScore = 10;
const output = `I like the song ${song}.I gave it a score of ${score/highestScore * 100}%.`;
console.log(output);

//Multiline String

const output2 = `I like the song.
I gave it a score of 90%.`;
console.log(output2);

//Break line

const output3 = "I like the song.\nI gave it a score of 90%.";
console.log(output3);
