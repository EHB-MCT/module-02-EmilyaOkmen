let canvasElement = document.querySelector("#canvas");

//1. Add variables needed for animating the ball

let speed = 10;
directionx = 1;
let colorVal = "red";
let size = 50;

let x = 300;
let y = 300;

//2. Add variables (size, speed, colorVal) for controlling the sketch


function setup() {
    //Creating a canvas to draw on, using the existing canvas element.
    createCanvas(600, 600, canvasElement);
    noStroke();
}

function draw() {
    background(220);

    // 3.1 Animate position

    // 3.2 Bounce logic: check the edges

    // 3.3 Draw
    fill(colorVal);
    circle(x, y, size);

}

// --- DOM Interaction ---

// 4. Select the input elements

let sizeInput = document.querySelector("#size-input");

console.log(sizeInput.value); //maakt value ball 50

console.log(Number(sizeInput.value)); //size of the ball kan veranderd worden


// 5. Add Event Listeners; listen to the "input" event for real-time updates while dragging

sizeInput.addEventListener("input", function () {

    size = Number(sizeInput.value); //veranderd nu de size van de bal met de slider

});