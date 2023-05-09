const btns=document.querySelectorAll(".button-33");

const colorpallet=["#d16ba5", "#c777b9"," #ba83ca", "#aa8fd8", "#9a9ae1", "#8aa7ec", "#79b3f4", "#69bff8", "#52cffe", "#41dfff", "#46eefa", "#5ffbf1"]

btns.forEach(function(item){
    item.addEventListener('click',addStyleAction)
    })


function addStyleAction(){
   
        let rand=parseInt(Math.random() * 12)
        let card =this.closest('div').querySelector('.sub-img');
        card.style.color=colorpallet[rand];
    
        let num=this.closest('div').querySelector('h3');
        let content =parseInt(num.textContent);
        num.textContent= content +1;
}

