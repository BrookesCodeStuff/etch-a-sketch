let gridCells;
let gridParent = document.querySelector('.grid-parent');

function buildGrid(num) {
  gridCells = num;
  dblNum = num * num;
  gridParent.setAttribute("style", "grid-template-columns: repeat(" + `${gridCells}` + ", 1fr); grid-template-rows: repeat(" + `${gridCells}` + ", 1fr");
  for (i = 1; i <= dblNum; i++) {
    let newDiv = document.createElement('div');
    newDiv.setAttribute('id', i);
    newDiv.setAttribute('class', 'cell');
    gridParent.appendChild(newDiv);
  }
}

buildGrid(6);