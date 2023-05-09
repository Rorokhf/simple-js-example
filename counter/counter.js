const counter=document.querySelector('#number');
const btnInc=document.querySelector('.btn-increase');
const btnDec=document.querySelector('.btn-decrease');



const hart=document.querySelector(".hart"); 
const colors=["#FAD8D6","#EE4266","#3BCEAC","#BD1E1E","#18206F","#E0BE36"];
// console.log(counter,btn); for test

btnInc.onclick= function() {
    counter.textContent=parseInt(counter.textContent) + 1;
    hart.style.color =  getRandomColor();
}

btnDec.onclick= function() {
    if(parseInt(counter.textContent)  > 0){
        counter.textContent=parseInt(counter.textContent) - 1;
        hart.style.color =  getRandomColor();
    }
    
}

function getRandomColor(){
    let ranndomNumber =parseInt(Math.random() * 6);
    return colors[ranndomNumber];
}