const { compileFunction } = require("vm");

const submit = document.getElementById('submit');
const username = document.getElementById('name');
const email = document.getElementById('email');
const info = document.getElementById('info');
const validateName = () => {
  let valid = false;
  const regEx = /\w+\s\w+/i;
  if (username.value.length < 1) {
    const alertTag = `<div class="alert-danger p-2 my-2">
    You must enter a full name.
  </div>`;
  username.parentNode.insertAdjacentHTML('beforeend', alertTag);
  } else if (regEx.test(username.value)) {
    username.classList.add("green");
    valid = true;
  } else {
    const alertTag = `<div class="alert-danger p-2 my-2">
      ${username.value} is not valid. You should enter a first name and a last name with letters only space separated.
    </div>`;
    username.parentNode.insertAdjacentHTML('beforeend', alertTag);
  }
  return valid;
}
const validateEmail = () => {
  let valid = false;
  const eRegEx = /\w+\.?\w+(\d+)?@\w+\.\w{2,4}/i;
  if (email.value.length < 1) {
    const alertTag = `<div class="alert-danger p-2 my-2">
    You must enter an email.
  </div>`;
  email.parentNode.insertAdjacentHTML('beforeend', alertTag);
  } else if (eRegEx.test(email.value)) {
    email.classList.add("green");
    valid = true;
  } else {
    const alertTag = `<div class="alert-danger p-2 my-2">
      ${email.value} is not a valid email.
    </div>`;
    email.parentNode.insertAdjacentHTML('beforeend', alertTag);
  }
  return valid;
}
const cleanAlerts = () => {
  const alerts = document.querySelectorAll(".alert-danger");
  alerts.forEach((alertMessage) => {
    alertMessage.remove();
  });
};
const validateInfo = () => {
  let valid = false;
  if (info.value === 'default') {
    const alertTag = `<div class="alert-danger p-2 my-2">
      You must select an option.
    </div>`;
    info.parentNode.insertAdjacentHTML('beforeend', alertTag);
  } else {
    valid = true;
  }
  return valid;
};
const checkCompletion = (validName, validEmail, validInfo) => {
  if (validName && validEmail && validInfo) {
    alert("Thank you!");
  }
};
const validateForm = (event) => {
  cleanAlerts()
  const validName = validateName();
  const validEmail = validateEmail();
  const validInfo = validateInfo();
  checkCompletion(validName, validEmail, validInfo);
  event.preventDefault();
};
submit.addEventListener('click', validateForm);