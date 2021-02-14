const signupForm = document.querySelector('.form');
const submitBtn = document.querySelector('.submit__btn');
const inputs = document.querySelectorAll('.form__field');
const emailCheck = /\S+@\S+\.\S+/;
const passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;


function validateForm() {

  let valid = true;
  const name = inputs[0];
  const nameMsg = name.dataset.msg;
  const lastName = inputs[1];
  const lastNameMsg = lastName.dataset.msg;
  const email = inputs[2];
  const emailMsg = email.dataset.msg;
  const password = inputs[3];
  const passwordMsg = password.dataset.msg;
  
  if (name.value === '') {
     name.nextElementSibling.textContent = nameMsg;
     name.classList.add('invalid');
     valid = false;
  }

  if (lastName.value === '') {
      lastName.nextElementSibling.textContent = lastNameMsg;
      lastName.classList.add('invalid');
      valid = false;
  }

  if (email.value === '' || !email.value.match(emailCheck)) {
      email.nextElementSibling.textContent = emailMsg;
      email.classList.add('invalid');
      valid = false;
  }

  if (password.value === '' || !password.value.match(passwordCheck)) {
      password.nextElementSibling.textContent = passwordMsg;
      password.classList.add('invalid');
      valid = false;
  }

  return valid;
}


function submitForm() {

    if (!validateForm()) {
        return;
    }
    
    signupForm.submit();

}


function removeInvalid(e) {
    e.currentTarget.nextElementSibling.textContent = '';
    e.currentTarget.classList.remove('invalid');
}




submitBtn.addEventListener('click', submitForm);

inputs.forEach(input => input.addEventListener('keyup', removeInvalid));







