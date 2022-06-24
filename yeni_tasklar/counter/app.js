
const counter = document.querySelector("h3")
const buttonDec= document.querySelectorAll("[type = 'submit']")[0];
const buttonRe= document.querySelectorAll("[type = 'submit']")[1];
const buttonInc= document.querySelectorAll("[type = 'submit']")[2];

eventListeners();

// ######################################################
function eventListeners(){
    buttonDec.addEventListener("click",deCrease);
    buttonInc.addEventListener("click",inCrease);
    buttonRe.addEventListener("click",reSet);
}
// ######################################################

// ######################################################
function deCrease(){
    let say = parseInt(counter.innerText);
    say--;
    if (say<0){
        counter.className = "red";
    }else if(say===0){
        counter.className = "black"
    }
    counter.innerText=say;
}
// ######################################################

// ######################################################
function inCrease(){
    let say = parseInt(counter.innerText);
    say++;
    counter.innerText=say;
    if(say>0){
        counter.classList="green"
    }else if(say===0){
        counter.className = "black"
    }
    
}
// ######################################################

// ######################################################
function reSet(){
    let say = 0;
    counter.className = "black"
    counter.innerText=say;

}
// ######################################################