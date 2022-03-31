let mouseDown = false;
let showGrid = false;
let currentColor = "#f05454";
let rainbowActive = false;

const pixel = document.querySelector(".pixel");
const colorPicker = document.getElementById("colorPicker");
const colorPickerLabel = document.querySelector(".colorPickerLabel");
const colorPickerLabelHeader = document.querySelector(
  ".colorPickerLabelHeader"
);
const rainbowBtn = document.querySelector(".rainbow");
const gridSizeBtn = document.querySelector(".gridSizeBtn");
const clearBtn = document.querySelector(".clearBtn");
const showHideGridBtn = document.querySelector(".showHideGrid");

colorPickerLabel.style.backgroundColor = currentColor;
colorPickerLabelHeader.style.color = currentColor;

gridSizeBtn.addEventListener("click", changeGridSize);
clearBtn.addEventListener("click", clearGrid);
showHideGridBtn.addEventListener("click", showHideGrid);
colorPicker.addEventListener("input", () => {
  currentColor = colorPicker.value;
  colorPickerLabel.style.backgroundColor = colorPicker.value;
  colorPickerLabelHeader.style.color = colorPicker.value;
});
rainbowBtn.addEventListener("click", () => {
  rainbowActive = !rainbowActive;
  if (rainbowActive === true) {
    colorPickerLabelHeader.textContent = "Rainbow Active";
  } else {
    colorPickerLabelHeader.textContent = "Color";
  }
});
document.body.addEventListener("mousedown", () => {
  mouseDown = true;
});
document.body.addEventListener("mouseup", () => {
  mouseDown = false;
});

createGrid(16);

function createGrid(rowAndColumnSize) {
  const grid = document.querySelector(".grid");
  let gridSize = rowAndColumnSize * rowAndColumnSize;

  grid.style.gridTemplateColumns = `repeat(${rowAndColumnSize},1fr)`;
  grid.style.gridTemplateRows = `repeat(${rowAndColumnSize},1fr)`;

  for (let i = 0; i < gridSize; i++) {
    const pixel = document.createElement("div");
    pixel.classList.add("pixel");
    pixel.style.backgroundColor = "white";
    grid.appendChild(pixel);
    pixel.addEventListener("mouseover", () => {
      if (rainbowActive === true && mouseDown === true) {
        let n1 = Math.floor(Math.random() * 256);
        let n2 = Math.floor(Math.random() * 256);
        let n3 = Math.floor(Math.random() * 256);
        pixel.style.backgroundColor = `rgb(${n1},${n2},${n3})`;
      } else if (mouseDown === true) {
        pixel.style.backgroundColor = currentColor;
      }
      pixel.addEventListener("click", () => {
        pixel.style.backgroundColor = currentColor;
      });
    });
  }
  if (showGrid === true) {
    showGrid = false;
    showHideGrid();
  }
}

function changeGridSize() {
  let rowAndColumnSize;
  rowAndColumnSize = prompt("Enter a number between 1 and 100.");
  if (rowAndColumnSize < 100 && rowAndColumnSize > 1) {
    resetGrid();
    createGrid(rowAndColumnSize);
  } else {
    alert("Your selection needs to be a number between 1 and 100.");
  }
}

function resetGrid() {
  const pixel = document.querySelectorAll(".pixel");
  pixel.forEach((pixel) => {
    pixel.remove();
  });
}

function clearGrid() {
  const pixel = document.querySelectorAll(".pixel");
  pixel.forEach((pixel) => {
    pixel.style.backgroundColor = "white";
  });
}

function showHideGrid() {
  const pixel = document.querySelectorAll(".pixel");
  if (showGrid === false) {
    pixel.forEach((pixel) => {
      pixel.style.outlineStyle = "solid";
      pixel.style.outlineWidth = "0.1em";
      showGrid = true;
    });
  } else {
    pixel.forEach((pixel) => {
      pixel.style.outlineStyle = "none";
      showGrid = false;
    });
  }
}
