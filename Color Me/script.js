const btn=document.querySelector(".btn")
const div1=document.querySelector(".div1")
const div2=document.querySelector(".div2")
const div3=document.querySelector(".div3")
const div4=document.querySelector(".div4")
const div5=document.querySelector(".div5")
const div6=document.querySelector(".div6")
const div7=document.querySelector(".div7")
const div8=document.querySelector(".div8")
const div9=document.querySelector(".div9")
let input=document.querySelector(".input")

btn.addEventListener("click", () => {
    if (input.value == "1") {
        div1.style.backgroundColor = "green"; 
    } 
    else if(input.value == "2") {
        div2.style.backgroundColor = "green"; 
    } 
    else if(input.value == "3") {
        div3.style.backgroundColor = "green"; 
    } 
    else if(input.value == "4") {
        div4.style.backgroundColor = "green"; 
    } 
    else if(input.value == "5") {
        div5.style.backgroundColor = "green"; 
    } 
    else if(input.value == "6") {
        div6.style.backgroundColor = "green"; 
    } 
    else if(input.value == "7") {
        div7.style.backgroundColor = "green"; 
    } 
    else if(input.value == "8") {
        div8.style.backgroundColor = "green"; 
    } 
    else if(input.value == "9") {
        div9.style.backgroundColor = "green"; 
    } 
    
});
