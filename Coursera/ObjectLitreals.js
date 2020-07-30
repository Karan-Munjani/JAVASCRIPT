//objcts are variables 

var person = {
    firstName: "Karan",
    lastName: "munjani",
    age: 20,
    eyecolor: "Purple",
    fullName: function () {
        return this.firstName + " " + this.lastName

    },
  
    //you cant use this keyword in object 

}

console.log(person.fullName());


// Using the JavaScript Keyword new
// var person = new Object();
// person.firstName = "John";
// person.lastName = "Doe";
// person.age = 50;
// person.eyeColor = "blue";
// person.fullName= function(){
//             return this.firstName+" "+ this.lastName

//         };
// console.log(person.fullName());


//Object literals 
var literalCircle = {
    radius: 10,
    getArea: function () {
        var self = this;
        console.log(this);


        //inner function
        var increaseRadius = function () {
            // this.radius = 20;
            self.radius = 20;
            // console.log(this);
        }
        increaseRadius();
        console.log("after increasing radius ");
        console.log(this);
        console.log(this.radius);
        // when you have an inner function within another function, this keyword starts pointing to the global object(i.e window.radius)
        //to avoid this use self keyword
        return Math.PI * Math.pow(this.radius, 2);
    }

}
console.log(literalCircle.getArea());
