document.getElementById('form').addEventListener('submit', function(e) {

    if (!validateForm()) {
        e.preventDefault();
    }
});

function validateForm() {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const pass = document.getElementById("password");
    const cpass = document.getElementById("cpassword");
    const phone = document.getElementById("phone");
    
    let success = true;

    const nameVal = name.value.trim();
    if (nameVal === '' || nameVal.length < 2) {
        success = false;
        setError(name, 'Username is required');
    } else {
        setSuccess(name);
    }

    const emailVal = email.value.trim();
    if (emailVal === '') {
        success = false;
        setError(email, 'Email is required');
    } else if (!validateEmail(emailVal)) {
        success = false;
        setError(email, 'Please enter a valid email');
    } else {
        setSuccess(email);
    }

    const passVal = pass.value.trim();
    if (passVal === '') {
        success = false;
        setError(pass, 'Password is required');
    } else if (passVal.length < 8) {
        success = false;
        setError(pass, 'Password must be at least 8 characters');
    } else {
        setSuccess(pass);
    }

    const cpassVal = cpass.value.trim();
    if (cpassVal === '') {
        success = false;
        setError(cpass, 'Confirm password is required');
    } else if (cpassVal !== passVal) {
        success = false;
        setError(cpass, 'Passwords do not match');
    } else {
        setSuccess(cpass);
    }

    const phoneVal = phone.value.trim();
    if (phoneVal === '') {
        success = false;
        setError(phone, 'Phone number is required');
    } else {
        setSuccess(phone);
    }

    return success;
}

function setError(element, message) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');
    errorElement.innerText = message;
    inputGroup.classList.add('error');
    inputGroup.classList.remove('success');
}

function setSuccess(element) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');
    errorElement.innerText = '';
    inputGroup.classList.add('success');
    inputGroup.classList.remove('error');
}

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
}
