// DOM elements
const targetDateInput = document.getElementById('targetDate');
const calculateDaysBtn = document.getElementById('calculateDaysBtn');
const resultDiv = document.getElementById('result');

// Function to calculate remaining days until target date
function calculateRemainingDays(targetDate) {
  const targetTimestamp = new Date(targetDate).getTime();
  const currentTimestamp = new Date().getTime();
  const millisecondsPerDay = 1000 * 60 * 60 * 24;

  // Calculate days difference
  const daysDifference = Math.ceil((targetTimestamp - currentTimestamp) / millisecondsPerDay);

  return daysDifference;
}

// Event listener for button click
calculateDaysBtn.addEventListener('click', function() {
  const targetDate = targetDateInput.value;
  
  // Validate input
  if (!targetDate) {
    resultDiv.textContent = 'Please select a target date.';
    return;
  }

  // Calculate remaining days until target date
  const remainingDays = calculateRemainingDays(targetDate);
  
  // Display result
  if (remainingDays > 0) {
    resultDiv.textContent = `Days remaining until ${targetDate}: ${remainingDays} days`;
  } else if (remainingDays === 0) {
    resultDiv.textContent = `Today is the target date!`;
  } else {
    resultDiv.textContent = `The target date ${targetDate} has passed.`;
  }
});
