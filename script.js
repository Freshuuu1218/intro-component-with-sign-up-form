const firstNameInput = document.querySelector('#firstName');
const lastNameInput = document.querySelector('#lastName');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const button = document.querySelector('button');
const inputs = document.querySelectorAll('input');
const form = document.querySelector('form');
const labels = document.querySelectorAll('label');

button.addEventListener('click',()=>{
    inputs.forEach((input,idx) => {
        if(input.value){
            input.style.border = '1px solid hsl(154, 59%, 51%)'
        }else{
            input.style.border = '1px solid hsl(0, 100%, 74%)';
            labels[idx].innerText = `${input.placeholder} cannot be empty`;
            let errorIcon = document.createElement('img');
            errorIcon.src = './images/icon-error.svg';
            errorIcon.alt = 'error-icon';
            errorIcon.classList.add('error-icon');
            labels[idx].appendChild(errorIcon);

            setTimeout(()=>{
                labels[idx].innerHTML = "";
                errorIcon.remove();
            },8000)
        }
    })
})









function checkEmail(input){
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1-3}\.[0-9]{1-3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())){
    showSuccess(input);
  }
  else{
    showError(input, "Email is not valid");
  }
}