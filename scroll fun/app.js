const scrollUp=document.querySelector('.scrollUp');
const text=document.querySelector('h3');
const scrollBar=document.querySelector('.scrollBar');
const header=document.querySelector('header');

const links=document.querySelectorAll('li a');
console.log(links)
window.addEventListener('scroll', () =>{
    let mainHieght=document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
    // console.log(mainHieght)
    let precentage=document.documentElement.scrollTop / mainHieght;
// console.log(precentage)
scrollBar.style.width=`${precentage * 100}%`
    
    
    if(window.scrollY > 600){
       
        scrollUp.style.display="block";

    }if(window.scrollY > 100){
         header.style.position='fixed';
    }
    else{
        header.style.position='';
        scrollUp.style.display='none';
    }
});

scrollUp.addEventListener('click',() =>{
    window.scrollTo({
        top:0,
        behavior: 'smooth',
    });
});

links.forEach(function(items){
    items.addEventListener('click', (e)=>{
        e.preventDefault();
        let targetElement=document.getElementById(items.dataset.target);
        let postion=targetElement.offsetTop - 220;
        // console.log(postion)
        console.log(targetElement.offsetTop)
        console.log(targetElement.clientHeight)
        window.scrollTo({
            top:postion,
        })
    })

})