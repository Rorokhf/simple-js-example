let menu=document.querySelector('#menu-icon');
let navlist=document.querySelector('nav');

menu.onclick =() =>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
}

window.onscroll =() =>{
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
}

const sr=ScrollReveal({
    distance:'45px',
    duration:2700,
    reset:true
})
// sr.reveal('.wrapper',{delay:350, origin:'left'})

//////////////////////////////////////////////////////
let cards=document.getElementById('cards');
let newXmlHttp= new XMLHttpRequest();
newXmlHttp.onload=function (){
    let data = JSON.parse(newXmlHttp.responseText).articles;
     console.log(data);
    
    const users= data.map(function(item ){
        
        return ` <div class="card">
        <img src="${item.urlToImage}" alt="">
        <div class="info">
            <h1>${item.title}</h1>
            <p>${item.author}</p>
            <a href="${item.url}" class="btn">Read More</a>
        </div>
    </div>
    
            `
            
    });
console.log(cards.innerHTML=users.join(""));
    cards.innerHTML=users.join("");
}
newXmlHttp.open("GET","https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=a388ecebef3d4439b71ce8e4c077da64");
newXmlHttp.send();
