// if statement

let hour = 9;
if (hour < 18) {
    console.log("Good day");
}

//if ... else

if(hour > 18){
    console.log("Good Evening");
} else {
    console.log("Good Day");
}

//else...if

if(hour < 10){
    console.log("Good Morning");
} else if (hour < 18){
    console.log("Good Afternoon");
} else {
    console.log("Good Evening");
}

//logical operators
// OR = ||

if ( hour < 10 || hour > 18){
    console.log("The office is closed.");
}

let isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend) {
    console.log( 'The office is closed.' ); 
  }

  //AND = &&

  let minute = 20;

  if (hour == 9 && minute == 20){
    console.log("The time is 12:30");
  }

  //NOT = !

  console.log(!true);

  //ternary operations

  let isEqual = (hour == minute) ? "Equal" : "Not Equal";
  console.log(isEqual);

  let age = 17;

  let Message = (age < 3) ? 'Hi, Baby' : (age < 18) ? 'Hi, Kid' : (age < 100) ? 'Hi, GrandPa' : 'WOW!';
  console.log(Message);

  console.log((hour == minute) ? 'Equal' : 'Not Equal');

//switch

const day = new Date().getDay();

switch(day) {
    case 0:
        console.log('It\'s Sunday, time to relax!');
        break;
    case 1:
        console.log('Happy Monday!');
        break;
    case 2:
        console.log('It\'s Tuesday, You got this!');
        break;
    case 3:
        console.log('Hump day already!');
        break;
    case 4:
        console.log('Just one more day \'til the weekend!');
        break;
    case 5:
        console.log('Happy Friday!');
        break;
    case 6:
        console.log('Have a wonderful Saturday!');
        break;
    default:
        console.log('Something went wrong!');
}