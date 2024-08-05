//! First you need to make a index.html file and connect the js file to it so you can se the console.log in the browser!
//! Answer the assignments where it says "code here" (remove "code here" and replace it with your code)

// Assignment 1
// console.log hello world!
console.log("hello world!");

// Assignment 2
// define a variable that can be changed later. The variable should be a STRING equal to hello
let stringOne = "hello";

// Assignment 3
// define a variable that cannot be changed. The variable should be a STRING equal to world!
const stringTwo = "world!";

// Assignment 4
// console.log the variables from assignment 2 and 3 so that it shows hello world! in the console
// Use concatenation (+) for this assignment
console.log(stringOne + " " + stringTwo);

// Assignment 5
// Do the same as assignment 4, but instead use template literals to do this assignment
console.log(`${stringOne}, ${stringTwo}`)


// Assignment 6
// Initialize two new variables. The variables should have an INTEGER each. The first variable should be able to change at a later time.
let numberOne = 13;
const numberTwo =  42;

// Assignment 7
// console.log the variables you created in assignment 6. The result should be a STRING and a INTEGER in the console. Remember to use "," istead of "+" to get this result.
// There should be a console.log for each of the variables.
//! I do not understand the phrasing of this assignment.

// Assignment 8
// initialize a new variable that sums the two variables you created in assignment 6
let sum = numberOne + numberTwo;

// Assignment 9
// change the value of the first variable in assignment 6 by reassigning it below (variable1 = newValue).
numberOne = 6;

// Assignment 10
// console.log the variable from assignment 8. The result here is not updated correctly....
console.log(sum);

// Assignment 11
// update the variable from assignment 8 by reassigning it below (variableFromAssignment8 = variableOneFromAssignment6 + variableTwoFromAssignment6).
sum = numberOne + numberTwo;

//Assignment 12
// initialize a new INTEGER variable that can be changed later.
let intOne = 64;

// Assignment 13
// increase the variable in assignment 12 by 1 by using double operators.
intOne++;

// Assignment 14
// decrease the variable in assignment 12 by 1 by using double operators.
intOne--;

// Assignment 15
// multiply the variable in assignment 12 with itself by using double operators.
intOne*=intOne;

// Assignment 16
// divide the variable in assignment 12 with itself by using double operators.
intOne/=intOne;


// Assignment 17
// initialize an array with atleast 4 elements (the datatypes can be of your own choosing).
let belcherArray = ["Bob", "Linda", "Tina", "Gene", "Louise"];

// Assignment 18
// console.log the array from assignment 17
console.log(belcherArray);

// Assignment 19
// console.log the third ELEMENT in the array from assignment 17 (remember the difference between index and element?)
console.log(belcherArray[2]);

// Assignment 20
// console.log the second INDEX value in the array from assignment 17 (remember the difference between index and element?)
console.log(belcherArray[2]);

// Assignment 21
// add a new element to the end of the array from assignment 17 and console.log the result
belcherArray.push("Teddy")
console.log(belcherArray);

// Assignment 22
// add a new element to the start of the array from assignment 17 and console.log the result
belcherArray.unshift("Big Bob");
console.log(belcherArray);

// Assignment 23
//remove the last element from the array from assignment 17 and console.log the result
belcherArray.pop();
console.log(belcherArray);

// Assignment 24
// console.log the length of the array from assignment 17
console.log(belcherArray.length);



//* Getting harder from here on:



// Assignment 25
// use .splice to remove the second element from the from assignment 17 array. Console.log the result.
console.log(belcherArray.splice(0,1));
console.log(belcherArray);


// Assignment 26
// create a function that returns the last element in the array from assignment 17. Does not have to have a parameter, but try to do so. Best here is to create two functions, one with a parameter and one without.
console.log(belcherArray[belcherArray.length-1]);
// Couldn't remember learning how to do this, or find any examples the code from previous lessons.




// Assignment 27
// create a object info about yourself. It should also contain an array (meaning an array inside the object.). Remember to use the right syntax.
// const exampleObject = {
//     key: "value",
//     key: "value",
//      key: ["value", "value", "value"],
//                }
const person = {
    firstName: "Name",
    lastName: "nameName",
    age: 712,
    hobbies: ["murder", "mayhem", "chaos", "procrastination"],
};

// Assignment 28
// create a function that returns the full name of the person. Use the object you created in assignment 27.
const fullName = `${person.firstName} ${person.lastName}`;

// Assignment 29
// console.log the first hobby of the person you created in assignment 27
console.log(person.hobbies[0]);

// Assignment 30
// create an array of 2 objects. Each object should have a firstName, lastName, age and an array of hobbies. (Strukture is similar to assignment 27, but you use "[]" first to create an array, then "{}" for each object in the array.)
const persons = [
    {
        firstName: "Beef",
        lastName: "Tobin",
        age: 41,
        hobbies: ["fishing", "boats", "logs", "sleeping"],
    },
    {
        firstName: "Bob",
        lastName: "Belcher",
        age: 46,
        hobbies: ["cooking", "TV", "sleeping"]
    }
];

// Assignment 31
// console.log the first name of the first person in the array in assignment 30
console.log(persons[0].firstName);


// Assignment 32
// console.log the last name of the second person in assignment 30
console.log(persons[1].lastName);

// Assignment 33
// console.log the second hobby of the second person in assignment 30
console.log(persons[1].hobbies[1]);

// Assignment 34
// initialize a variable that points to the first person in the array in assignment 30. Then console.log that person's second hobby
const beef = persons[0];
console.log(beef.hobbies[1]);