const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  }
}

makeRows(16, 16);  //default grid
//makeRows(64,64);
//TODO: Implent Function/Event Listener to work change color on mouse over. 
/*
var cell = document.getElementsByClassName("grid-item");
cell.addEventListener('mouseover', function handleMouseOver() {
    console.log("TEST CHANGED");
    cell.style.color = "black";
});
*/