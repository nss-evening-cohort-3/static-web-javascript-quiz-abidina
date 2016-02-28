var submitButton = document.getElementById("submit");
var clearButton = document.getElementById("clear");
var treeElement = document.getElementById("actualTree");
var line = "";

// TREE FUNCTION IN CONSOLE LOG
function validateInput() {
  if ((document.getElementById("height").value === "") || (document.getElementById("character").value === "")) {
      alert("Both fields must have a value.");
  } else { 
    getValues();
  }
}

function getValues() {
  var treeHeight = document.getElementById("height").value;
  var treeChar = document.getElementById("character").value;

  var treeObject = {
    height: treeHeight,
    character: treeChar
  }
  buildTree(treeObject);
}

function buildTree(ourTree) {
// SPACES
  for (var i = 0; i < ourTree.height; i++) {
    for (var j = 0; j < ourTree.height - i -1; j++) {
      line += " ";
    }
// SYMBOLS
    for (var j = 0; j < 2 * i + 1; j++) {
      line += ourTree.character;
    } 
  line += "\n";
  }
  console.log(line);
  line = "";
}



// CLICK EVENTS

document.onkeydown = function(e) {
  if(window.event.keyCode == 13){
    validateInput;
  }
};

function clearInput() {
  document.getElementById("height").value = "";
  document.getElementById("character").value = "";
}

submitButton.addEventListener("click", validateInput);

clearButton.addEventListener("click", clearInput);
