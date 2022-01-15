var computerPicks = Math.floor(Math.random() * 10) + 1;
var didWin = false;
var playerPicks = null;
var tries = 0;

console.log(computerPicks);

function play() {
  playerPicks = document.querySelector(".userInput").value;

  if (tries >= 5) {
    document.querySelector(".message").textContent =
      "Just stop playing - you suck";
      return;
  }

  if (playerPicks == computerPicks) {
    console.log("you win");
    document.querySelector(".message").textContent =
      "You win a more stocks and cryptos!";
    didWin = true;
  } else {
    console.log("you loser go home");
    document.querySelector(".message").textContent =
      "You lose everything - too bad";
    didWin = false;
  }
  //add tries
  tries++;
  document.querySelector(".tries").textContent = tries;
}

document.querySelector(".btn").addEventListener("click", function(e) {
    play();
});