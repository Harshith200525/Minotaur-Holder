function randomPath() {
  let paths = [
    ["15", "25", "24", "34", "33", "43", "42"]
    // ["23", "33", "34", "35", "25", "15"],
  ];

  let randomNum = Math.floor(Math.random() * paths.length);

  return paths[randomNum]
}

let selectedPath = randomPath()
let startingPoint = document.getElementById(selectedPath[0])
let elements = document.querySelectorAll(".cell-block")
startingPoint.innerHTML += `<img src="./assets/minotaur (1).png" id="playerIcon">`
console.log(elements)

elements.forEach((box) => {
    box.onclick = () => {
        console.log(box)
    }
})