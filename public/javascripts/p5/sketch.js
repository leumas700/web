let canvas, canvasDiv, divWidth, divHeight;
let isMouseOverDiv = false;

let lastX, lastY, lastX2, lastY2, lastX3, lastY3;
let i;

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

    lastX = divWidth / 2;
    lastY = divHeight / 2;

    i = divWidth / 2;

    //frameRate(1);
}

function windowResized() {
    canvasDiv = document.getElementById('sketch-holder');
    divWidth = canvasDiv.offsetWidth;
    divHeight = canvasDiv.offsetHeight;

    resizeCanvas(divWidth, divHeight);
    background(0, 0, 100);
}


let dirRight = true;

function draw() {

    /*
    let size = parseInt(getUrlVars()['size']) || 100;

    let rndX = Math.floor(Math.random() * divWidth);
    let rndY = Math.floor(Math.random() * divHeight);
     */


    let rndR = Math.floor(Math.random() * 256);
    let rndG = Math.floor(Math.random() * 256);
    let rndB = Math.floor(Math.random() * 256);

    //let c = color(rndR, rndG, rndB, 200);
    let c = color(255, 0, 0);

    fill(c);
    //noStroke();


    let xDir = Math.round(Math.random()) * 2 - 1;
    let yDir = Math.round(Math.random()) * 2 - 1;

    let newX;
    if (xDir < 0) {
        newX = lastX - Math.floor(Math.random() * 20);
        if (newX > 100) lastX = newX;
    } else {
        newX = lastX + Math.floor(Math.random() * 20);
        if (newX < divWidth - 100) lastX = newX;
    }

    let newY;
    if (yDir < 0) {
        newY = lastY - Math.floor(Math.random() * 20);
        if (newY > 100) lastY = newY;
    } else {
        newY = lastY + Math.floor(Math.random() * 20);
        if (newY < divHeight - 100) lastY = newY;
    }

    circle(lastX, lastY, 200);
    //line(lastX, lastY, newX-100, newY-100);


    //circle(i, divHeight / 2, 500);

    if (dirRight) {
        i += 10;
        if (i > divWidth - 250) dirRight = false;

    } else if (!dirRight) {
        i -= 10;
        if (i < 250) dirRight = true;
    }


    if (mouseIsPressed) circle(mouseX, mouseY, mouseY);
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
