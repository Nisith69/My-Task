







var counter = document.querySelector(".counter h1");
var count = 0;

document.querySelector(".counter").addEventListener("click", function(){
    count++;
    counter.textContent="Love Counter 💘"+count;
 
});




// for change the baground every time
var update = document.querySelector(".counter h1");

document.addEventListener("keydown", function(event) {
   
    if (event.key === "1") {
        
        let randomNum = Math.floor(Math.random() * 5) + 1;

   
        switch (randomNum) {
            case 1:
                update.style.color = "red";
                break;
            case 2:
                update.style.color = "blue";
                break;
            case 3:
                update.style.color = "green";
                break;
            case 4:
                update.style.color = "orange";
                break;
            case 5:
                update.style.color = "purple";
                break;
            default:
                update.style.color = "black";
        }

        console.log("You pressed 1 — color changed!");
    }
});


