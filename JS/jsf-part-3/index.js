function myFunction(){
    console.log("hello")
}

function doubleN(x){
    return x * 2;
}

let n = 2
myFunction()
console.log(doubleN(n));

const textBox = document.querySelector("#TextBox")
const output = document.querySelector("#output")
textBox.addEventListener('keydown', (event) => output.textContent = `You pressed "${event.key}".`)

let sum = (a, b) => a + b
console.log(sum(2, 4))

let double = n => n * 2;
console.log(double(4))

let sayHi = () => console.log("Hello!")
sayHi();

let sayHi2 = (name) => console.log(`Hello ${name}!`)
sayHi2("Ale")

//exercises

//Sum
let add7 = n => n+7;
console.log(add7(5))

//multiply
function multiply(x, y){
    return x * y
}
console.log(multiply(6, 5))

//capitalize only first letter
function capitalize(name){
    name = name.toLowerCase()
    console.log(name[0].toUpperCase() + name.slice(1))
} 
capitalize("AlEsSAnDrO")

//return last letter
function lastLetter(string){
    console.log(string[string.length-1])
}
lastLetter("Alessandro")

