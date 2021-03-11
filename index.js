                      // Keeping Refresh Me

if (window.performance.navigation.type === 1) {
  rollDice();
}

                          // Roll Dice

function rollDice() {

                // Random Number for left and right Dice Image

  var randomNumber1 = Math.floor((Math.random() * 6)) + 1;
  var randomNumber2 = Math.floor((Math.random() * 6)) + 1;

                        // Selecting HTML-Elements

  var leftDice = document.getElementsByClassName("img1")[0];
  var rightDice = document.getElementsByClassName("img2")[0];
  var headingText = document.querySelector(".container h1");

                        // Left Dice Change

  leftDice.setAttribute("src", "images/dice" + randomNumber1 + ".png");

                       // Right Dice Change

  rightDice.setAttribute("src", "images/dice" + randomNumber2 + ".png");


                    // Deciding the Winner Heading Text

  if (randomNumber1 > randomNumber2) {
    headingText.innerHTML = "Player 1 Wins!";
  } else if (randomNumber1 < randomNumber2) {
    headingText.innerHTML = "Player 2 Wins!";
  } else {
    headingText.innerHTML = "Draw!"
  }

}
