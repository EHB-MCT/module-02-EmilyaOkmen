let canvasElement = document.querySelector("#canvas");


//1. Add variables needed for animating the ball
let x = 300;
let y = 300;

//2. Add variables (size, speed, colorVal) for controlling the sketch
let speed = 10;
let colorVal = "red";
let size = 50;

let speedX = speed / 2; // delen door 2 zodat het niet aan de hoek begint maar aan een edge of plaats in de vierkant.
let speedY = speed / 2;  //je kan ook een random speed zetten door voor elke speed : Math.random(1,10) of Math.random() + 1, maar dit hangt af hoe je de speed schrijft bij de input;
let directionX = 1;
let directionY = 1;

function setup() {
    //Creating a canvas to draw on, using the existing canvas element.
    createCanvas(600, 600, canvasElement);
    noStroke();
}

function draw() {
    background(220);

    // 3.1 Animate position
    x += speedX * directionX;
    y += speed * directionY;
    // 3.2 Bounce logic: check the edges (if statement om direction te wisselen "-1")
    
    if (x > width || x < 0) { 
        directionX *= -1;
    }

      if (y > height || y < 0 ) { 
        directionY *= -1;
    }

    // 3.3 Draw
    fill(colorVal);
    circle(x, y, size);
}

// --- DOM Interaction ---

// 4. Select the input elements

let sizeInput = document.querySelector("#size-input");
console.log(sizeInput.value); //maakt value bal 50
console.log(Number(sizeInput.value)); //size van de bal kan veranderd worden

let speedInput = document.querySelector("#speed-input");
let colorInput = document.querySelector("#color-input");


// 5. Add Event Listeners; listen to the "input" event for real-time updates while dragging

//size veranderen
sizeInput.addEventListener("input", function () {

    size = Number(sizeInput.value); //veranderd nu de size van de bal met de slider
});

//Speed veranderen
speedInput.addEventListener("input", function () {
    speedX = Number(speedInput.value);
    speedY = Number(speedInput.value);
});

//speedX = speedX * speedXinput.value;
//speedY = speedY * speedYinput.value; => als je de sped randomized in variables

//Kleur veranderen
colorInput.addEventListener("input", function () {
    colorVal = colorInput.value;
});
