var submitButton = document.getElementById("submit");

// Create a tree function that should build a pine tree out of a character in the browser console. 
//It accepts a single object as an argument. The object should have two key/value pairs.

function buildTree(treeObject) {
  var treeHeight = document.getElementById("input1").value;
  var treeChar = document.getElementById("input2").value;

  var treeObject = {
    treeHeight: treeHeight,
    character: treeChar
  };

//   for (var i = 0; i <= treeObject["treeHeight"]; i++) {
//     treeObject["character"] += " ";
//   }
//   console.log("tree", buildTree());
// }


// Once the user enters in a number, and a character, the user can either then just press the enter key 
//(as long as the cursor is in one of the input fields), or click a button that is labeled "Grow your tree" 
//and the tree should be shown in the console.

submitButton.addEventListener("click", buildTree);
document.onkeydown = function() {
  if(window.event.keyCode == 13){
    buildTree();
  }
};

// If either of the input fields does not have a value in it when the user presses the enter key, or presses the button, 
//then display an alert stating that both fields must have a value.
function validateInput() {
  if (treeHeight == "" || treeChar == "") {
    alert("Both fields must have a value.");
    return false;
  }
}
// Grow your tree