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
});



// Function to change grid size
const change = document.querySelector('#change');

function changeSize() {
    let newSize = prompt("Enter desired grid size from 1 to 100");
    let desiredValue = parseInt(newSize);
    if (desiredValue > 1 && desiredValue <= 100) {
      let size = newSize;
      removeAllChildNodes(container);
      makeRows(desiredValue, desiredValue);
    //   let gridItem = document.querySelectorAll('.grid-item');
    //   gridItem.style.height = `${(gridItem / desiredValue) - 2}px`;
    //   gridItem.style.width = `${(gridItem / desiredValue) - 2}px`;

    } else {
      alert("Enter a digit from 1-100 range!");
    }
    // let gridCell = document.querySelectorAll(".grid-item");
    // Object.assign(gridCell.style, {
    //   height : `${(size / desiredValue) - 2}px`,
    //   width : `${(size / desiredValue) - 2}px`
    // });
  }

// Button to change grid size
  change.addEventListener('click', function() {
    changeSize();
  });
