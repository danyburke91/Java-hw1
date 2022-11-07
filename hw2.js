//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

// function toTitleCase(str0){
//     return (str0.toLowerCase()).split(' ').map(function(title){
//         return title.replace(title[0], title[0].toUpperCase());
//     }).join(' ');
// }


let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function favFood(person3){
    for(food in person3){
        if (person3[food][0] instanceof Object){
            console.log(`\nMy favorite ${food}s are:`);
            for (let place in person3[food][0]){
                console.log(`\nMy favorite treat is: ${person3[food][0][place]} from ${place}.`);
            };
        }else if (person3[food][0] instanceof Array){
            console.log(`\nMy favorite foods are: ${food}s`);
            for (let food of person3[food][0]){
                console.log(`${food}`);
            }
        }else{
            console.log(`\nMy favorite ${food} is: ${person3[food]}`);
        };
    };
};


// for (property in person3){    
//     console.log(property);
// };                            
// console.log(Object.keys(person3));
// console.log(Object.values(person3));



//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

class Person {    
    constructor(name, age) {
       this.name = name;
       this.age = age;
       
       this.printInfo = () => {
        console.log(`This is a ${this.age} years old person named ${this.name}`);
    };
}
    
       addAge = (ages) => {    
       this.age += 1;
       console.log(`This is their new age: ${this.age}`);
    };
}

let p1 = new Person("Ana", 20);
p1.printInfo();
p1.addAge();

let p2 = new Person("Juan", 30);
p2.printInfo()
p2.addAge();
p2.addAge();
p2.addAge();




// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

let isGreaterThan = (str) => {
    return new Promise((resolve, reject)=>{
        if (str.lenght > 10){
            resolve(str);
        } else {
            reject(str);
        }
    })
    .then( () => {
        console.log("Big word");
    }).catch( () => {
        console.log("Small Number");
    });
}

isGreaterThan('I love Javascript')


// -----------------------------------------------------------------------------

// CODEWARS

// Function 1 - hello world

function greet() {
    return "hello world!";
    }

// Basic Mathematical Operations
    function basicOp(operation, value1, value2)
{ if(operation == '+')return value1 + value2;
  if(operation == '-')return value1 - value2;
  if(operation == '*')return value1 * value2;
  if(operation == '/')return value1 / value2;
}

// Vowel One
function vowelOne(s){
    let arr = s.split('')
    const lowers = ['a', 'e', 'i', 'o', 'u' , 'A' , 'E' , 'I' , 'O', 'U']
    let result = ''
    arr.map(item=>{
      if(!lowers.includes(item)){
        result += "0"
      }else{
        result += "1"
      }
    })
    return result
  }
