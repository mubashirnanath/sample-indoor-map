// Get a reference to the canvas element and its 2d drawing context
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

const backgroundImage = new Image();
backgroundImage.src = '../floor plan.png';

// Once the image is loaded, draw it on the canvas
backgroundImage.onload = function () {
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
};

// Function to get the mouse position relative to the canvas
function getMousePos(canvas, event) {
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const x = (event.clientX - rect.left) * scaleX;
    const y = (event.clientY - rect.top) * scaleY;
    return { x, y };
}

// Function to handle canvas click events
function canvasClick(event) {
    const mousePos = getMousePos(canvas, event);
    const x = mousePos.x;
    const y = mousePos.y;

    // Use the x and y coordinates as needed, e.g., draw a point on the canvas
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, 2 * Math.PI);
    ctx.fillStyle = 'red';
    ctx.fill();

    // Output the coordinates to the console (you can modify this to display them elsewhere)
    console.log(`Clicked at (${x}, ${y})`);
}

// Add a click event listener to the canvas
canvas.addEventListener('click', canvasClick);
