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

    var colorCanvas = document.getElementById('color_canvas');
    var ColorCtx = colorCanvas .getContext('2d');  // This create a 2D context for the canvas

    var color = 'rgba(0,0,255,1)';
    let gradientH = ColorCtx .createLinearGradient(0, 0, ColorCtx .canvas.width, 0);
    gradientH.addColorStop(0, '#fff');
    gradientH.addColorStop(1, color);
    ColorCtx .fillStyle = gradientH;
    ColorCtx .fillRect(0, 0, ColorCtx .canvas.width, ColorCtx .canvas.height);


    // Create a Vertical Gradient(white to black)
    let gradientV = ColorCtx .createLinearGradient(0, 0, 0, 300);
    gradientV.addColorStop(0, 'rgba(0,0,0,0)');
    gradientV.addColorStop(1, '#000');
    ColorCtx .fillStyle = gradientV;
    ColorCtx .fillRect(0, 0, ColorCtx .canvas.width, 
    ColorCtx .canvas.height);
    
    colorCanvas.addEventListener('click',function(event){
        let x = event.clientX;  // Get X coordinate
        let y = event.clientY;  // Get Y coordinate
        pixel = ColorCtx.getImageData(x,y,1,1)['data'];   // Read pixel Color
        rgb = `rgb(${pixel[0]},${pixel[1]},${pixel[2]})`;
        document.body.style.background = rgb;    // Set this color to body of the document
     });
}



console.log(addElement());

/*
TODO:
- Make button to choose colour from RGB picker
- Make button to select rainbow mode
- Make a rubber button to reverse any drawn items
- Make button to clear screen
- House screen in an etch a sketch frame
- Add webpage title/styling to buttons ect.
*/