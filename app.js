function makingGrid() {
  let grid = document.getElementById("grid");

  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
      let templateCell = `<div class="cell-block" id="${i}${j}" name="box"></div>`;
      grid.innerHTML += templateCell;
    }
  }

  let elements = document.getElementsByName("box");
  let num = 1;
  for (let i = 0; i < elements.length; i++) {
    if (elements[i].id == "00") {
      elements[i].style.backgroundColor = "transparent";
      elements[i].style.border = "0px";
    } else if (
      elements[i].id == "01" ||
      elements[i].id == "02" ||
      elements[i].id == "03" ||
      elements[i].id == "04" ||
      elements[i].id == "05"
    ) {
      elements[i].style.backgroundColor = "transparent";
      elements[i].style.border = "0px";
      elements[i].innerHTML += `<h1 class="coord">${i}</h1>`;
    } else if (
      elements[i].id == "10" ||
      elements[i].id == "20" ||
      elements[i].id == "30" ||
      elements[i].id == "40" ||
      elements[i].id == "50"
    ) {
      elements[i].style.backgroundColor = "transparent";
      elements[i].style.border = "0px";
      elements[i].innerHTML += `<h1 class="coord">${num}</h1>`;
      num += 1;
    }
  }
}

makingGrid()

let start = document.getElementById("11")