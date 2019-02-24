// generate random die roll; found online
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// generate new file names for dice images
var randomDiceImage1 = "images/dice" + randomNumber1 + ".png";

var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

// change dice image randomly

// for first die
document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage1);

// for second die
document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);

// declare winner in title
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "Player 1 Wins!"; 
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").textContent = "Player 2 Wins!"; 
} 
else {
    document.querySelector("h1").textContent = "Draw!";
}