const myButtons= document.querySelectorAll(".btn");
const value= document.querySelector(".value-me");
const header= document.querySelector(".header");

let count=0;
myButtons.forEach(btn =>{
    
    btn.addEventListener("click", triggerAction)
});
function triggerAction(e){
    const superStyle=e.currentTarget.classList;

    if(superStyle.contains("decrease")){
        console.log("No, decrease");
        count--;
    }
    else if(superStyle.contains("increase")){
        console.log("Yes, increase");
        count++;
    }
    else{
        count=0;
    };

    if(count > 0){
        value.style.color = "#93d823";
        header.style.color = "#93d823";
    };
    if(count === 0){
        value.style.color = "#22436c";
        header.style.color = "#22436c";
    };
    if(count < 0){
        value.style.color = "#e4215c";
        header.style.color = "#e4215c";
    };
    
    value.textContent=count;
}