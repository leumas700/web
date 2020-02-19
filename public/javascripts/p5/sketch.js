let canvas, canvasDiv, divWidth, divHeight;
let isMouseOverDiv = false;

let lastX, lastY;

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

    let c = color(rndR, rndG, rndB, 200);
    //let c = color(255, 0, 0);

    fill(c);
    //noStroke();


    let rX = Math.round(Math.random()) * 2 - 1;
    let rY = Math.round(Math.random()) * 2 - 1;

   

    if (rX < 0) {
        lastX -= Math.floor(Math.random() * 10);
    } else {
        lastX += Math.floor(Math.random() * 10);
    }

    if (rY < 0) {
        lastY -= Math.floor(Math.random() * 10);
    } else {
        lastY += Math.floor(Math.random() * 10);
    }
    
    if (lastX < 0) {
        circle(lastX +10, lastY, 50, 50);
    } else if (lastX > divWidth) {
        circle(lastX -10, lastY, 50, 50);
    } else {
        circle(lastX, lastY, 50, 50);
    }
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
