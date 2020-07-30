function isEven(element) {
    //     if(element%2===00){
    //         return true;
    //     }
    //     return false;

    // as discussed earlier that conditional operation evaluates to true or false
    return element % 2 === 0;


}


// var isOdd = function(element){
//     return element%2 !== 0;
// }
var isOdd = (element) => {

    return element % 2 !== 0;
    // element%2 !== 0; will throw undefined if not returned anything from the function

}

// console.log(isEven(3));
// console.log(isOdd(3));


// checks for the whole elements and give true if condtion or function in every is satisfied
let result = [10, 24, 22, 32].every(isEven);
console.log(result);


let resultOdd = [33, 13, 17, 19].every((e) => {
    (e % 2 !== 0)
});
console.log(resultOdd)  