const form = document.getElementById('form');
// const username = document.getElementById('username');
const firstname = document.getElementById('firstName');
const lastname = document.getElementById('lastName');
const email = document.getElementById('email');

form.addEventListener('submit', (e) => {
    e.preventDefault();


    checkInputs();


});

function checkInputs() {
    // const usernamevalue = username.value.trim();
    const firstnamevalue = firstName.value.trim();
    const lastnamevalue = lastName.value.trim();
    const emailvalue = email.value.trim();

    // if (usernamevalue === '') {
    //     setErrorFor(username, 'Username cannot be blank');

    // } else {
    //     setSuccessFor(username);

    // }

    if (firstnamevalue === '') {
        setErrorFor(firstName, 'Firstname cannot be blank');

    } else {
        setSuccessFor(firstName)
    }

    if (lastnamevalue === '') {
        setErrorFor(lastName, 'Lastname cannot be blank');

    } else {
        setSuccessFor(lastName)
    }

    if (emailvalue === '') {
        setErrorFor(email, 'Email cannot be blank');


    } else if (!isEmail(emailvalue)) {
        setErrorFor(email, 'Email is not valid')
    } else {
        setSuccessFor(email)

    }


}

function setErrorFor(input, message) {
    const formCotrol = input.parentElement;
    const small = formCotrol.querySelector('small');

    small.innerText = message;

    formCotrol.className = 'form-control error';

}

function setSuccessFor(input) {
    const formCotrol = input.parentElement;
    formCotrol.className = 'form-control success';
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


// SOCIAL PANEL JS
// const floating_btn = document.querySelector('.floating-btn');
// const close_btn = document.querySelector('.close-btn');
// const social_panel_container = document.querySelector('.social-panel-container');

// floating_btn.addEventListener('click', () => {
// 	social_panel_container.classList.toggle('visible')
// });

// close_btn.addEventListener('click', () => {
// 	social_panel_container.classList.remove('visible')
// });