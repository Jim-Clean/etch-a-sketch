function addElement() {
    // create a new div element

    for (i = 0; i < 256; i++) {

    const newDiv = document.createElement("div");
    const currentDiv = document.getElementById("grid-container");
    currentDiv.appendChild(newDiv);
    //newDiv.addEventListener('mousedown', touchHandler, false);
    newDiv.addEventListener('mouseover', touchHandler, false);
    }

    function touchHandler(e) {
    if (e.type == "mouseover" && e.which == 1) {
        this.style.backgroundColor = 'black';
    }
    }
}

/*
const divs = document.querySelectorAll('div');
    // we use the .forEach method to iterate through each button
    divs.forEach((div) => {

  // and for each one we add a 'click' listener
    divs.addEventListener('click', () => {
        this.style.backgroundColor = 'black';
    });
});
*/


console.log(addElement());

/*
TODO:
- Make grid color when mouse clicked and hovered over square so you can draw
- Make button to choose colour from RGB picker
- Make button to select rainbow mode
- Make a rubber button to reverse any drawn items
- Make button to clear screen
- House screen in an etch a sketch frame
- Add webpage title/styling to buttons ect.
*/