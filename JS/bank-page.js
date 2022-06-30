// Adding deposit event handler
document.getElementById('deposit-btn').addEventListener('click', function() {
    const depositField = document.getElementById('deposit-field');
    const depositAmount = depositField.value;
    
    const depositTotal = document.getElementById('deposit-total');
    depositTotal.innerText = parseFloat(depositTotal.innerText) + parseFloat(depositAmount);
    console.log(depositTotal.innerText);

    // Update Account Balance
    const balanceField = document.getElementById('balance-total');
    balanceField.innerText = parseFloat(balanceField.innerText) + parseFloat(depositAmount);

    // clear the deposit input field
    depositField.value = '';
})

// Adding withdraw event handler
document.getElementById('withdraw-btn').addEventListener('click', function() {
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawAmount = withdrawField.value;
    
    const withdrawTotal = document.getElementById('withdraw-total');
    withdrawTotal.innerText = parseFloat(withdrawTotal.innerText) + parseFloat(withdrawAmount);
    const currentBalance = document.getElementById('balance-total');
    const newBalance = parseFloat(currentBalance.innerText) - parseFloat(withdrawAmount);
    currentBalance.innerText = newBalance;
    // clear the withdraw field
    withdrawField.value = '';
})