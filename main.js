const container = document.getElementById("container");
var w = window.innerWidth;
var h = window.innerHeight;
var rainbow_on_off = 0;

// Below is function that controls grid layout
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

// Below will clear the current grid
function cleargrid(){
    container.innerHTML = '';
}

//Below will set the color WILL BE PASSED to sketch.  
function color_sketch(){
    var items = ["#9062aa","#3fb4e9","#6fc063","#d94949","#f8951e",
    "#7a564a","#029688","#2d2f79","#e81f63"];
      var color = items[Math.floor(Math.random() * (items.length - 0 + 1) + 0)]
      this.style.backgroundColor = color;
}
function Rainbowmode(){
if(rainbow_on_off == 0){
    rainbow_on_off = 1;
}
else{
    rainbow_on_off = 0;
}
}



// Below is code for sketching on page/ mobile. 
function sketch() {
    this.style.backgroundColor = "black";
}

function setEventListener(){
console.log(rainbow_on_off);
var canvas_gridmap = container.querySelectorAll('div');
if(rainbow_on_off == 0){
if(w >= 1500){
canvas_gridmap.forEach(canvas_gridmap => canvas_gridmap.addEventListener('mouseover', sketch));
}
else{
canvas_gridmap.forEach(canvas_gridmap => canvas_gridmap.addEventListener('touchstart', sketch));
}
}
else{
    if(w >= 1500){
        canvas_gridmap.forEach(canvas_gridmap => canvas_gridmap.addEventListener('mouseover', color_sketch));
        }
        else{
        canvas_gridmap.forEach(canvas_gridmap => canvas_gridmap.addEventListener('touchstart', color_sketch));
        }

}
}

// clears sketch
function clearCanvas(){
    var canvas_gridmap = container.querySelectorAll('div');
    canvas_gridmap.forEach(canvas_gridmap => canvas_gridmap.style.backgroundColor = '#b3b3b3');
}