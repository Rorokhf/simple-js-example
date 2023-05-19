const input=document.querySelector('.input');
const progress=document.querySelector('.progress-done');
let inputBtn= 0;
const text=document.querySelector('.text');
input.addEventListener('keyup',function(){
    inputBtn=parseInt(input.value , 10);
    // console.log(inputBtn);
    if(inputBtn <=100){
        changeValue()
    }else{
        text.innerHTML=`<h3>Please stop, the max value is 100%</h3>`
    }
    
    
});
function changeValue(){
    progress.style.width=`${(inputBtn /100) * 100}%`
    progress.innerHTML=`${Math.ceil((inputBtn /100 ) * 100)}%`
}