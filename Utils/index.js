const emailInput = document.querySelector('email_input');
const passwordInput = document.querySelector('.password_input');

function checkInputs() {
  if (
    emailInput.value.trim() !== '' &&
    passwordInput.value.trim() !== ''
  ){
    window.location.href = "../pages/TwoPage.html";
  }
}

emailInput.addEventListener('input', checkInputs);
passwordInput.addEventListener('input', checkInputs);
