const counter = document.querySelector('#number');
const btnInc = document.querySelector('.btn-increase');
const btnDec = document.querySelector('.btn-decrease');
const progress = document.querySelector('circle');



const hart = document.querySelector(".hart");
const colors = ["#FAD8D6", "#EE4266", "#3BCEAC", "#BD1E1E", "#18206F", "#E0BE36"];
finalValue= 472;
max =7;
// console.log(counter,btn); for test
console.log("yes")
btnInc.onclick = function () {
    counter.textContent = parseInt(counter.textContent) + 1;
    hart.style.color = getRandomColor();
    if(finalValue <= 472 || finalValue == 0){
        finalValue -= parseInt(counter.textContent) ;
        document.documentElement.style
        .setProperty('--change', finalValue);
    }else{
        finalValue=max;
        document.documentElement.style
        .setProperty('--change', max);
    }
    console.log(finalValue)
    
    // progress.style.animation=" anim 2s linear forwards";
}

btnDec.onclick = function () {
    if (parseInt(counter.textContent) > 0) {
        counter.textContent = parseInt(counter.textContent) - 1;
        hart.style.color = getRandomColor();
        finalValue += parseInt(counter.textContent) * 10;
        console.log(finalValue)
        document.documentElement.style
            .setProperty('--change', finalValue);
    }

}

function getRandomColor() {
    let ranndomNumber = parseInt(Math.random() * 6);
    return colors[ranndomNumber];
}




