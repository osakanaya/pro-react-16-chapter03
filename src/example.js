console.log("Hello");
console.log("Apples");
console.log("This is a statement");
console.log("This is also a statement");

function myFunc(name) {
    let myLocalVar = "sunny";

    let innerFunction = function () {
        return ("Hello " + name + ". Today is " + myLocalVar + ".");
    };

    return innerFunction();
}

console.log(myFunc("Adam"));

let firstBool = true;
let secondBool = false;

let fistString = "This is a string";
let secondString = "And so is this";

function messageFunction(weather) {
    let message = `It is ${weather} today`;
    console.log(message);
}

messageFunction("raining");

let daysInWeek = 7;
let pi = 3.14;
let hexValue = 0xFFFF;

