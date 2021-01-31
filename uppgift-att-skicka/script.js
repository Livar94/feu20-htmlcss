const form = document.querySelector('#form');
    const firstName = document.querySelector('#firstName');
    const lastName = document.querySelector('#lastName');
    const email = document.querySelector('#email');
    const btn = document.querySelector('#btn');
    const output = document.querySelector('#output');

    const users = []

    class User {
        constructor(firstName, lastName, email) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.email = email;
        }
        id = Date.now().toString();
    }

    const createUser = (firstName, lastName, email) => {

        const user = new User(firstName, lastName, email);

        users.push(user); 
        output.insertAdjacentHTML('beforeend', newUser(user)); 

        const u = document.querySelectorAll('#output .user');
        u.forEach(user => {
            user.addEventListener('click', function () {
                this.classList.add('slideout');
                setTimeout(() => {
                    this.remove()
                }, 500)
                console.log(users);
            })
        })
    }

    const newUser = user => {
        const template = `
  <div class="user animate">
    <h3>${user.firstName} ${user.lastName}</h3>
    <p>${user.email}</p>
  </div>
  `
        return template
    }

    form.addEventListener('submit', e => {
        e.preventDefault();

        if (firstName.value !== '' && lastName.value !== '' && email.value !== '') {
            createUser(firstName.value, lastName.value, email.value)
            form.reset();
            firstName.focus();
        }

    })

    


    $(function () {
        $('#btn').on('click', function () {

            var Name = $('#firstName').val();
            var lastName = $('#lastName').val();
            var Email = $('#email').val();
            var formEmail = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,6})+$/;
            






            var gender = document.getElementsByName("gender");
            var formValid = false;

            var i = 0;
            while (!formValid && i < gender.length) {
                if (gender[i].checked) formValid = true;
                i++;
            }

            if (!formValid) {
                $('#empty').text("please choose the gender").css('color', 'red');
            }

            if (Name == "") {
                $('#name_empty').text('please enter user name').css('color', 'red');
                $('#firstName').css('border', '1px solid red');


            }
            if (lastName == "") {
                $('#lastName_empty').text('please enter user last name').css('color', 'red');
                $('#lastName').css('border', '1px solid red');

            }
            if (Email == "") {
                $('#email_empty').text('please enter user email').css('color', 'red');
                $('#email').css('border', '1px solid red');

            } else
                if (!formEmail.test(Email)) {
                    $('#email_empty').text('Email form must be aaa@aaa.aaa').css('color', 'red');
                    $('#email').css('border', '1px solid red');
                }




            if (Name !== "") {
                $('#name_empty').text('').css('color', 'blue');
                $('#firstName').css('border', '1px solid blue');
            } if (lastName !== "") {
                $('#lastName_empty').text('').css('color', 'blue');
                $('#lastName').css('border', '1px solid blue');
            }
            if (formEmail.test(Email)) {
                $('#email_empty').text('').css('color', 'blue');
                $('#email').css('border', '1px solid blue');
            }

            if (Name !== ""
                && (formValid)
                && lastName !== ""
                && formEmail.test(Email)
                && textarea.length > 4) {
              
         
            }
        })
    })