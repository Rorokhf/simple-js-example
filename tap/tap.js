const tabTitle = document.querySelectorAll("input");
const tabContent = document.querySelectorAll('.text');
const lab = document.querySelectorAll('label');

// console.log(tabTitle[0].checked);
//  console.log(tabContent[1].id)
console.log(lab[1].id)
lab[0].style.background='#6d50e2';

tabTitle.forEach(function (el) {
    el.addEventListener('click', function () {
        removeClassActive(tabContent);
       
        removeClassActive(lab);
        console.log(el.checked)



        if (el.checked == true) {
            console.log('hi')
            for (let i = 0; i < lab.length; i++) {
                if (el.id == lab[i].id) {
                    lab[i].style.background='#6d50e2';
                    console.log("hello")


                }
               
            }
        
        
        for (let i = 0; i < tabContent.length; i++) {
            if (el.id == tabContent[i].id) {
                tabContent[i].classList.add('active');
                // console.log("hello")
                // console.log(tabContent[i])
            }
        }
    }
   

    })


})
function removeClassActive(item) {
    item.forEach((element) => {
        element.classList.remove('active');
        element.style.removeProperty('background');
    });
}

