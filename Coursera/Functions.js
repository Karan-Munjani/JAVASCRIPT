// function multiplier(x,y){
//     return x*y;
// }

// var a = multiplier(5,10);

// console.log(a);


// function makeMul(value1){
//     function myfunc(value2){
//         return value1*value2;
//         }
//     return myfunc;
// }

// var mulby3= makeMul(3);
//     console.log(mulby3(10));

// function test (){
//     console.log(this);
//     console.log("hello world")
//     this.myName = "Karan"

// }
// test();
// console.log(window.myName)


//constructor
// function Circle (){
// CONSTRUCTOR OVERLOADING IS NOT POSSIBLE In JS
// }

//use capital letter for Function Constructor
function Circle(radius) {
    this.radius = radius

    //method to find area
    this.getArea = function () {
        return Math.PI * Math.pow(this.radius, 2)
    }
    //  this.setRadius=function(radius){
    //     return this.radius=radius
    // }

}
//we don't want setradius method evry time because mainnly circle object will be created by passing radius
// we only need that when the radius is not passed
// by doing this the extra space will not be used when we create object
Circle.prototype.setRadius =
    function (radius) {
        return this.radius = radius;
    }

//new KEYWORD IS MUST
var c1 = new Circle(5)

console.log(c1)
console.log(c1.getArea())

var c2 = new Circle()
console.log(c2)
console.log("setting the radius")
c2.setRadius(4)
console.log(c2)
console.log(c2.getArea())
