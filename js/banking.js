function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const inputAmount = parseFloat(inputAmountText);
    inputField.value ='';
    return inputAmount;
}

function updateTotalField(totalFieldId,amount) {
    const totalField = document.getElementById(totalFieldId);
    const totalText = totalField.innerText;
    const previousTotal = parseFloat(totalText);
    totalField.innerText = previousTotal + amount; 
}

function updateBalance(depositAmount,isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    if (isAdd == true) {
        balanceTotal.innerText  = previousBalanceTotal+depositAmount;
    }
    else{
        balanceTotal.innerText  = previousBalanceTotal-depositAmount;
    }
   
}

    document.getElementById('deposite-button').addEventListener('click',function () {
    const depositAmount =getInputValue('deposite-input');

    //    deposite total amount
      updateTotalField('deposite-total',depositAmount);

    //   for update balance for deposite
        updateBalance(depositAmount,true);
})

    // withdraw section 
    document.getElementById('withdraw-button').addEventListener('click',function () {
    const withdrawAmount = getInputValue('withdraw-input');
    // total withdraw amount
    updateTotalField('withdraw-total',withdrawAmount);

    // for update balance for withdraw
    updateBalance(withdrawAmount,false);

})