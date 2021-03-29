'use strict'

const formInputs = (()=> {
    const firstName = document.querySelector('.first-name');
    const lastName = document.querySelector('.last-name');
    const email = document.querySelector('.email');
    const password = document.querySelector('.password');
    const submitBtn = document.querySelector('.btn');
    const form = document.querySelector('form');
    const inputArr = [firstName, lastName, email, password];
    const errorMsg = document.querySelectorAll('.error-msg');

    const formValidator = (input) => {
        let emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;

        if (input === firstName) {
            if (!firstName.value) {
                firstName.classList.add('error')
                errorMsg[0].classList.add('error-msg-active')
            } else if (firstName.value) {
                firstName.classList.remove('error')
                errorMsg[0].classList.remove('error-msg-active')
            }
        } else if (input === lastName) {
            if (!lastName.value) {
                lastName.classList.add('error')
                errorMsg[1].classList.add('error-msg-active')

            } else if (lastName.value) {
                lastName.classList.remove('error')
                errorMsg[1].classList.remove('error-msg-active')

            }
        } else if (input === email) {
            if (!email.value || !emailRegex.test(email.value)) {
                email.classList.add('error')
                errorMsg[2].classList.add('error-msg-active')

            } else if (email.value || emailRegex.test(email.value)) {
                email.classList.remove('error')
                errorMsg[2].classList.remove('error-msg-active')

            }
        } else if (input === password) {
            if (!password.value) {
                password.classList.add('error')
                errorMsg[3].classList.add('error-msg-active')

            } else if (password.value) {
                password.classList.remove('error')
                errorMsg[3].classList.remove('error-msg-active')

            }
        }
    }

    inputArr.forEach( input => {
        input.addEventListener('blur', (event) => {
            formValidator(input);
        });
    })

    submitBtn.addEventListener('click', () => {
        
        inputArr.forEach( input => {
            formValidator(input);
        })

        if (firstName.checkValidity() && lastName.checkValidity() && email.checkValidity() && password.checkValidity()) {
            form.submit();
        }
    })

})();