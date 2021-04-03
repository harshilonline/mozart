document.querySelector(".dice-roll").addEventListener("click", diceRoll);

function diceRoll() {
  var randomDieRoll = Math.floor(Math.random() * 6) + 1;
  var dieImageSelect = "images/die" + randomDieRoll + ".png";
  document.querySelector(".dice-img").setAttribute("src", dieImageSelect);
  if (randomDieRoll === 1) {
    document
      .querySelector(".listenSong")
      .setAttribute("href", "https://youtu.be/k1-TrAvp_xs");
  } else if (randomDieRoll === 2) {
    document
      .querySelector(".listenSong")
      .setAttribute("href", "https://youtu.be/Zi8vJ_lMxQI");
  } else if (randomDieRoll === 3) {
    document
      .querySelector(".listenSong")
      .setAttribute("href", "https://youtu.be/XXIu0MRuIQU");
  } else if (randomDieRoll === 4) {
    document
      .querySelector(".listenSong")
      .setAttribute("href", "https://youtu.be/HMjQygwPI1c");
  } else if (randomDieRoll === 5) {
    document
      .querySelector(".listenSong")
      .setAttribute("href", "https://youtu.be/oy2zDJPIgwc");
  } else {
    document
      .querySelector(".listenSong")
      .setAttribute("href", "https://youtu.be/lT7iLG-UCdE");
  }
}
