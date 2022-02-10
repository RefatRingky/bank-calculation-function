// function getInputValue(inputId) {
//     const depositInput = document.getElementById(inputId);
//     const depositAmountText = depositInput.value;
//     const depositAmount = parseFloat(depositAmountText);
//     depositInput.value ='';
//     return depositAmount;
// }

// // 1.check the deposite button is clickable or not
//    document.getElementById('deposite-button').addEventListener('click',function () {
//     // when we give any input wheather the input field work or nor
//     // const depositInput = document.getElementById('deposite-input');
//     // const depositAmountText = depositInput.value;
//     // const depositAmount = parseFloat(depositAmountText);
//     // console.log(depositAmount);
//     const depositAmount =getInputValue('deposite-input');

//     // wheather the input value show the deposite total
//     const depositTotal = document.getElementById('deposite-total');
//     const depositTotalText = depositTotal.innerText;
//     const previousDepositTotal = parseFloat(depositTotalText);
//     depositTotal.innerText = previousDepositTotal +depositAmount;
//     // console.log(depositTotalText);
//     // updated balance
//     const balanceTotal = document.getElementById('balance-total');
//     const balanceTotalText = balanceTotal.innerText;
//     const previousBalanceTotal = parseFloat(balanceTotalText);
//     balanceTotal.innerText  = previousBalanceTotal+depositAmount;
//     // clear input field
//     // depositInput.value ='';


// })

// // withdraw section 
//     document.getElementById('withdraw-button').addEventListener('click',function () {
//     // when we give any input wheather the input field work or nor
//     // const withdrawInput = document.getElementById('withdraw-input');
//     // const withdrawAmountText = withdrawInput.value;
//     // const withdrawAmount = parseFloat(withdrawAmountText);
//     const withdrawAmount = getInputValue('withdraw-input');
//     // console.log(depositAmount);

//     // wheather the input value show the deposite total
//     const withdrawTotal = document.getElementById('withdraw-total');
//     const withdrawTotalText = withdrawTotal.innerText;
//     const previousWithdrawTotal = parseFloat(withdrawTotalText);
//     withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;
//     // console.log(depositTotalText);
//     // updated balance
//     const balanceTotal = document.getElementById('balance-total');
//     const balanceTotalText = balanceTotal.innerText;
//     const previousBalanceTotal = parseFloat(balanceTotalText);
//     balanceTotal.innerText  = previousBalanceTotal - withdrawAmount;
//     // clear input field
//     // withdrawInput.value ='';


// })