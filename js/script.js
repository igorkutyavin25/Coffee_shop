let btnShow = document.querySelector('#burger');
console.log(burger);

let nav = document.querySelector('#nav');
console.log(nav)

let isShow = false;

btnShow.addEventListener('click', (e) => {
    isShow = !isShow

    if(isShow) {
        btnShow.classList.toggle('header__burger_active')
    }
    if (isShow) {
        nav.classList.toggle('navigation__active')
    }

});


let submit = document.querySelector('#submit');
console.log(submit);

let success = document.querySelector('#success');
console.log(success);

let error = document.querySelector('#error');
console.log(error);

let nam = document.querySelector('#name');
console.log(nam);

let email = document.querySelector('#email');
console.log(email);

let message = document.querySelector('#message');
console.log(message)

submit.addEventListener('submit',(e) => {
    e.preventDefault()
    console.log('clicked on validate')
  });

  function stopUpdating(event) {
    event.preventDefault();
    validation();
    setTimeout(() => {
      error.classList.remove('wrapper-success_active');
    }, 3000);
    }
  
  submit.addEventListener("click", stopUpdating, false);
  
  function validation() {
    if (nam.value === '' || email.value === '' || message.value === '') {
      error.classList.add('form__fields-error_active');
    } else {
      successuccess.classList.add('wrapper-success_active');
      error.classList.remove('form__fields-error_active');
      nam.value = '';
      email.value = '';
      message.value = '';
    }
  }  