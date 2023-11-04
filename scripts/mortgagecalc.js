const purchasePrice = document.querySelector(".purchase-price");
const downPaymentPc = document.querySelector(".down-payment-percentage");
const mortgageTerm = document.querySelector(".mortgage-term");
const amortPeriod = document.querySelector(".amortization-period");
const submitBtn = document.querySelector(".input-submit");
const output = document.querySelector(".output");

let data = {};

submitBtn.addEventListener("click", () => {
    if (!isNaN(purchasePrice.value) && !isNaN(downPaymentPc.value) && !isNaN(mortgageTerm.value) && !isNaN(amortPeriod.value)) {
        data["purchasePrice"] = purchasePrice.value;
        data["downPaymentPc"] = downPaymentPc.value;
        data["mortgageTerm"] = mortgageTerm.value;
        data["amortPeriod"] = amortPeriod.value;
        output.textContent = "You entered all numbers!";
    } else {
        output.textContent = "Please enter all number values.";
    }
});