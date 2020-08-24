console.log("Hello");
console.log("Apples");
console.log("This is a statement");
console.log("This is also a statement");

function myFunc(nameFunction) {
    return ("Hello " + nameFunction() + ".");
}

console.log(myFunc(function () {
    return "Adam";
}));

