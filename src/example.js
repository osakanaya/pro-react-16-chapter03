console.log("Hello");
console.log("Apples");
console.log("This is a statement");
console.log("This is also a statement");

function messageFunction(name, weather) {
    var message = "Hello, Adam";

    if (weather === "sunny") {
        var message = "It is a nice day";
        console.log(message);
    } else {
        var message = "It is " + weather + " today";
        console.log(message);
    }

    console.log(message);
}

messageFunction("Adam", "raining");
