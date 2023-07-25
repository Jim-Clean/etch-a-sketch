//var x = document.getElementById("rangeValue").innerHTML
slider = document.getElementById("rangeInput");
slider.value = 16;


function addElement() {
    var x = document.getElementById("rangeInput").value;

    //var gridCSS = document.getElementsByClassName('grid')

    //gridCSS.style.width = '30px';
    //gridCSS.style.height = '30px';

    for (i = 0; i < 1; i++) {
        var paras = document.getElementsByClassName('grid');

        while(paras[0]) {
        paras[0].parentNode.removeChild(paras[0]);
        }
    }

    for (i = 0; i < (x*x); i++) {
    // create a new div element
        
    const newDiv = document.createElement("div");
    newDiv.className = 'grid';
    const currentDiv = document.getElementById("grid-container");
    currentDiv.appendChild(newDiv);
    newDiv.addEventListener('mousemove', touchHandler, false);
    newDiv.addEventListener('mousedown', touchHandler, false);
    }
    
    for (i = 0; i < (x*x); i++) {
        var gridCSS = document.getElementsByClassName('grid');
        gridCSS[i].style.width=(480/x)+'px';
        gridCSS[i].style.height=(480/x)+'px';
    }

    //radio selects color mode
    function touchHandler(e) {
        if ((e.type == "mousemove" || e.type == "mousedown") && e.which == 1 && document.getElementById("rainbow").checked == true) {
            const randomColor = Math.floor(Math.random()*16777215).toString(16);
            this.style.backgroundColor = "#" + randomColor; 
        } else if ((e.type == "mousemove" || e.type == "mousedown") && e.which == 1 && document.getElementById("rubber").checked == true){
            this.style.backgroundColor = 'white';   
        } else if ((e.type == "mousemove" || e.type == "mousedown") && e.which == 1 && document.getElementById("color-picker").checked == true) {
            this.style.backgroundColor = document.getElementById("c").value;
        }
    }
}
console.log(document.getElementById("rainbow").value)
console.log(addElement());


function clearScreen() {
    var x = document.getElementById("rangeInput").value
    for (i = 0; i < (x*x); i++) {
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
- Improve pen by making it also paint on click
- House screen in an etch a sketch frame
- Add webpage title/styling to buttons ect.
*/

//<input id="amount" type="number" value="16" min="1" max="64" oninput="rangeInput.value=amount.value" />