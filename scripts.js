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

console.log("some text");    //Logged 1st
let avg = findAvg(2, 2);
console.log("some text", avg);   //logged 3rd
function findAvg(a, b) {
    console.log("some text");      //logged 2nd due to hoisting
    var answer = ( a + b ) / 2;
    return answer;
}

//End of hoisting Objectives