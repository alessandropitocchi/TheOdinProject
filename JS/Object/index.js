let object = new Object();
let object1 = {};

let user = {
    name: 'John',
    age: 20,
    'likes bird': true
}

let key = 'name'
console.log(user[key])

console.log(user.name)
console.log(user.age)

user.isAdmin = true

console.log(user)

delete user.age

console.log(user)

console.log(user['likes bird'])

delete user['likes bird']

for ( let k in user){
    console.log(k)
    console.log(user[k])
}

let codes = {
    "49": "Germany",
    "41": "Switzerland",
    "44": "Great Britain",
    // ..,
    "3": "USA",
    "1": "Italy"
};

for (let code in codes) {
    console.log(code); 
}

  