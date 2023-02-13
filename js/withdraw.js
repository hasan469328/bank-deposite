const withdrawButton = document.getElementById('withdraw-btn').addEventListener('click', function(){
//  withdraw input element
  const withdrawInputElement = document.getElementById('withdrawInput');

// withdraw input amount
  const withdrawInputValueString = withdrawInputElement.value;
  const withdrawInputAmount = parseFloat(withdrawInputValueString);
  
  // input field clear
  withdrawInputElement.value = '';
  
  // validation
  if(isNaN(withdrawInputAmount)){
  alert('please input a number');
  return;
  };

  // balance element
  const balanceElement = document.getElementById('balance');
  const balanceElementString = balanceElement.innerText;
  const balanceAmount = parseFloat(balanceElementString);
  
  // set balance amount
  // validation
  if(withdrawInputAmount > balanceAmount){
    alert("You can't withdraw more than your balance");
    return;
  }
  const totalBalance = balanceAmount - withdrawInputAmount;
  
  balanceElement.innerText = totalBalance;
  
  // total withdraw element
  const withdrawTotalElement = document.getElementById('withdrawAmout');
  const withdrawTotalValueString = withdrawTotalElement.innerText;
  const withdrawTotalAmount = parseFloat(withdrawTotalValueString);


  // set input amount in total withdraw
  const totalWithdraw = withdrawTotalAmount + withdrawInputAmount;

  withdrawTotalElement.innerText = totalWithdraw;
 
})