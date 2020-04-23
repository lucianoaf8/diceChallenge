// Assign variables
var dice1 = Math.floor(Math.random() * 6) + 1;
var dice2 = Math.floor(Math.random() * 6) + 1;

// Change images
document
    .getElementsByClassName("img1")[0]
    .setAttribute("src", "images/dice" + dice1 + ".png");
document
    .getElementsByClassName("img2")[0]
    .setAttribute("src", "images/dice" + dice2 + ".png");

// Change text h1
if (dice1 === dice2) {
    document.getElementsByTagName("h1")[0].innerHTML = "Draw!";
} else if (dice1 > dice2) {
    document.getElementsByTagName("h1")[0].innerHTML = "🚩 Player 1 wins!";
} else {
    document.getElementsByTagName("h1")[0].innerHTML = "Player 2 wins! 🚩";
}
