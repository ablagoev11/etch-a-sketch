const canvas = document.querySelector(".canvas");
const selectSize = document.getElementById("size");
let squareNumber = 32;
drawCanvas(squareNumber);
selectSize.addEventListener("click", () => {
  do {
    squareNumber = parseInt(prompt("Enter grid size 3-100", 16));
  } while (
    squareNumber < 3 ||
    squareNumber > 100 ||
    typeof squareNumber !== "number"
  );
  if (isNaN(squareNumber)) squareNumber = 16;
  removeAllChildNodes(canvas);
  drawCanvas(squareNumber);
});

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function drawCanvas(squareNumber) {
  for (let i = 1; i <= squareNumber; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    for (let j = 1; j <= squareNumber; j++) {
      let square = document.createElement("div");
      square.classList.add("squares");
      row.appendChild(square);
      square.addEventListener("mouseover", (e) => {
        const target = e.target;
        target.style.backgroundColor = "red";
      });
    }
    canvas.appendChild(row);
  }
}
