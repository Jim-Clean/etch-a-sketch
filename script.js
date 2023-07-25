function addElement() {
    // create a new div element

    for (i = 0; i < 256; i++) {

    const newDiv = document.createElement("div");
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
    function clearScreen() {
        
    }
}
console.log(document.getElementById("rainbow").value)
console.log(addElement());

/*
TODO:
- Make button to clear screen
- Make slider to select the amount of pixels (divs in grid)
- House screen in an etch a sketch frame
- Add webpage title/styling to buttons ect.
*/