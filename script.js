var body = document.getElementById('body');
var color1 = document.getElementById('color1');
var color2 = document.getElementById('color2');
var cssText = document.getElementById('cssText');
var rando = document.getElementById('rando');
var direction = 'to right';

function randomHexColor() {
    // Return a randomly generated hex color in this format #rrggbb
    let hexColor = '#';
    for(let i = 0; i < 6; i++) {
        hexColor += Math.floor(Math.random() * 16).toString(16);
    }
    return hexColor;
}

function randomDirection() {
    return `${Math.floor(Math.random() * 360)}deg`;
}

function updateGradient() {
    // Change the body background based on color inputs
    body.style.background = `linear-gradient(${direction}, ${color1.value}, ${color2.value})`;
    cssText.textContent = `linear-gradient(${direction}, ${color1.value}, ${color2.value})`;
}

function setRandomEverything() {
    color1.value = randomHexColor();
    color2.value = randomHexColor();
    direction = randomDirection();
    updateGradient();
}

color1.value = '#00ff00';
color2.value = '#0000ff';
updateGradient()

color1.addEventListener('input', updateGradient);
color2.addEventListener('input', updateGradient);
rando.addEventListener('click', setRandomEverything);