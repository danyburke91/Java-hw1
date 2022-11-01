//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]


function findWords(dog_string, dog_names){
    for(let i = 0; i < dog_names.length; i++){ 
        let j = dog_names[i].toLowerCase();  
        let x = dog_string.toLowerCase(); 
        if (x.includes(j)){
            // console.log(dog_string.includes(dog_names[i]))
            console.log('Matched dog_names');
        } else {
            console.log('No Matches');
        };
    };
};

console.log(findWords(dog_string, dog_names))

//-----------------------------------------------------------------
function findWords(dogS, dogA){

    for(i of dogA){
        if (dogS.toLowerCase().includes(i.toLowerCase())){
            console.log("Matched dog_names")
        }
        else{
            console.log("No Matches");
        };
    };
};

console.log(findWords(dog_string, dog_names))

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

// Given 

let array = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
let arr = []

function replaceEvens(){
    for(let i = 0; i < array.length; i++){
        if(i === 0){
            arr.push('even index')
        } else if (i % 2 === 0){
            arr.push('even index')
        } else {
            arr.push(array[i]);
        };
    };
    console.log(arr)
};

replaceEvens()


//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]