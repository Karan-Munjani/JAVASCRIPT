// Ajax uses XMLHttpRequest Object (also called xhr object)
console.log("AJAX TUT")
let fatchbtn= document.getElementById("fetchBtn");
fatchbtn.addEventListener('click',btnClickHandler);


function btnClickHandler(){
    
    
    console.log("you have clicked fetch btn")
    
    
    
    //initiate xmr object
    const xhr =new XMLHttpRequest();




//open xhr object
xhr.open('GET','karan.txt',true);


xhr.onreadystatechange=function(){
    console.log("ready state is",xhr.readyState);
}
//when progress

xhr.onprogress = function(){
    console.log("on progress");
}

// xhr.onload = function(){
//     console.log(this.responseText);
// }



xhr.onload = function(){
    if(xhr.readyState=4)
    {
        console.log(this.responseText);
    }
    else{
        console.log("some error occured");
    }
}
xhr.send();

}
