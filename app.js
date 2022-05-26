document.getElementById('first-name').addEventListener('blur', validateFirstName)
document.getElementById('last-name').addEventListener('blur', validateLastName)
document.getElementById('email').addEventListener('blur', validateEmail)
document.getElementById('password').addEventListener('blur', validatePassword)

function validateFirstName() {
    const firstName = document.getElementById('first-name')

    if(!firstName.value) {
        firstName.classList.add('is-invalid')
    } else {
        firstName.classList.remove('is-invalid')
    }
    
}
function validateLastName() {
    const lastName = document.getElementById('last-name')

    if(!lastName.value) {
        lastName.classList.add('is-invalid')
    } else {
        lastName.classList.remove('is-invalid')
    }
    
}
function validateEmail() {
    const email = document.getElementById('email')

    if(!email.value) {
        email.classList.add('is-invalid')
    } else {
        email.classList.remove('is-invalid')
    }
    
}
function validatePassword() {
    const password = document.getElementById('password')

    if(!password.value) {
        password.classList.add('is-invalid')
    } else {
        password.classList.remove('is-invalid')
    }
    
}