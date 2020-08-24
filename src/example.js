console.log("Hello");
console.log("Apples");
console.log("This is a statement");
console.log("This is also a statement");

function messageFunction(name, weather) {
    let message = "Hello, Adam";

    if (weather === "sunny") {
        let message = "It is a nice day";
        console.log(message);
    } else {
        let message = "It is " + weather + " today";
        console.log(message);
    }

    console.log(message);
}

messageFunction("Adam", "raining");
