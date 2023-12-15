function randomPath() {
  let paths = [
    ["15", "25", "24", "34", "33", "43", "42"],
    ["23", "33", "34", "35", "25", "15"],
  ];

  let randomNum = Math.floor(Math.random() * paths.length);

  return paths[randomNum];
}

let selectedPath = randomPath();
let startingPoint = document.getElementById(selectedPath[0]);
let elements = document.querySelectorAll(".cell-block");
startingPoint.innerHTML = `<img src="./assets/minotaur (1).png" id="playerIcon">`;
let playerIcon = document.getElementById("playerIcon");
let scoreBoard = document.getElementById("points-counter");
let points = 0;
let playerPath = [];
let i = 1;

console.log(selectedPath);

elements.forEach((box) => {
  box.onclick = () => {
    if (selectedPath[i] == box.id) {
      if (selectedPath[selectedPath.length - 1] == box.id) {
        document.getElementById(selectedPath[i - 1]).innerHTML = "";
        box.innerHTML = `<img src="./assets/minotaur (1).png" id="playerIcon">`;
        points += 1;
        scoreBoard.innerText = points;
        i++;
        console.log(points);
      } else {
        document.getElementById(selectedPath[i - 1]).innerHTML = "";
        box.innerHTML = `<img src="./assets/minotaur (1).png" id="playerIcon">`;
        points += 1;
        scoreBoard.innerText = points;
        i++;
      }
    } else {
      points -= 1;
      scoreBoard.innerText = points;
      if (points <= -5) {
        window.location.href = "./game.html";
      }
    }
  };
});
