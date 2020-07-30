let shopping = ['bread','milk','cheese','paneer'];

console.log(shopping.length)



// array from String

let string = "hello there its Karan Munjani Here";

let stringArray = string.split(" ");
console.log(stringArray);
console.log(stringArray[stringArray.length-1]);


stringArray.push("!");
stringArray.push("Okay.");
stringArray.unshift("Listen!");
stringArray.unshift("!");
console.log(stringArray);

stringArray.shift();

console.log("\n", stringArray);
console.log(stringArray.length);
//string From array
let string2 = stringArray.toString();

console.log(string2)