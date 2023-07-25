function calculateEMI() {
  const loanAmount = parseFloat(document.getElementById("loanAmount").value);
  const interestRate = parseFloat(
    document.getElementById("interestRate").value
  );
  const loanTenure = parseFloat(document.getElementById("loanTenure").value);

  if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTenure)) {
    alert("Please enter valid numeric values for all fields.");
    return;
  }

  const monthlyInterestRate = interestRate / (12 * 100);
  const emi =
    (loanAmount *
      monthlyInterestRate *
      Math.pow(1 + monthlyInterestRate, loanTenure)) /
    (Math.pow(1 + monthlyInterestRate, loanTenure) - 1);

  document.getElementById("result").innerText =
    "EMI per month: BDT " + emi.toFixed(2);
}

function resetForm() {
  document.getElementById("loanAmount").value = "";
  document.getElementById("interestRate").value = "";
  document.getElementById("loanTenure").value = "";
  document.getElementById("result").innerText = "";
}
