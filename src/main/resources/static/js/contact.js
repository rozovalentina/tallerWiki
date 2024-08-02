let names = document.getElementById("name");
let surnames = document.getElementById("surnames");
let email = document.getElementById("email");
let semester = document.getElementById("semester");
let description = document.getElementById("description");

let nameError = document.getElementById("nameError");
let surnamesError = document.getElementById("surnamesError");
let emailError = document.getElementById("emailError");
let semesterError = document.getElementById("semesterError");
let descriptionError = document.getElementById("descriptionError");

let namesLengthSpan = document.getElementById("namesLength");
let surnamesLengthSpan = document.getElementById("surnamesLength");
let emailLengthSpan = document.getElementById("emailLength");

let maxNamesLengthSpan = document.getElementById("maxNamesLength");
let maxSurnamesLengthSpan = document.getElementById("maxSurnamesLength");
let maxEmailLengthSpan = document.getElementById("maxEmailLength");

const maxNamesLength = 100, maxSurnamesLength = 100, maxEmailLength = 100;

maxSurnamesLengthSpan.innerHTML = maxSurnamesLength;
maxNamesLengthSpan.innerHTML = maxNamesLength;
maxEmailLengthSpan.innerHTML = maxEmailLength;
namesLengthSpan.innerHTML = 0;
surnamesLengthSpan.innerHTML = 0;
emailLengthSpan.innerHTML = 0;

const emailRegex = /^([A-Z]|[0-9])+@[A-Z]+([.][A-Z]+)+$/


function checkEmail() {
    let correctInput = true;
    let errorMessage = "";
    let emailStr = String(email.value);
    if (isEmpty(email.value)) {
        errorMessage = "Correo vacío";
        correctInput = false;
    }
    else if (emailStr.length > maxNamesLength) {
        errorMessage = "Correo muy largo";
        correctInput = false;
        names.value = emailStr.slice(0, maxNamesLength);
    }
    else{
        if(!emailRegex.test(emailStr)){
            errorMessage = "Correo no válido";
            correctInput = false; 
        }
    }
    changeInputStyle(emailError, email, correctInput, errorMessage);
    emailLengthSpan.innerHTML = email.value.length;
    return correctInput;
}

function checkNames() {
    let correctInput = true;
    let errorMessage = "";
    let namesStr = String(names.value);
    if(isEmpty(names.value)){
        errorMessage = "Nombre vacio";
        correctInput = false;
    }
    else if (namesStr.length > maxNamesLength) {
        errorMessage = "Nombre muy largo";
        correctInput = false;
        names.value = namesStr.slice(0, maxNamesLength);
    }
    changeInputStyle(nameError, names, correctInput, errorMessage);
    namesLengthSpan.innerHTML = names.value.length;
    return correctInput;
}

function checkSurnames() {
    let correctInput = true;
    let errorMessage = "";
    let surnmaesStr = String(surnames.value);
    if(isEmpty(surnames.value)){
        errorMessage = "Apellidos vacio";
        correctInput = false;
    }
    if (surnmaesStr.length > maxSurnamesLength) {
        errorMessage = "Apellidos muy largo";
        correctInput = false;
        surnames.value = surnmaesStr.slice(0, maxSurnamesLength);
    }
    changeInputStyle(surnamesError, surnames, correctInput, errorMessage);
    surnamesLengthSpan.innerHTML = surnames.value.length;
    return correctInput;
}

function checkSemester() {
    let correctInput = true;
    let errorMessage = "";
    try {
        const semesterNumber = Number(semester.value);
        if (isEmpty(String(semester.value))|| !Number.isInteger(semesterNumber)) {
            throw new Error("No es un entero");
        } else {
            if (semesterNumber < 0 || semesterNumber > 16) {
                throw new Error("Debe estar entre 0 y 16");
            }
        }
    } catch (error) {
        errorMessage = error.message;
        correctInput = false;
    }
    changeInputStyle(semesterError, semester, correctInput, errorMessage);
    return correctInput;
}

function checkDescription(){
    let correctInput = true;
    let errorMessage = "";
    let descriptionStr = String(description.value);
    if(isEmpty(descriptionStr)){
        errorMessage = "Descripcion vacia";
        correctInput = false;
    }
    changeInputStyle(descriptionError, description, correctInput, errorMessage);
    return correctInput;
}

/**
 * 
 * @param {HTMLElement} inputErrorElement
 * @param {HTMLElement} inputElement  
 */
function changeInputStyle(inputErrorElement, inputElement, isCorrect, errorMessage) {
    if (isCorrect) {
        inputErrorElement.style.display = 'none';
        inputElement.style.borderBottomColor = "rgba(0, 0, 0, 0.562)";
    } else {
        inputErrorElement.innerText = errorMessage;
        inputErrorElement.style.display = 'block';
        inputElement.style.borderBottomColor = "rgba(212, 0, 0, 0.377)";
    }
}


function isEmpty(text){
    let empty = false;
    if(!text || text.trim().length === 0){
        empty = true;
    }
    return empty;
}

/**
 * 
 * @param {Event} event 
 */
function checkForm(event) {
    event.preventDefault();
    if (checkEmail() && checkNames() && checkSurnames() && checkSemester() && checkDescription()) {
        alert(`Formulario correcto, datos ingresados:\n
            Nombre: ${names.value}\n
            Apellidos: ${surnames.value}\n
            Correo: ${email.value}\n
            Semestre: ${Number(semester.value)}\n
            Descripcion: ${description.value}`);
            document.getElementById("contactForm").submit();
    }
}