let form = document.getElementById('form');
let username = document.getElementById('username');
let email = document.getElementById('email');
let password = document.getElementById('password');
let password2 = document.getElementById('password2');


form.addEventListener('submit', event => {

    validateInputs();
    if (input1 == 0 && input2 == 0 && input3 == 0 && input4 == 0) {
        const userName = username.value;

        // Save the user's name in localStorage
        localStorage.setItem('userName', userName);
        //  window.location.href = 'index.html';
        form.submit();




    } else {
        event.preventDefault();

    }


});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    //console.log(inputControl);
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
const isValidUserName = (usernameValue) => {
    const regex = /^[a-zA-Z][a-zA-Z0-9]*$/;
    return regex.test(usernameValue) && usernameValue.length > 6;
}

let input1 = 1;
let input2 = 1;
let input3 = 1;
let input4 = 1;
const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if (usernameValue === '') {
        setError(username, 'Username is required');
    } else if (!isValidUserName(usernameValue)) {
        setError(username, 'Username must start with character ,length must be more than 6');
    }
    else {
        setSuccess(username);
        input1 = 0;
    }

    if (emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
        input2 = 0
    }

    let flag = true;

    if (passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        flag = false;
        setSuccess(password);
        input3 = 0;
    }

    if (password2Value === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");
    } else {

        if (flag == false) {
            setSuccess(password2);
            input4 = 0;
        }
    }


};
function upperCase() {

    username.value = username.value.charAt(0).toUpperCase() + username.value.slice(1);
}


