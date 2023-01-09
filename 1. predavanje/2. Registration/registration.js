/* Napisati validaciju za formu:
Za polje name - Obavezno, minimum 5 karaktera, max 10.
Za polje surname - Obavezno, minimum 5 karaktera, max 10.
Za polje password - Obavezno, da sadrzi broj i veliko slovo.
Za polje course - Obavezno.
*/

const inputName = document.querySelector("#name");
const inputSurname = document.querySelector("#surname");
const inputPassword = document.querySelector("#password");
const selectCourse = document.querySelector("#course");

const nameError = document.querySelector("#name-error");
const surnameError = document.querySelector("#surname-error");
const passwordError = document.querySelector("#password-error");
const courseError = document.querySelector("#course-error");

const divUserReview = document.querySelector("#user-review");
const btnRegister = document.querySelector("#btn-register");

let isValidate = true;


function stringHasNumber(str) {
    number = /\d/
    return number.test(str)
}

function stringHasUpperCase(str) {
    chars = /[A-Z]/
    return chars.test(str)
}


btnRegister.addEventListener("click", ()=>{
    if (inputName.value == "") {
        // nameError.textContent = "";
        nameError.textContent = "This field is required";
        isValidate = false;
    }
    else if (inputName.value.length<5) {
        // nameError.textContent = "";
        nameError.textContent = "This field must have 5 characters."
        isValidate = false;
    }
    else if (inputName.value.length>15) {
        // nameError.textContent = "";
        nameError.textContent = "This field can't have more than 15 characters."
        isValidate = false;
    }

    if (inputSurname.value == "") {
        // surnameError.textContent = "";
        surnameError.textContent = "This field is required";
        isValidate = false;
    }
    else if (inputSurname.value.length<5) {
        // surnameError.textContent = "";
        surnameError.textContent = "This field must have 5 characters."
        isValidate = false;
    }
    else if (inputSurname.value.length>15) {
        // surnameError.textContent = "";
        surnameError.textContent = "This field can't have more than 15 characters."
        isValidate = false;
    }

    if (inputPassword.value == "") {
        // passwordError.textContent = "";
        passwordError.textContent = "This field is required";
        isValidate = false;
    }
    else if (!stringHasNumber(inputPassword.value)) {
        // passwordError.textContent = "";
        passwordError.textContent = "Password must contain at least one number."
        isValidate = false;
    }
    else if (!stringHasUpperCase(inputPassword.value)) {
        // passwordError.textContent = "";
        passwordError.textContent = "This field must include uppercase."
        isValidate = false;
    }

    if (!(selectCourse.value == "HTML" || selectCourse.value == "CSS" || selectCourse.value == "JS" || selectCourse.value == "React")) {
        // courseError.textContent = "";
        courseError.textContent = "You have to choose one course."
        isValidate = false;
    }

    if (isValidate) {
        let user = {
            name: inputName.value,
            surname: inputSurname.value,
            password: inputPassword.value,
            course: selectCourse.value
        }
        divUserReview.innerHTML = `
            Name: ${user.name} <br>
            Surname: ${user.surname} <br>
            Course: ${user.course}
        `
    }
 
})

