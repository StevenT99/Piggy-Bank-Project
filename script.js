// Get references to the HTML elements
const contentParagraph = document.getElementById("content");

// Define a function to change the content
function changeContent() {
  contentParagraph.textContent = "The content has been changed!";
}

// Get references to the HTML elements
const goalInput = document.getElementById("goal-input");
const savingsGoalText = document.getElementById("savings-goal-text");

// Define a function to update the savings goal
function updateSavingsGoal() {
  const newGoal = goalInput.value;
  savingsGoalText.textContent = newGoal;
  goalInput.value = ""; // Clear the input field
}

// Update Goal
function updateGoal() {
  const goalAmount = parseFloat(
    document.getElementById("add-goal-amount").value
  );
  document.getElementById("goal-amount").textContent = goalAmount.toFixed(2); // Display with two decimal places
}

// Add Money
function addMoney() {
  var currentSavings = parseFloat(
    document.getElementById("savings-amount").textContent
  );
  var amountToAdd = parseFloat(document.getElementById("add-money").value);

  if (!isNaN(amountToAdd)) {
    currentSavings += amountToAdd; // Add the amount to current savings
    document.getElementById("savings-amount").textContent =
      currentSavings.toFixed(2); // Display with two decimal places
    const totalGoal = parseFloat(
      document.getElementById("goal-amount").textContent
    );
    const percentage = (currentSavings / totalGoal) * 100;

    if (percentage >= 100) {
      alert("Congratulations! You have met your goal!");
    }
  }
}

// Withdraw Money
function withdrawMoney() {
  var currentSavings = parseFloat(
    document.getElementById("savings-amount").textContent
  );
  var amountToWithdraw = parseFloat(
    document.getElementById("withdraw-money").value
  );

  if (!isNaN(amountToWithdraw)) {
    if (amountToWithdraw <= currentSavings) {
      currentSavings -= amountToWithdraw; // Withdraw the amount from current savings
      document.getElementById("savings-amount").textContent =
        currentSavings.toFixed(2); // Display with two decimal places
    } else {
      alert("You cannot withdraw more than your current savings.");
    }
  }
}

// Add event listeners
document
  .getElementById("changeButton")
  .addEventListener("click", changeContent);
document.getElementById("goal-input").addEventListener("change", updateGoal);
document.getElementById("add-money").addEventListener("change", addMoney);
document
  .getElementById("withdraw-money")
  .addEventListener("change", withdrawMoney);
