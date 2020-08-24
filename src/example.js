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
