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

   // Set a custom attribute to track the darkness level (initially 0)
   gridItem.setAttribute('data-darkness', '0');
        
    // add eventlistener
    gridItem.addEventListener('mouseover', () => {
      let darknessLevel = parseInt(gridItem.getAttribute('data-darkness'));

      // if this is the first, randomize the color
      if (darknessLevel === 0) {
        const randomColor = getRandomRGB();
        gridItem.style.backgroundColor = randomColor;
        gridItem.setAttribute('data-color', randomColor); // store the initial random color
      }

      //darken the color progresively
      if (darknessLevel < 10) {
        darkenSquare(gridItem, darknessLevel);
        darknessLevel++;
        gridItem.setAttribute('data-darkness', darknessLevel);
      }
    });



    //append the new div to the grid container
    gridContainer.appendChild(gridItem);
  };
}

function getRandomRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`
}

//function to darken the square
function darkenSquare (element, darknessLevel) {
  //get the initial color
  const currentColor = element.getAttribute('data-color');

  //extra the rgb values from the current color
  const rgbValues = currentColor.match(/\d+/g).map(number);

  //calculate the the darkening factor
  const darkeningFactor = 1- (darknessLevel + 1) * 0.1;

  //darken each color channel
  const [r, g, b] = rgbValues.map(channel * darkeningFactor);

  //apply the darkened color
  element.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  
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