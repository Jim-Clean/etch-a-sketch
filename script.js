function addElement() {
    // create a new div element

    for (i = 0; i < 256; i++) {

    const newDiv = document.createElement("div");
    newDiv.className = 'grid';
    const currentDiv = document.getElementById("grid-container");
    currentDiv.appendChild(newDiv);
    newDiv.addEventListener('mousemove', touchHandler, false);
    }
    
    //radio selects color mode
    function touchHandler(e) {
        if (e.type == "mousemove" && e.which == 1 && document.getElementById("rainbow").checked == true) {
            const randomColor = Math.floor(Math.random()*16777215).toString(16);
            this.style.backgroundColor = "#" + randomColor; 
        } else if (e.type == "mousemove" && e.which == 1 && document.getElementById("rubber").checked == true){
            this.style.backgroundColor = 'white';   
        } else if (e.type == "mousemove" && e.which == 1 && document.getElementById("color-picker").checked == true) {
            this.style.backgroundColor = document.getElementById("c").value;
        }
    }
}
console.log(document.getElementById("rainbow").value)
console.log(addElement());

/*
document.addEventListener("DOMContentLoaded", function () {
    clearScreen();
});
*/

function clearScreen() {
    for (i = 0; i < 256; i++) {
    const gridDiv = document.getElementsByClassName('grid');
    gridDiv[i].style.backgroundColor='white';
    }
}

function logValue(val) {
    document.getElementById("rangeValue").innerHTML = val+"x"+val;
}
//default value of range counter
counter = document.getElementById("rangeValue");
counter.innerHTML = '16x16';

//default the color-picker radio option
radiobutton = document.getElementById("color-picker");
radiobutton.checked = true;

/*
TODO:
- set color mode as default radio option
- Make slider to select the amount of pixels (divs in grid)
- House screen in an etch a sketch frame
- Add webpage title/styling to buttons ect.
*/

//<input id="amount" type="number" value="16" min="1" max="64" oninput="rangeInput.value=amount.value" />