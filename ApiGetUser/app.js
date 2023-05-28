const userName=document.getElementById('name-client');
const userEmail=document.getElementById('email-client');
const userImg=document.getElementById('img');
const userInfo=document.querySelectorAll('.button-3');
const dataInfo=document.querySelector('.info');
const reloadData=document.querySelector('.button-41');
console.log(dataInfo)
let data=[]

function getUserData(){
    dataInfo.textContent="Loading......"
let xhttp= new XMLHttpRequest();
xhttp.open("GET", "https://randomuser.me/api/");
xhttp.send();

xhttp.onload=()=>{
    console.log(JSON.parse(xhttp.responseText).results[0])
    data=JSON.parse(xhttp.responseText).results[0];
    userImg.src=data.picture.medium;
    userName.textContent=data.name.frist + " " + data.name.last;
    userEmail.textContent=data.email;
    dataInfo.textContent='';
}
}


reloadData.addEventListener('click',getUserData);

userInfo.forEach(function(item){
    item.addEventListener('click',function(){
      if(this.dataset.info == 'phone'){
        dataInfo.textContent=data[this.dataset.info];
      }else{
        dataInfo.textContent= 'Country: ' + data.location.country + '| City: ' + data.location.city;
      }
    })
})