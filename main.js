// console.log("hello world")
// x=5
// console.log(x)

//this is a single-line comment

/* This is a multi
line
comment
*/

console.log("This is the JS 'print' statement")

/* Main differences btwn python and java:
    Python is an interpreter language
    sv JS is a compiled language
    - interpreted language= top-down read and run!
    -compiled language = some thing are done at compile NOT run-time
*/

// python vs JS:
/* strings are the same
    booleans: same
    interger : numeric
    float: numeric
*/

// declare a variable

var name1 = "Brandt"; 
console.log(name1);    //semicolone denotes a line ending

var num1 = 5;
console.log(num1);
var num2 = 10;
console.log(num2);

console.log(typeof num1);

//booleans
var bool1 = true;
console.log(bool1);

//list & dictionaries:
//arrays and objects

//array
var js_arr = [num1, num2, bool1, name1]
console.log(js_arr)

//object
var js_obj = {'a key': 'a_value'}
console.log(js_obj)

/* variable declarations...
*/

var fgh;
console.log(fgh)

console.log(hoisted_variable);
var hoisted_variable = "bear";
console.log(hoisted_variable);

// DONT DO THIS ^^
//ES6 = ECMAScript

/* var is the old way...
new ways:
let
    let allows for redefinition, but Not redeclaration

const
    dont allow either

It forces you to do things the right way!!
*/

let z=7;
z= 'redefined';
console.log(z)

const c = 3.1415;
console.log(c)

let sum1 = 1.75 + 3;
console.log(sum1)

let diff1 = 7.654 - 4.34;
console.log(diff1)

let prod1 = 7.654 * 4.34;
console.log(prod1)

let div1 = 7.654 / 4.34;
console.log(div1)

let exp1 = 7**2;
console.log(exp1)

/* Runding numers
Math.round(<value>) --> rounds to nearest integer
Math.floor (<value>) --> rounds down
Math.ceil(<value>) --> rounds up
*/

let roundPi = Math.round(3.1415);
// 3
let roundPiup = Math.ceil(3.1415);
//4
let roundPidown = Math.floor(3.1415);
//3
console.log(roundPi, roundPiup, roundPidown);

//round to decimal places
// .toFixed() for display purposes
let round_value = 3.1415;
console.log(round_value.toFixed(2));
//>3.14
console.log(round_value);
//>>3.1415

//round= mult by 100, round to int, and divide by 100

console.log(Math.round(round_value*100)/100);





