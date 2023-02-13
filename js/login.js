document.getElementById('submit-btn').addEventListener('click', function(){
  // get the email input
  const emailElement = document.getElementById('emailInput');
  let emailValue = emailElement.value;
  

  // get the password input
  const passwordElement = document.getElementById('passwordInput');
  let passwordValue = passwordElement.value;
  

  // compare the both value and enter to new html page
  if(emailValue === "hasanur68bd@gmail.com" && passwordValue === '123456'){
    window.location.href = 'bank.html';
  }
  else{
    alert('Incorrect email or password!!!')
  }
  
})

