//arrays

var arr = new Array();
arr[0]="karan"
arr[1]=145;
//function
arr[2]=function(name){
    console.log("helllo "+name)

}
// object literal
arr[3]={
    course: `HTML " " CSS & JS`
    // backticks allows double/single quotes to be displayed

}

console.log(arr);
// console.log(arr[2]("karan"))
arr[2](arr[0])

console.log(arr[3])
console.log(arr[3].course)
console.log();

console.log();