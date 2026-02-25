let btn = document.querySelectorAll("button")
let par = document.querySelector("p")
let input = document.querySelectorAll("input")
console.log(input)
let counter = 0 ;


function increment(){
 par.innerHTML = ++counter;
}
function decrement(){
  if(par.innerHTML >0){
 par.innerHTML = --counter;}
 else{
  alert("Not allowed Negative Value")
 }
}
function reset(){
  counter = 0
  par.innerHTML = counter
}
function setInit(){
  counter = input[0].value;
   par.innerHTML = counter
}

function stepInc(){
    counter += +input[1].value;
   par.innerHTML = +counter
}
btn[0].addEventListener("click",increment)
btn[1].addEventListener("click",decrement)
btn[2].addEventListener("click",reset)
btn[3].addEventListener("click",setInit)
btn[4].addEventListener("click",stepInc)

