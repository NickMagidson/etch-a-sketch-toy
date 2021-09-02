// Declaring important variables
const container = document.getElementById('container');
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");

// Makes 16x16 grid
function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);

    for (c = 0; c < (rows * cols); c++) {
      let cell = document.createElement("div");
      cell.addEventListener('mouseover', function() {
        // Generates random color
        let rcolor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        cell.style.backgroundColor = rcolor;
      });
      container.appendChild(cell).className = "grid-item";
  };
};

makeRows(16, 16);


// Removes child nodes from parent container
function removeAllChildNodes(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}

// Reset button
const reset = document.querySelector('#reset');
reset.addEventListener('click', function() {
    removeAllChildNodes(container);
    makeRows(16, 16);
    slider = screenVal;
});





