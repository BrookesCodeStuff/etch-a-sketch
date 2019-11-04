let gridCells;
const gridParent = document.querySelector('.grid-parent');

function buildGrid(num) {
  gridCells = num;
  dblNum = num * num;
  gridParent.setAttribute("style", "grid-template-columns: repeat(" + `${gridCells}` + ", 1fr); grid-template-rows: repeat(" + `${gridCells}` + ", 1fr");
  for (i = 1; i <= dblNum; i++) {
    let newDiv = document.createElement('div');
    newDiv.setAttribute('id', i);
    newDiv.setAttribute('class', 'cell');
    newDiv.setAttribute('onmouseover', 'blackBg()')
    gridParent.appendChild(newDiv);
  }
}

buildGrid(50);

function random_rgba() {
  var o = Math.round, r = Math.random, s = 255;
  return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

function blackBg() {
  document.getElementById(event.target.id).setAttribute('style', 'background-color: black');
}

function randBg() {
  document.getElementById(event.target.id).setAttribute('style', 'background-color: ' + random_rgba());
}