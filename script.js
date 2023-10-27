// Get references to the HTML elements
const contentParagraph = document.getElementById("content");
const changeButton = document.getElementById("changeButton");

// Define a function to change the content
function changeContent() {
  contentParagraph.textContent = "The content has been changed!";
}

// Add a click event listener to the button
changeButton.addEventListener("click", changeContent);

//add amount to piggy bank
// Initialize the current savings amount
var currentSavings = 0; // Initial savings amount

function updateGoal() {
  const goalAmount = parseFloat(document.getElementById("goal-input").value);
  document.getElementById("goal-amount").textContent = goalAmount;
}

function addMoney() {
  // Update the current savings
  document.getElementById("savings-amount").textContent = currentSavings;

  var amounttoadd = parseFloat(document.getElementById("add-money").value);
  currentSavings += amounttoadd; // Add the amount to current savings
  document.getElementById("savings-amount").textContent = currentSavings;
  const totalGoal = parseFloat(document.getElementById("goal-input").value); // Total goal amount
  const percentage = (currentSavings / totalGoal) * 100;

  if (percentage >= 100) {
    alert("You have met your goal!");
  }
}

function withdrawMoney() {
  var amounttowithdraw = parseFloat(
    document.getElementById("withdraw-money").value
  );
  if (amounttowithdraw <= currentSavings) {
    currentSavings -= amounttowithdraw; // Withdraw the amount from current savings
    document.getElementById("savings-amount").textContent = currentSavings;
  } else {
    alert("You cannot withdraw more than your current savings.");
  }
}
