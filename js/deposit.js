document.getElementById('deposit-btn').addEventListener('click', function(){
  // withdraw input
  const depositInputElement = document.getElementById('depositInput');
  const depositInputValueString = depositInputElement.value;
  const depositInputValue = parseFloat(depositInputValueString);

  // deposit amount
  const depositAmountElement = document.getElementById('depositAmount');
  const depositAmountValueString = depositAmountElement.innerText;
  let depositAmountValue = parseFloat(depositAmountValueString);

  // total deposit
  const totalDeposit = depositInputValue + depositAmountValue;

  // input field clear
  depositInputElement.value = '';

  // set in deposit filed
  // validation
  if(isNaN(depositInputValue)){
    alert('please input a number');
    return;
  }
  depositAmountElement.innerText = totalDeposit;

  // balance element
  const balanceElement = document.getElementById('balance');
  const balanceElementString = balanceElement.innerText;
  const balanceAmount = parseFloat(balanceElementString);
  
  // new balance after deposit
  const newBalance = balanceAmount + depositInputValue;

  // set new balance in balance element
  balanceElement.innerText = newBalance;
})