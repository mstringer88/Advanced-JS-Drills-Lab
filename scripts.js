//Objectives 1-3

// name = "Michael";
// var name;

// console.log(name);

//End of objectives 1-3

//Objectives 4-6

// name = "Michael";
// let name;

// console.log(name);
//End Objectives 4-6

//Objectives 7-9

// setName()
// function setName() {
//     var name = "Michael";
//     console.log(name);
// }

//End Objectives 7-9

//Objectives 10-11

// console.log("some text");    //Logged 1st
// let avg = findAvg(2, 2);
// console.log("some text", avg);   //logged 3rd
// function findAvg(a, b) {
//     console.log("some text");      //logged 2nd due to hoisting
//     var answer = ( a + b ) / 2;
//     return answer;
// }

//End of hoisting Objectives

//Scope Objectives 
// let fruits = ["oranges", "apples", "kiwis"];
// // let favFruits; //Objective 11 - commented out instead of deleting
// function favoriteFruits() {
//     console.log(fruits[0]);
//     let myfav = fruits[2]; //Objective 12
//     printFavFruit();
//     console.log(leastFav);
//     let leastFav = fruits[0];
//     function printFavFruit() {
//         console.log(myfav);
//     }
// };
// favoriteFruits();


//Ojective 10 - It was able to be noticed because myfav was not declared with var or let so it became globally accessible. And printFavFruit did not have myfav declared so it looked into the global scope to identify myfav.

//Objective 21
// whateverYouWouldLike();
// function whateverYouWouldLike() {
//     console.log("Hello Michael")
// }

//Objective 22/23

// objective22();
// let objective22 = function() {
//     alert ("What's up Mike!")
// }

objective22();
function objective22() {
    alert ("What's up Mike!")
}