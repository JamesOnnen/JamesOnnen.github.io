// @author James

var slider;

function setup() {
    var drawingCanvas = createCanvas(800, 480);
    drawingCanvas.parent('drawingContainer');
    
    saveFunction = function() {
        save(drawingCanvas, "myDrawing.jpg");
    };
    clearCanvas = function() {
        strokeWeight(0);
        rect(0, 0, 800, 480);  
    };
    clearCanvas();
    
    slider = createSlider(1, 50, 10);
    slider.parent('controlContainer');
}

function draw() {
    var colorPicker = document.getElementById("ColorPicker");

    if (mouseIsPressed) {
        strokeWeight(slider.value());
        stroke(
            colorPicker.color.rgb[0]*255, 
            colorPicker.color.rgb[1]*255, 
            colorPicker.color.rgb[2]*255
        );
        line(pmouseX, pmouseY, mouseX, mouseY);
        //noCursor();
    } else {
        cursor(CROSS);
    }
    lastMouseX = mouseX;
    lastMouseY = mouseY;
}