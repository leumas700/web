function setup() {
    var canvasDiv = document.getElementById('sketch-holder');
    var width = canvasDiv.offsetWidth;
    var canvas = createCanvas(width, windowHeight*0.8);

    canvas.style('display', 'block');
    canvas.parent('sketch-holder');

    background(0, 0, 100);
}

function windowResized() {
    var canvasDiv = document.getElementById('sketch-holder');
    var width = canvasDiv.offsetWidth;
    resizeCanvas(width, windowHeight*0.8);
    background(0, 0, 100);
}


function draw() {
    if (mouseIsPressed) {
        circle(mouseX, mouseY, 50, 50);
    }
}