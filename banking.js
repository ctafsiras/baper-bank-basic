document.getElementById('deposit-btn').addEventListener('click', function () {

    let depositAmount = document.getElementById('deposit-amount');

    let totalDeposit = document.getElementById('total-deposit');
    const updateDeposit = parseFloat(totalDeposit.innerText) + parseFloat(depositAmount.value);



    totalDeposit.innerText = updateDeposit;

    const totalBalance = document.getElementById('total-balance');

    const updateBalance = parseFloat(totalBalance.innerText) + parseFloat(depositAmount.value);
    totalBalance.innerText = updateBalance;

    depositAmount.value = '';
})
//// withdrawaaaaaaaaaaaaa
document.getElementById('withdraw-btn').addEventListener('click', function () {
    let totalWithdraw = document.getElementById('total-withdraw');
    let withdrawAmount = document.getElementById('withdraw-amount');

    const updateWithdraw = parseFloat(totalWithdraw.innerText) + parseFloat(withdrawAmount.value);
    totalWithdraw.innerText = updateWithdraw;

    const totalBalance = document.getElementById('total-balance');

    const updateBalance = parseFloat(totalBalance.innerText) - parseFloat(withdrawAmount.value);
    totalBalance.innerText = updateBalance;

    withdrawAmount.value = ' ';
})