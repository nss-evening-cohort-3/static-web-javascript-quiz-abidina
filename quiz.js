var submitButton = document.getElementById("submit");
var clearButton = document.getElementById("clear");
var treeElement = document.getElementById("actualTree");
var line = "";

// TREE FUNCTION IN CONSOLE LOG

function buildTree() {
  var treeHeight = document.getElementById("height").value;
  var treeChar = document.getElementById("character").value;

  var treeObject = {
    height: treeHeight,
    character: treeChar
  };
// SPACES
  for (var i = 0; i < treeObject.height; i++) {
    for (var j = 0; j < treeObject.height - i -1; j++) {
      line += " ";
    }
// SYMBOLS
    for (var j = 0; j < 2 * i + 1; j++) {
      line += treeObject.character;
    } 
  line += "\n";
  }
  console.log(line);
}



// CLICK EVENTS/BUTTONS

document.onkeydown = function() {
  if(window.event.keyCode == 13){
    buildTree();
  }
};

function validateInput() {
  if (document.getElementById("height").value === "") {
    alert("Both fields must have a value.");
  } else if (document.getElementById("character").value === "") {
      alert("Both fields must have a value.");
  } else { buildTree();}
}

function clearInput() {
  document.getElementById("height").value = "";
  document.getElementById("character").value = "";
}

submitButton.addEventListener("click", validateInput);
clearButton.addEventListener("click", clearInput);
