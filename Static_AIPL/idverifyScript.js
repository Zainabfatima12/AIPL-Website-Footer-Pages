document.getElementById('captchaCheckbox').addEventListener('change', function () {
  const captchaMessage = document.getElementById('captchaMessage');

  if (this.checked) {
    captchaMessage.textContent = ""; // Clear error message
  } else {
    alert("Please validate CAPTCHA by checking the box.");
    // captchaMessage.textContent = `Please validate CAPTCHA by checking the box.`;
  }
});

document.querySelector('button').addEventListener('click',() =>{
  const checkBox = document.getElementById('captchaCheckbox')
  if(checkBox.checked){
    alert('SuccessFully login');
  }else{
    alert("check the check box");
  }
})
