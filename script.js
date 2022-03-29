let rowAndColumnSize = 16;

const gridSizeBtn = document.querySelector(".gridSizeBtn");
const resetBtn = document.querySelector(".resetBtn");
const showHideGridBtn = document.querySelector(".showHideGrid");

gridSizeBtn.addEventListener("click", changeGridSize);
resetBtn.addEventListener("click", clearGrid);
showHideGridBtn.addEventListener("click", showHideGrid);

createGrid();

function createGrid() {
  const grid = document.querySelector(".grid");
  let gridSize = rowAndColumnSize * rowAndColumnSize;

  grid.style.gridTemplateColumns = `repeat(${rowAndColumnSize},1fr)`;
  grid.style.gridTemplateRows = `repeat(${rowAndColumnSize},1fr)`;

  for (let i = 0; i < gridSize; i++) {
    const pixel = document.createElement("div");
    pixel.classList.add("pixel");
    grid.appendChild(pixel);
  }
}

function changeGridSize() {
  rowAndColumnSize = prompt("Enter a number between 1 and 100.");
  createGrid();
}

function clearGrid() {
  //clear the grid.
}

function showHideGrid() {
  //show or hide grid.
}
