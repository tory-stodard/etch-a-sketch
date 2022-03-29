let gridSize = 256;
const clearGridBtn = document.querySelector(".clearGrid");
const changeGridBtn = document.querySelector(".changeGrid");

clearGridBtn.addEventListener("click", clearGrid);
changeGridBtn.addEventListener("click", changeGridSize);

createGrid();

function createGrid() {
  const gridContainer = document.querySelector(".gridContainer");

  for (let i = 0; i < gridSize; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    gridContainer.appendChild(box);
  }
}

function changeGridSize() {
  // const gridContainer = document.querySelector(".gridContainer");
  // let gtc;
  // let gtr;

  clearGrid();
  gridSize = prompt("Choose a grid size (1-100).");
  gridSize *= gridSize;
  // gtc = gridSize / gridSize;
  // gtc = "repeat(" + gtc.toString() + ",1fr)";
  // gtr = gridSize / gridSize;
  // gtr = "repeat(" + gtr.toString() + ",1fr";
  // gridContainer.style.gridTemplateColumns = gtc;
  // gridContainer.style.gridTemplateRows = gtr;
  createGrid();
}

function clearGrid() {
  for (let i = 0; i < gridSize; i++) {
    const box = document.querySelector(".box");
    box.remove();
  }
}
