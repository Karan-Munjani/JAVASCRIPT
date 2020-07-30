// Function declarations are scanned and made available 
// Variable declarations are scanned and made Undefined

// Global Context and Execution Context

// Execution context = Variable object, Scope Chaining, this


tipper("5");
function tipper(a){
    var bill = parseInt(a);
    console.log("your bill with tip is: " + (bill + 5));
}

tipper(15);


// bigTipper(154);

// another way defining function
var bigTipper = function (a){
    var bill = parseInt(a);
    console.log("Your bill is:"+ (bill+15));
}

bigTipper(154);

console.log("my name is "+ name);
var name = "Karan";


// undefined and not defined are two different things in javaScript

