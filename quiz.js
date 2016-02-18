var submitButton = document.getElementById("submit");
var treeElement = document.getElementById("actualTree");
var line = "";

// TREE FUNCTION IN CONSOLE LOG

function buildTree() {
  var treeHeight = document.getElementById("input1").value;
  var treeChar = document.getElementById("input2").value;
  var n = treeChar.toString();

  var treeObject = {
    height: treeHeight,
    character: n
  };

  for (var i = 0; i < treeObject.height; i++) {
    for (var j = 0; j < treeObject.height - i -1; j++) {
      line += " ";
    }

    for (var j = 0; j < 2 * i + 1; j++) {
      line += treeObject["character"];
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
  if (document.getElementById("input1").value === "") {
    alert("Both fields must have a value.");
  } else if (document.getElementById("input2").value === "") {
      alert("Both fields must have a value.");
  }
}

submitButton.addEventListener("click", validateInput);
submitButton.addEventListener("click", buildTree);

//something