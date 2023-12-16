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
let instructBtn = document.getElementById("instructions-btn-img");
let currentUrl = window.location.href;
localStorage.setItem("backLink", currentUrl);
let msgBox = document.getElementById("message");
let resultBox = document.getElementById("result");
let playAgain = document.getElementById("button")
let endCell = document.getElementById(selectedPath[selectedPath.length-1])
endCell.innerHTML = `<img src="./assets/out.png" id="outCell">`
let displayPosition = document.getElementById("currentPosition")
let modifiedPath = []
for(let i = 0; i < selectedPath.length; i++){
  if(selectedPath[i][0] == "1"){
    modifiedPath.push(`a${selectedPath[i][1]}`)
  }else if(selectedPath[i][0] == "2"){
    modifiedPath.push(`b${selectedPath[i][1]}`)
  }else if(selectedPath[i][0] == "3"){
    modifiedPath.push(`c${selectedPath[i][1]}`)
  }else if(selectedPath[i][0] == "4"){
    modifiedPath.push(`d${selectedPath[i][1]}`)
  }else if(selectedPath[i][0] == "5"){
    modifiedPath.push(`e${selectedPath[i][1]}`)
  }
}
displayPosition.innerHTML = `<h1 id="presentCell">Postion: ${modifiedPath[i-1]}</h1>`

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
        resultBox.style.visibility = "visible";
        msgBox.innerHTML = `${localStorage.getItem("nickName")} has completed the labyrinth with ${points} points.`;
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
      let prevState = box.innerHTML;
      box.innerHTML = `<img src="./assets/wrong.png" id="wrongIcon">`;
      setTimeout(() => {
        box.innerHTML = prevState;
      }, 1500);
      if (points <= -10) {
        resultBox.style.visibility = "visible";
        msgBox.innerHTML = `${localStorage.getItem("nickName")} has lost.`;
      }
    }
    displayPosition.innerHTML = `<h1 id="presentCell">Position: ${modifiedPath[i-1]}</h1>`
  };
});

instructBtn.onclick = () => {
  window.location.href = "./instructions.html";
};

playAgain.onclick = () => {
  window.location.href = "./game.html"
}