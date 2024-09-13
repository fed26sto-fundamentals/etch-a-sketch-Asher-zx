// select the grid
const gridContainer = document.getElementById('gridcontainer');

// set the background color
const multipleColor = "black";

// create a grid of squares
function createGrid(rows, cols) {
  for (let i =0; i < rows * cols; i++) {
    // create a new div
    const gridItem = document.createElement('div');

    gridItem.className = 'grid-item';
    // add class

    // add eventlistener
    gridItem.addEventListener('mouseover', () => {
      gridItem.style.background = 'linear-gradient(45deg, #ff6b6b, #f7e84c)'; // change to gradient
    })

    //add event listener for mouseout to reset color
    gridItem.addEventListener('mouseout', () => {
      gridItem.style.background = '#6ccbea'; //Reset to defaultcolor
    })

    //append the new div to the grid container
    gridContainer.appendChild(gridItem);

 
  };
}



// create 16 x 16 grid items
createGrid(16, 16);