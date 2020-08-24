console.log("Hello");
console.log("Apples");
console.log("This is a statement");
console.log("This is also a statement");

const myFunc = (nameFunction)  => ("Hello " + nameFunction() + ".");

const printName = (nameFunction, printFunction) => printFunction(myFunc(nameFunction));

printName(function () { return "Adam"; }, console.log);
