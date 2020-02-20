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


    let dirX = Math.round(Math.random()) * 2 - 1;
    let dirY = Math.round(Math.random()) * 2 - 1;
 
    let newX;
    if (dirX < 0) {
        newX = lastX - Math.floor(Math.random() * 20);
        if (newX > 75/2) lastX = newX;
    } else {
        newX = lastX + Math.floor(Math.random() * 20);
        if (newX < divWidth - 75/2) lastX = newX;
    }

    let newY;
    if (dirY < 0) {
        newY = lastY - Math.floor(Math.random() * 20);
        if (newY > 75/2) lastY = newY;
    } else {
        newY = lastY + Math.floor(Math.random() * 20);
        if (newY < divHeight - 75/2) lastY = newY;
    }
      
    circle(lastX, lastY, 75, 75);
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
