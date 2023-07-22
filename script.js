function addElement() {
    // create a new div element

    for (i = 0; i < 16; i++) {

    const newDiv = document.createElement("div");
    const currentDiv = document.getElementById("grid-container");
    currentDiv.appendChild(newDiv);
    }
}

console.log(addElement());