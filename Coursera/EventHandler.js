// what are event handlers? Well event handlers are basically functions that you bind using specific methods to certain events that happen in the browser. Now those events might be triggered by just a lifecycle. Meaning something like the page loaded. That's an event. Or it could be triggered by user interaction, like a user typed a character or user clipped something. So one of the most simplest ways to assign an event handler to a particular element is to just use the on something attribute on that element.

document.querySelector("#name").onclick = clrbtn;

document.querySelector("button").onclick = hello;      
// onclick onfocus onhover etc etc



function hello(){
    console.log(this)
    this.textContent="said it"; 
    var name= document.getElementById("name").value;
    console.log(name);
    var message = "<h2> Hello Mr/ms "+ name +"</h2>";

    document.querySelector(".content").innerHTML= message;
}



function clrbtn(){
    btn = document.querySelector("button")
    btn.textContent="Say it"
}
//unobstursive event binding
// document.querySelector("button").addEventListener("click",hello )

