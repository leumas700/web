let canvas, canvasDiv, divWidth, divHeight;
let isMouseOverDiv = false;

let lastX, lastY, lastX2, lastY2, lastX3, lastY3;

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

    lastX = divWidth/2;
    lastY = divHeight/2;
    lastX2 = divWidth/2;
    lastY2 = divHeight/2;
    lastX3 = divWidth/2;
    lastY3 = divHeight/2;

    //frameRate(1);
}

function windowResized() {
    canvasDiv = document.getElementById('sketch-holder');
    divWidth = canvasDiv.offsetWidth;
    divHeight = canvasDiv.offsetHeight;

    resizeCanvas(divWidth, divHeight);
    background(0, 0, 100);
}




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


    fill(color(255, 0, 0, 200));
    let rX = Math.round(Math.random()) * 2 - 1;
    let rY = Math.round(Math.random()) * 2 - 1;
 
    let newX;
    if (rX < 0) {
        newX = lastX - Math.floor(Math.random() * 10);
        if (newX > 75) lastX = newX;
    } else {
        newX = lastX + Math.floor(Math.random() * 10);
        if (newX < divWidth - 75) lastX = newX;
    }

    let newY;
    if (rY < 0) {
        newY = lastY - Math.floor(Math.random() * 10);
        if (lastY > 75) lastY = newY;
    } else {
        newY = lastY + Math.floor(Math.random() * 10);
        if (lastY < divHeight - 75) lastY = newY;
    }
      
    circle(lastX, lastY, 75, 75);


    fill(color(0, 255, 0, 200));
    rX = Math.round(Math.random()) * 2 - 1;
    rY = Math.round(Math.random()) * 2 - 1;

    if (rX < 0) {
        newX = lastX2 - Math.floor(Math.random() * 10);
        if (newX > 75) lastX2 = newX;
    } else {
        newX = lastX2 + Math.floor(Math.random() * 10);
        if (newX < divWidth - 75) lastX2 = newX;
    }

    if (rY < 0) {
        newY = lastY2 - Math.floor(Math.random() * 10);
        if (lastY > 75) lastY2 = newY;
    } else {
        newY = lastY2 + Math.floor(Math.random() * 10);
        if (lastY < divHeight - 75) lastY2 = newY;
    }
      
    circle(lastX2, lastY2, 75, 75);
   
    fill(color(0, 0, 255, 200));
    rX = Math.round(Math.random()) * 2 - 1;
    rY = Math.round(Math.random()) * 2 - 1;

    if (rX < 0) {
        newX = lastX3 - Math.floor(Math.random() * 10);
        if (newX > 75/2) lastX3 = newX;
    } else {
        newX = lastX3 + Math.floor(Math.random() * 10);
        if (newX < divWidth - 75/2) lastX3 = newX;
    }

    if (rY < 0) {
        newY = lastY3 - Math.floor(Math.random() * 10);
        if (lastY > 75) lastY3 = newY;
    } else {
        newY = lastY3 + Math.floor(Math.random() * 10);
        if (lastY < divHeight - 75) lastY3 = newY;
    }
      
    circle(lastX3, lastY3, 75, 75);
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
