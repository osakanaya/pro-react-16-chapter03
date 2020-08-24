class MyData {
    constructor() {
        this.name = "Adam";
        this.weather = "sunny";
    }

    printMessages = () => {
        console.log(`Hello ${this.name}.`);
        console.log(`Today is ${this.weather}.`)
    }
}

let myData = new MyData();
myData.printMessages();