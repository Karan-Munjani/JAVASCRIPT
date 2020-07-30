/*  let a = "Its a string";

console.log(a);

a="Now changed to 550"
console.log(a);

// let a = "You cant do thsi"

{
    let a =  "Can do this";

    console.log(a);

    // let has block level scope
} 

*/
let dayNumber = parseInt(prompt("Enter Day Number"));


let dayEle = document.getElementById("dayName");




switch (dayNumber) {
    case 1:
        dayName = "Monday";
        break;


    case 2:
        dayName = "Tuesday";
        break;


    case 3:
        dayName = "Wednesday";

        break;
    case 4:

        dayName = "Thrusday";

        break;


    case 5:
        dayName = "Friday";

        break;
        
    case 6:
        dayName = "Saturday";

        break;


    case 7:
        dayName = "Sunday";

        break;

    default:
        console.error("Wrong Input");
        break;
}


let message = "<h1>" + dayName + "</h1>";

document.getElementById("dayName").innerHTML = message;