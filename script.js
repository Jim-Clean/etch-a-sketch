function addElement() {
    // create a new div element

    for (i = 0; i < 256; i++) {

    const newDiv = document.createElement("div");
    const currentDiv = document.getElementById("grid-container");
    currentDiv.appendChild(newDiv);
    }
}

console.log(addElement());

//create container for each line and enter 16 div boxes? Then flex so they
//expand out horizontal on the page