// # Primitive

// 7 types : String, Number, Booolean, Null, Undefined, Symbool, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "Suman",
    age: 24,
}

const myFunction = function(){
    console.log("Hello World");
    
}

console.log(typeof id);
