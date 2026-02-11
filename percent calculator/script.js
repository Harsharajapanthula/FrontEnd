const calculateBtn = document.getElementById("calculateBtn");
const numberInput = document.getElementById("number");
const percentInput = document.getElementById("percent");
const percentageResult = document.getElementById("percentageResult");
const finalResult = document.getElementById("finalResult");

function cal() {
  const numValue = parseFloat(numberInput.value);
  const percentValue = parseFloat(percentInput.value);

  // validation
  if (isNaN(numValue) || isNaN(percentValue)) {
    alert("Please enter valid numbers");
    return;
  }

  const result = (numValue * percentValue) / 100;
  const final = numValue + result;

  percentageResult.textContent = formatCurrency(result);
  finalResult.textContent = formatCurrency(final);
}

// format currency
function formatCurrency(amount) {
  return "$" + amount.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

calculateBtn.addEventListener("click", cal);
