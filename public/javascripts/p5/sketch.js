function setup() {
    var canvasDiv = document.getElementById('sketch-holder');
    var width = canvasDiv.offsetWidth;
    var height = canvasDiv.offsetHeight;

    var canvas = createCanvas(width, height);

    canvas.style('display', 'block');
    canvas.parent('sketch-holder');

    background(0, 0, 100);
}

function windowResized() {
    var canvasDiv = document.getElementById('sketch-holder');
    var width = canvasDiv.offsetWidth;
    var height = canvasDiv.offsetHeight;

    resizeCanvas(width, height);
    background(0, 0, 100);
}


function draw() {
    let size = parseInt(getUrlVars()['size']);

    let _color = getUrlVars()['color'];

    if (!size) size=100;

    if (mouseIsPressed) {
        circle(mouseX, mouseY, size);
    }
}


function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
    });
    return vars;
}