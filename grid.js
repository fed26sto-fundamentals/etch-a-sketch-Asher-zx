// select the grid
const gridContainer = document.getElementById('gridcontainer');

// create a grid of squares
function createGridItems(rows, cols) {
  for (let i =0; i < rows * cols; i++) {
    // create a new div
    const gridItem = document.createElement('div');
    gridItem.className = 'grid-item';
    // add class

    gridItem.textContent = i + 1;
    // set the content of the div

    //append the new div to the grid container
    gridContainer.appendChild(gridItem);
  };
}

// create 16 x 16 grid items
createGridItems(16, 16);