function randomDice() {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var randomDiceImage1 = "dice" + randomNumber1 + ".png";
    var randomDiceImage2 = "dice" + randomNumber2 + ".png";
    var player1Image = document.getElementsByClassName("img1")[0];
    player1Image.setAttribute("src", "images/" + randomDiceImage1);
    var player2Image = document.getElementsByClassName("img2")[0];
    player2Image.setAttribute("src", "images/" + randomDiceImage2);

    let text1 = "Player 1 Wins!";
    let text2 = "Player 2 Wins!";
    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = text1;
    } else if (randomNumber2 > randomNumber1) {
        document.querySelector("h1").innerHTML = text2;
    } else {
        document.querySelector("h1").innerHTML = "Draw!";
    }
}