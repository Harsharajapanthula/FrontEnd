const goalAmountInput = document.getElementById("goal-amount");
const currentSavingsInput = document.getElementById("current-savings");
const monthlyContributionInput = document.getElementById("monthly-contribution");
const calculateBtn = document.getElementById("calculate-btn");
const progressBar = document.getElementById("progress-bar");
const result = document.getElementById("result");

calculateBtn.addEventListener("click", () => {
  const goalAmount = Number(goalAmountInput.value);
  const currentSavings = Number(currentSavingsInput.value);
  const monthlyContribution = Number(monthlyContributionInput.value);

  if (
    goalAmount <= 0 ||
    currentSavings < 0 ||
    monthlyContribution <= 0
  ) {
    alert("Please enter valid positive numbers.");
    return;
  }

  let progressPercentage = (currentSavings / goalAmount) * 100;
  progressPercentage = Math.min(progressPercentage, 100);

  progressBar.style.width = `${progressPercentage}%`;

  result.classList.remove("show");

  setTimeout(() => {
    if (currentSavings >= goalAmount) {
      result.innerHTML = "🎉 Congratulations! You’ve reached your savings goal!";
    } else {
      const remainingAmount = goalAmount - currentSavings;
      const monthsNeeded = Math.ceil(
        remainingAmount / monthlyContribution
      );

      result.innerHTML = `
        🌱 Keep nurturing your savings! <br/>
        <strong>${monthsNeeded}</strong> months to reach your goal.
      `;
    }
    result.classList.add("show");
  }, 200);
});
