function signUpClicked() {
  const button = document.getElementById('sign-up-button')
  button.innerHTML = 'Signing you up...'
  setTimeout(() => {
    button.innerHTML='Sign up successful!'
    setTimeout(() => {button.innerHTML='Sign Up'}, 2000);
  }, 2000);
}
