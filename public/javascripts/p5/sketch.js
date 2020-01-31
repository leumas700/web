var canvasDiv, widthDiv, heightDiv;


function setup() {
    canvasDiv = document.getElementById('sketch-holder');
    widthDiv = canvasDiv.offsetWidth;
    heightDiv = canvasDiv.offsetHeight;

    var canvas = createCanvas(widthDiv, heightDiv);

    canvas.style('display', 'block');
    canvas.parent('sketch-holder');

    background(0, 0, 100);
}

function windowResized() {
    canvasDiv = document.getElementById('sketch-holder');
    widthDiv = canvasDiv.offsetWidth;
    heightDiv = canvasDiv.offsetHeight;

    resizeCanvas(widthDiv, heightDiv);
    background(0, 0, 100);
}


function draw() {
    let size = parseInt(getUrlVars()['size']) || 100;

    let rndX = Math.floor(Math.random() * widthDiv);
    let rndY = Math.floor(Math.random() * heightDiv);

    let rndR = Math.floor(Math.random() * 256);
    let rndG = Math.floor(Math.random() * 256);
    let rndB = Math.floor(Math.random() * 256);

    //let c = color(rndR, rndG, rndB, 100);
    let c = color(255, 0, 0);

    fill(c);
    //noStroke();

    //if (mouseInCanvasDiv()){
    if (mouseIsPressed) {
        drawShapeOnTouch(circle, mouseY * 2, size);
        circle(mouseX, mouseY, mouseY * 2);
        //triangle(rndX, rndY, mouseY, rndX, rndX, mouseY);
        //rect(mouseX, mouseY, 100, mouseX)
    }
    //}
}


function drawShapeOnTouch(shape, width, height) {
    touches.forEach((touch) => shape(touch.x, touch.y, width, height));
}

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
    });
    return vars;
}

function mouseInCanvasDiv() {

    return true;
}