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

    let x = Math.floor(Math.random() * widthDiv);
    let y = Math.floor(Math.random() * heightDiv);

    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    //let c = color(r, g, b);
    let c = color(255, 255, 255);

    fill(c);

    if (mouseIsPressed) {
        //circle(mouseX, mouseY, size);
        //circle(x, y, size);
        if (touches.length) {
            drawShapeOnTouch(circle,size,size);
        } else {
            circle(mouseX, mouseY, size);
        }
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