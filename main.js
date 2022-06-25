const container = document.getElementById("container");
var w = window.innerWidth;
var h = window.innerHeight;


function makeRows(rows, cols) {
cleargrid();
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).id = c + 1;
    container.appendChild(cell).className = "grid-item";
  }
  setEventListener();
}
//Destroy the grid
function cleargrid(){
    container.innerHTML = '';
}

function colorPicker(){
    let colors = ["black", "red", "blue", "green", "yellow", "purple", "orange"];
    var black = colors[1];
}



// Below is code for sketching on page/ mobile. 
function sketch() {
    this.style.backgroundColor = "black";
}

function setEventListener(){
var canvas_gridmap = container.querySelectorAll('div');
if(w >= 1500){
canvas_gridmap.forEach(canvas_gridmap => canvas_gridmap.addEventListener('mouseover', sketch));
}
else{
canvas_gridmap.forEach(canvas_gridmap => canvas_gridmap.addEventListener('touchstart', sketch));
}
}

// clears sketch
function clearCanvas(){
    var canvas_gridmap = container.querySelectorAll('div');
    canvas_gridmap.forEach(canvas_gridmap => canvas_gridmap.style.backgroundColor = '#b3b3b3');
}