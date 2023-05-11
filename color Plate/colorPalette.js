const colorItem = document.querySelectorAll('.color-item');
const hexColor = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const inputColor = document.querySelector('input[name="color"]');
console.log(colorItem);

window.onload = function () {
    document.body.style.backgroundColor = localStorage.getItem('bg-color') ?? "rgb(206, 144, 178)";
}

colorItem.forEach(function (item, index) {
    let color = generateColor();
    item.style.backgroundColor = color;
    item.addEventListener('click', function () {
        document.body.style.backgroundColor = color;
        removeSelect();
        item.classList.add('borderSelect');
        addColorStorage(color);
    })
});

function removeSelect() {
    colorItem.forEach(function (item) {
        item.classList.remove('borderSelect');
    })
}
console.log(generateColor());

function generateColor() {
    let color = "";
    for (let i = 0; i <= 5; i++) {
        let randIndex = parseInt(Math.random() * hexColor.length);
        color += hexColor[randIndex];
    }
    return '#' + color;
}



inputColor.addEventListener('change', function () {
    addColorStorage(inputColor.value)
    document.body.style.backgroundColor = inputColor.value;
})
function addColorStorage(color) {
    localStorage.setItem('bg-color', color);
}