function hello(){

    console.log(this)
    // var name= document.getElementById("name");
    // will give you html code of that element

    var name= document.getElementById("name").value;
    //wil give you value of element

    console.log(name);
    var message = "<h2> Hello Mr/ms "+ name +"</h2>";



    // var para= document.getElementById("para").value;
    // console.log(para);

    // document.querySelector(".content").textContent= message;
    document.querySelector(".content").innerHTML= message;

}


function chngTitle(){

// will not work as title's value is passed by value not by refrence

// textContent prop is premetive so it'll not change the value
    // if(title==="Karan Munjani"){
    //     title+="You're welcome";
    //  }
    var name= document.getElementById("name").value;
    if(name==="Karan Munjani"){

        
    var title= document.querySelector(".title").textContent;
       
    
    title+="You're welcome";

        document.querySelector(".title").textContent=title;
    }
}