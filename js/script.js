window.onload = () => {
    const password = document.getElementById('password');
    const passwordCheck = document.getElementById('password-check');

    passwordCheck.onkeyup = () => {
        if (passwordCheck.value === "" || password.value === "") {
            password.classList.remove('error');
            passwordCheck.classList.remove('error');
            password.classList.remove('check');
            passwordCheck.classList.remove('check');

        } else if (passwordCheck.value === password.value) {
            password.classList.add('check');
            passwordCheck.classList.add('check');
            password.classList.remove('error');
            passwordCheck.classList.remove('error');

        } else if (passwordCheck.value !== password.value) {
            password.classList.add('error');
            passwordCheck.classList.add('error');
            password.classList.remove('check');
            passwordCheck.classList.remove('check');

        }
    }

    password.onkeyup = () => {
        if (passwordCheck.value === "" || password.value === "") {
            password.classList.remove('error');
            passwordCheck.classList.remove('error');
            password.classList.remove('check');
            passwordCheck.classList.remove('check');

        } else if (passwordCheck.value === password.value) {
            password.classList.add('check');
            passwordCheck.classList.add('check');
            password.classList.remove('error');
            passwordCheck.classList.remove('error');

        } else if (passwordCheck.value !== password.value) {
            password.classList.add('error');
            passwordCheck.classList.add('error');
            password.classList.remove('check');
            passwordCheck.classList.remove('check');

        }
    }
}