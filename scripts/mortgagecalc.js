const purchasePrice = document.querySelector('.purchase-price');
const downPaymentPc = document.querySelector('.down-payment-percentage');
const mortgageTerm = document.querySelector('.mortgage-term');
const amortPeriod = document.querySelector('.amortization-period');
const submitBtn = document.querySelector('.input-submit');
const output = document.querySelector('.output');

let data = {};

submitBtn.addEventListener('click', () => {
    if (!isNaN(purchasePrice.value) && !isNaN(downPaymentPc.value) && !isNaN(mortgageTerm.value) && !isNaN(amortPeriod.value)) {
        data['purchasePrice'] = purchasePrice.value;
        data['downPaymentPc'] = downPaymentPc.value;
        data['mortgageTerm'] = mortgageTerm.value;
        data['amortPeriod'] = amortPeriod.value;
        output.textContent = 'You entered all numbers!';
        calcMinPcAndPayment(data);
        validatePercentage(data);
    } else {
        output.textContent = 'Please enter all number values.';
    }
});

function calcMinPcAndPayment(data) {
    if (data['purchasePrice'] <= 500000) {
        data['minimumPercentage'] = 0.05;
        data['minimumDownPayment'] = data['purchasePrice'] * data['minimumPercentage'];
    } else if (500000 < data['purchasePrice'] <= 100000) {
        data['minimumDownPayment'] = 500000 * 0.05 + (data['purchasePrice'] - 500000) * 0.1;
        data['minimumPercentage'] = (data['minimumDownPayment'] / data['purchasePrice']);
    } else {
        data['minimumPercentage'] = 0.2;
        data['minimumDownPayment'] = data['purchasePrice'] * data['minimumPercentage'];
    }
}

function validatePercentage(data) {
    data['minDownPaymentPc'] = (data['minimumDownPayment'] / data['purchasePrice']) * 100;
    if (data['downPaymentPc'] >= data['minDownPaymentPc'] && data['downPaymentPc'] <= 100) {
        data['downPaymentAmt'] = data['purchasePrice'] * (data['downPaymentPc'] * 100);
    } else {
        console.log("Please enter a value between the minimum and 100");
        return false;
    }
}
