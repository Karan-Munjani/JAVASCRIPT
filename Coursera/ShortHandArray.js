var arr =["Karan","Munjani",20];
console.log(arr)

for(var i=0; i<arr.length;i++){
    console.log("hello "+ arr[i])   
}

for(var i in arr){
    console.log("hello "+ arr[i])
}


// arr[100]="daada"

// for(var i=0; i<=100;i++){
//     console.log("hello "+ arr[i])   
// }



var myObj = {
        name:"karan",
        course:"Intro TO JS",
        platform:"coursera",
        "Full name":"karan munjani"
}

for(var prop in myObj){
    console.log(prop+":"+myObj[prop])
}
console.log(myObj["course"]);
// for(var i in myObj){
//     console.log(i+":"+myObj[i]);

// }