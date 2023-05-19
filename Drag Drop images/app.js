
const button=document.querySelector('.top button');
const container=document.querySelector('.container');
const brows=document.querySelector('.select');
const input=document.querySelector('form input');

let files=[] ;
console.log(files);
brows.addEventListener('click',function(){
    input.click();
})

input.addEventListener('change',() => {
    let file = input.files;
    // console.log(file);
    for(let i =0 ; i < file.length ; i++){
        console.log("this is size" + "" +file[0].size);
        if(files.every(e=> e.name !== file[i].name )){
            // files.push(file[i]);
           
            files.push(file[i]);
            
    }};
// console.log(files.join( ));
    console.log( files.sort((a, b) => a.size - b.size));
    showImages();
    
    
})

// console.log(button);

function showImages(){
    let images='';
    files.forEach((e,i) =>{
        images += `
        <div class="image">
            <img src="${URL.createObjectURL(e)}" alt="image">
            <span onclick="delImage(${i})">&times;</span>
            </div>
        `;
       
    });
    container.innerHTML=images;
}

function delImage(index){
    files.splice(index,1)
    showImages()
}

let userBody=document.getElementById('userBody');

button.addEventListener('click',function(){
   
    userBody.innerHTML = `<tr>
    <td>we cannot upload data</td>
    </tr>
    `
});