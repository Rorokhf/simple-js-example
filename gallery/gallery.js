const next =document.getElementById('next');
const prev=document.getElementById('prev');

const mainImge=document.getElementById('main-image');
const innerImages=document.querySelectorAll(".inner-image")
const lists=document.querySelectorAll(".item");
const slide=document.getElementById("slide");

let state=0;

// buttons
next.onclick=function(){
  state=state +1;
  if(state < innerImages.length){
    mainImge.style.backgroundImage=innerImages[state].style.backgroundImage;
    slide.appendChild(lists[state]);
  }else{
    state=0;
    mainImge.style.backgroundImage=innerImages[state].style.backgroundImage;
  }
};

prev.onclick=function(){
    state=state -1;
    if(state >= 0){
      mainImge.style.backgroundImage=innerImages[state].style.backgroundImage;
    }else{
      state= innerImages.length -1;
      mainImge.style.backgroundImage=innerImages[state].style.backgroundImage;
    }
  };

// console.log(mainImge.style.backgroundImage)
for(let i=0 ; i< innerImages.length; i++){
    //  console.log(innerImages[i])
    innerImages[i].onclick=function(){
        let imageReplaceSrc=innerImages[i].style.backgroundImage;
      
        // console.log(imageReplaceSrc)
        mainImge.style.backgroundImage=imageReplaceSrc;
        slide.appendChild(lists[i]);
    }
};