let canvas, canvasDiv, divWidth, divHeight;
let isMouseOverDiv = false;

function setup() {
    canvasDiv = document.getElementById('sketch-holder');
    divWidth = canvasDiv.offsetWidth;
    divHeight = canvasDiv.offsetHeight;

    canvas = createCanvas(divWidth, divHeight);

    canvas.style('display', 'block');
    canvas.parent('sketch-holder');

    background(0, 0, 100);

    canvasDiv.addEventListener("mouseenter", () => {
        isMouseOverDiv = true
    });
    canvasDiv.addEventListener("mouseleave", () => {
        isMouseOverDiv = false
    });
}

function windowResized() {
    canvasDiv = document.getElementById('sketch-holder');
    divWidth = canvasDiv.offsetWidth;
    divHeight = canvasDiv.offsetHeight;

    resizeCanvas(divWidth, divHeight);
    background(0, 0, 100);
}

let lastX = 0;
let lastY = 0;
function draw() {

    let size = parseInt(getUrlVars()['size']) || 100;

    let rndX = Math.floor(Math.random() * divWidth);
    let rndY = Math.floor(Math.random() * divHeight);

    let rndR = Math.floor(Math.random() * 256);
    let rndG = Math.floor(Math.random() * 256);
    let rndB = Math.floor(Math.random() * 256);

    let c = color(rndR, rndG, rndB, 20);
    //let c = color(255, 0, 0);

    fill(c);
    //noStroke();


    if (isMouseOverDiv && mouseIsPressed) {
        drawShapeOnTouch(circle, mouseY, size);
        circle(mouseX, mouseY, mouseY);
        //triangle(rndX, rndY, mouseY, rndX, rndX, mouseY);
        //rect(mouseX, mouseY, 100, mouseX);
    }

    line(lastX, divHeight, rndX, 0);
    //rect(lastX,lastY,100,100);
    lastX+=20;
    lastY+=20;
    if(lastX>divWidth) lastX=0;
    if(lastY>divHeight) lastY=0;
    //draw();
    //drawRandomLines(0);
}


function drawShapeOnTouch(shape, width, height) {
    touches.forEach((touch) => shape(touch.x, touch.y, width, height));
}


function drawRandomLines(lastX) {
    let rndX = Math.floor(Math.random() * divWidth);
    let rndY = Math.floor(Math.random() * divHeight);

    //let lastX;
    //let lastY;

    circle(lastX, 500, rndX/3);

    drawRandomLines(lastX+5);
}



function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
    });
    return vars;
}