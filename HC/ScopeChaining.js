let name = "Karan";
console.log(name);

(function sayName(){
    let name = "Mr K";
    console.log("My name is: "+ name);


    function sayNameTwo(){
        
        console.log("My name is:"+ name);
    }
    sayNameTwo();

})();
