let img;
let bg,fg;

function preload() {
    img = loadImage("./2.jpg");
}

let tilesX, tilesY;
var slide = document.getElementById('sliderTilesX');

function setup() {
    var canvas = createCanvas(1000,1000);
    canvas.parent('artboard');
    img.resize(width,height);
    frameRate(10);
}

function draw() {

    selectColorTheme();
    
    background(bg);
    noStroke();

    tilesX = document.getElementById('sliderTilesX').value;
    tilesY = document.getElementById('sliderTilesY').value;

    let tileW = width/tilesX;
    let tileH = height/tilesY;

    for (let x = 0; x < tilesX; x++) {
        for (let y = 0; y < tilesY; y++) {
            
            let px = parseInt(x*tileW);
            let py = parseInt(y*tileH);

            let c = img.get(px,py);
            let b = brightness(c);
            let s = map(b,0,255,1,0);

            fill(fg);
            let offset = 0;

            if (y % 2 == 0) {
                offset = sin(radians((x+y)*10)) * 10;
            }
            
            push();
            translate(x*tileW + offset,y*tileH);
            rect(0,0,tileW * s,tileH*s);
            pop();

        }
    }
}

document.getElementById("save").addEventListener("click", function() {
    save("a.png");
}); 


function selectColorTheme() {
    let colorTheme = document.getElementById("colorTheme").value;
    if (colorTheme == "sea") {
        fg = color(0,0,0); bg = color(100,100,255);
    } else if (colorTheme == "forest") {
        fg = color(0,0,0); bg = color(100,255,100);
    } else if (colorTheme == "sky") {
        fg = color(0,0,0); bg = color(255,100,100);
    } else {
        fg = color(0,0,0); bg = color(220,220,220);
    }
}