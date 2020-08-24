import oddOnly, { sumValues } from "./sum";
import * as ops from "./operations";

let values = [10, 20, 30, 40, 50];

let total = sumValues(values);
let odds = oddOnly(values);

console.log(`Total: ${total}, Odd Total: ${odds}`);

console.log(`Multiply: ${ops.multiply(values)}`);
console.log(`Subtract: ${ops.subtract(1000, values)}`);
