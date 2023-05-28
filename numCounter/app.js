const numberCot=document.querySelectorAll('.num');
const card=document.querySelectorAll('.card');
numberCot.forEach(function (item) {
let numberSaver=+item.textContent;
let increaseNum=parseInt((5/100) * numberSaver);
item.textContent=0;
let counter=setInterval(function(){
item.textContent=+item.textContent + increaseNum;
if(+item.textContent >=numberSaver){
    item.textContent=numberSaver;
    clearInterval(counter);
}
},70);
});