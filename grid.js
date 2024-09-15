// select the grid
const gridContainer = document.getElementById('gridcontainer');
const generateGridButton = document.getElementById('generateGridButton');


// set the background color
const multipleColor = "black";

// create a grid of squares
function createGrid(size) {
  //clear the exsting grid
  gridContainer.innerHTML = '';

  //set the grid template based on the size
  gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i =0; i < size * size; i++) {
    // create a new div
    const gridItem = document.createElement('div');

    gridItem.className = 'grid-item';
    // add class to div

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

function promptForGridSize() {
  const input = prompt("Enter the number of square per side (max 100):")
  const size = parseInt(input);

  if (size > 0 && size <= 100) {  // Corrected the if condition
    createGrid(size);
  } else {
    alert ("Please enter a valid number between 1~100.");
  }
}


// eventlistener to button
generateGridButton.addEventListener('click', promptForGridSize);