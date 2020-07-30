//So now we have the entire function sitting inside of addEventListener, so it will get executed. This function will get executed when this Event files called, dom content loaded and that will happen before any images, or any CSS, or any other script is loaded.

document.addEventListener("DOMContentLoaded",
    function(){
       


        function hello() {
            console.log(this)
            this.textContent = "said it";
            var name = document.getElementById("name").value;
            console.log(name);
            var message = "<h2> Hello Mr/ms " + name + "</h2>";
            document.querySelector(".content").innerHTML = message;
        }



        function clrbtn() {
            btn = document.querySelector("button")
            btn.textContent = "Say it"
        }

        document.querySelector("#name").onclick = clrbtn;

        document.querySelector("button").onclick = hello;
        // onclick onfocus onhover etc etc

    }

);



