// Get references to the HTML elements
const contentParagraph = document.getElementById("content");
const changeButton = document.getElementById("changeButton");

// Define a function to change the content
function changeContent() {
  contentParagraph.textContent = "The content has been changed!";
}

// Add a click event listener to the button
changeButton.addEventListener("click", changeContent);
